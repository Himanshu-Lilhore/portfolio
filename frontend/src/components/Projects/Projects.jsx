import React, { useEffect, useRef, useState, useCallback, forwardRef } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
    const [cards, setCards] = useState([]);
    const observerRef = useRef(null);

    const projList = [
        { title: "Skillswap", img: "/projects/skillswap.png", github: "https://github.com/Himanshu-Lilhore/Skillswap", tech: ['React', 'Node', 'Tailwind', 'mongoDB'], desc: ['Collaborate and find mentors', '50+ registered users', 'Tinder for techies'], link: 'https://skillswap-seven.vercel.app/' },
        { title: "Collaborative IDE", img: "projects/collaborative ide.png", github: "https://github.com/Himanshu-Lilhore/Collaborative-IDE", tech: ['Typescript', 'React', 'node', 'Redis', 'WebRTC', 'mongoDB'], desc: ['Realtime collaborative IDE', 'Uses redis & webRTC for low latency', 'Dockerized sessions for enhanced privacy'], link: '' },
        { title: "do-it-now", img: "/projects/do-it-now.png", github: "https://github.com/Himanshu-Lilhore/do-it-now", tech: ['typescript', 'React', 'node', 'mongoDB', 'Tailwind'], desc: ['A day planner', 'Collective calendar+todo app', 'Used Youtube API for fetching video metadata & thumbnail'], link: '' },
        { title: "Youtube comment scraper", img: "/projects/yt-comment-scraper.png", github: "https://github.com/Himanshu-Lilhore/yt-comment-scraper", tech: ['React', 'Node', 'Tailwind', 'YoutubeAPI'], desc: ['Searching through comments of a video', 'Filters comments mentioning a keyword', 'Works on YT shorts as well'], link: 'https://yt-comment-scraper.vercel.app/' },
        { title: "OneClick", img: "/projects/OneClick.png", github: "https://github.com/Himanshu-Lilhore/OneClick", tech: ['Javascript', 'HTML'], desc: ['Browser extension : Manual testing helper', 'Automates a part of SITs', 'Makes testing 10x as quick'], link: 'https://microsoftedge.microsoft.com/addons/detail/oneclick/glhmdjhpacepphpanbihpaidmgfbppkg' },
        { title: "Lift simulation", img: "/projects/lift simulation.png", github: "https://github.com/Himanshu-Lilhore/lift-sim-js", tech: ['Javascript', 'tailwind'], desc: ['Simulating lift movement in a building', 'Extensive use of CSS animations', 'Done under a challenge by RealDevSquad'], link: 'https://himanshu-lilhore.github.io/lift-sim-js/' },
    ];


    useEffect(() => {
        setCards(projList);
    }, []);


    const addCards = () => {
        setCards(prevCards => {
            const newCards = [...prevCards, ...projList];

            // preventing infinite card spawn
            if (newCards.length > 15 * projList.length) {
                return newCards.slice(15 * projList.length, 16 * projList.length);
            }

            return newCards;
        });
    };


    const lastCardRef = useCallback(
        node => {
            if (observerRef.current) observerRef.current.disconnect();  // disconnecting previous connected element from the observerRef

            // making new intersection observer object (pointed by observerRef)
            observerRef.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    addCards();
                }
            });

            if (node) observerRef.current.observe(node);  // connecting new element to the observer
        },
        []
    );

    return (
        <div ref={ref} className="relative bg-purple-300 p-10">
            {/* title */}
            <div className="absolute top-0 text-9xl font-extrabold text-gray-700/50 left-1/2 transform -translate-x-1/2 top-10">PROJECTS</div>

            <div className="my-8 mx-28 relative">
                
                <div className="belt relative z-[2] flex px-8 py-16 gap-12 overflow-x-auto border-x-4 border-black">
                    {/* cards */}
                    {cards.map((card, index) => {
                        if (index === cards.length - 1) {
                            return (
                                <ProjectCard ref={lastCardRef} details={card} key={index} />
                            );
                        } else {
                            return (
                                <ProjectCard details={card} key={index} />
                            );
                        }
                    })}
                </div>

                <div className='pseudo ps-left'></div>
                <div className='pseudo ps-right'></div>

                {/* doodle */}
                <div className="absolute -top-80 -right-36 z-[1]">
                    <img className="" src={`/doodles/doodle1.png`} />
                </div>
            </div>
        </div>
    );
})

export default Projects;
