import React, { useEffect, useRef, useState, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const [cards, setCards] = useState([]);
    const observerRef = useRef(null);

    const projList = [
        { title: "Skillswap", img: "/projects/skillswap.png", github: "", tech: [], desc: ['Collaborate and find mentors', '50+ registered users', 'Tinder for techies'] },
        { title: "Youtube comment scraper", img: "", github: "", tech: [], desc: [] },
        { title: "Blog", img: "", github: "", tech: [], desc: [] },
        { title: "Realtime chat app", img: "", github: "", tech: [], desc: [] },
        { title: "OneClick", img: "", github: "", tech: [], desc: [] },
    ];


    useEffect(() => {
        setCards(projList);
    }, []);

    
    const addCards = () => {
        setCards(prevCards => {
            const newCards = [...prevCards, ...projList];
            
            // preventing infinite card spawn
            if (newCards.length > 3*projList.length) {
                return newCards.slice(projList.length, 3*projList.length);
            }

            return newCards;
        });
    };

    useEffect(() => {
        console.log(cards)
    }, [cards])


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
        <div className="relative bg-purple-300 p-10">
            <div className="absolute top-0 text-9xl font-extrabold text-gray-700/50 left-1/2 transform -translate-x-1/2 top-10">PROJECTS</div>
            <div className="py-8 px-28">
                <div className="flex px-8 py-16 gap-12 overflow-x-auto container border-x-4 border-black">
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
            </div>
        </div>
    );
}
