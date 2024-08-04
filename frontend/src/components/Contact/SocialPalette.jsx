import { useState, useEffect, useRef, useCallback } from 'react';

export default function SocialPalette() {
    const [profiles, setProfiles] = useState([]);
    const observerRef = useRef(null);
    const parentRef = useRef(null);

    const [scrollVal, setScrollVal] = useState(0);
    const oldScrollVal = useRef(0);
    const targetScrollVal = useRef(100);

    const socials = [
        { name: 'twitter', link: 'https://x.com/HimanshuLilhore', desc: '@himanshulilhore' },
        { name: 'github', link: 'https://github.com/Himanshu-Lilhore', desc: '@Himanshu-Lilhore' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/himanshulilhore/', desc: '@himanshulilhore' },
        { name: 'leetcode', link: 'https://leetcode.com/u/Himanshu_Lilhore/', desc: '@Himanshu_Lilhore' },
        { name: 'gmail', link: 'mailto:himanshulilhore@gmail.com', desc: 'himanshulilhore@gmail.com' },
        { name: 'codechef', link: 'https://www.codechef.com/users/a_neutron_star', desc: '@a_neutron_star' },
        { name: 'codeforces', link: 'https://codeforces.com/profile/a_neutron_star', desc: '@a_neutron_star' },
        { name: 'instagram', link: 'https://www.instagram.com/himanshulilhore', desc: '@himanshulilhore' },
        { name: 'spotify', link: 'https://open.spotify.com/user/31signniy6dzlup4t54ymz6pwv3q', desc: 'Share your playlist !' },
        { name: 'chesscom', link: 'https://www.chess.com/member/new_tron', desc: 'Up for a quick match ?' },
    ];



    const scrollStep = 100; // pixels to scroll
    const scrollInterval = 1500; // milliseconds
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let animationFrameId;
        let intervalId;
        let timeoutId;

        const smoothScroll = () => {
            if (parentRef.current && !isPaused) {
                const start = parentRef.current.scrollTop;
                const end = start + scrollStep;
                const duration = scrollInterval;
                let startTime = null;

                const animateScroll = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const newScrollTop = start + (end - start) * progress;
                    parentRef.current.scrollTop = newScrollTop;

                    if (progress < 1) {
                        animationFrameId = requestAnimationFrame(animateScroll);
                    }
                };

                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        const startScrolling = () => {
            // Run the first scroll immediately
            smoothScroll();
            // Set up the interval for subsequent scrolls
            intervalId = setInterval(smoothScroll, scrollInterval);
        };

        const stopScrolling = () => {
            clearInterval(intervalId);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };

        // Use setTimeout to start the first scroll immediately
        timeoutId = setTimeout(startScrolling, 0);

        return () => {
            clearTimeout(timeoutId);
            stopScrolling();
        };
    }, [isPaused]);

    const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    useEffect(() => {
        const currentElement = parentRef.current;
        if (currentElement) {
            currentElement.addEventListener('scroll', preventScroll, { passive: false });

            profiles.forEach((_, index) => {
                const childElement = currentElement.children[index];
                if (childElement) {
                    childElement.addEventListener('mouseenter', () => setIsPaused(true));
                    childElement.addEventListener('mouseleave', () => setIsPaused(false));
                }
            });
        }

        return () => {
            if (currentElement) {
                currentElement.removeEventListener('scroll', preventScroll);

                profiles.forEach((_, index) => {
                    const childElement = currentElement.children[index];
                    if (childElement) {
                        childElement.removeEventListener('mouseenter', () => setIsPaused(true));
                        childElement.removeEventListener('mouseleave', () => setIsPaused(false));
                    }
                });
            }
        };
    }, [profiles]);



    useEffect(() => {
        setProfiles(socials);
    }, []);

    const addProfiles = () => {
        setProfiles(prevProfiles => {
            const newProfiles = [...prevProfiles, ...socials];
            
            // Preventing infinite card spawn
            if (newProfiles.length > 15 * socials.length) {
                return newProfiles.slice(15*socials.length, 16*socials.length);
            }

            return newProfiles;
        });
    };

    const lastProfileRef = useCallback(node => {
        if (observerRef.current) observerRef.current.disconnect();  // disconnecting previous connected element from the observerRef

        if (node) {
            observerRef.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    addProfiles();
                }
            }, {
                root: parentRef.current
            });
            observerRef.current.observe(node);  // connecting new element to the observer
        }
    }, []);
    

    return (
        <div ref={parentRef} className="profile-container flex flex-col gap-3 px-5 py-1 max-h-96 overflow-y-scroll w-80">
            {profiles.map((element, index) => (
                <div ref={index === profiles.length - 1 ? lastProfileRef : null} className='social relative z-[99] w-fit' key={index}>
                    <a href={element.link} target='_blank' rel='noopener noreferrer'>
                        <div className='detailscard absolute bg-white top-0 left-0 h-full min-w-32 border-2 border-black rounded-l-full rounded-r-custom z-[100] pr-2 overflow-hidden flex items-center justify-center text-nowrap'>
                            <div style={{ transform: 'translateX(-1.6px)' }} className="border-2 border-transparent w-14 rounded-full p-3 aspect-square">
                                <img className="h-full" src={`/ContactLogos/${element.name}.svg`} alt={element.name} />
                            </div>
                            <div>{element.desc}</div>
                        </div>
                        <div className="bg-white/90 circleimg aspect-square h-14 border-2 border-black/20 rounded-full p-3 z-[99]">
                            <img className="h-full" src={`/ContactLogos/${element.name}.svg`} alt={element.name} />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
