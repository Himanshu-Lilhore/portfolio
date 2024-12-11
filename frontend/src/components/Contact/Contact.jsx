import SocialPalette from "./SocialPalette";
import ContactCard from "./ContactCard";
import './Contact.css'
import { useState, useEffect, forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    const [connect, setConnect] = useState('connect?')
    const connects = [
        'connect?',
        'connect!', 
        // 'c*nn3ct!',  
        // 'connect!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        // 'c*nnect?', 
        // 'c0nnect?', 
        // 'c*nn3ct?', 
        // 'conn3ct?', 
        // 'connect!!',
        // 'c0nn3ct?', 
        // 'c0nn3ct!!', 
    ]

    useEffect(() => {
        setInterval(() => {
            setConnect(connects[Math.floor(Math.random()*connects.length)])
        }, 500);
    }, [])


    return (
        <div ref={ref} className="contact-section relative px-36 py-16 flex justify-evenly h-fit">
            {/* section heading */}
            <div className="connect-title -rotate-12 px-10 z-[99] font-extrabold">
                <div className="-mb-5 w-fit">Let's</div>
                <div className="w-fit relative">
                    <div className="opacity-0 pr-5 pl-7 min-w-[34rem]">connect?</div>
                    <div 
                        // onMouseEnter={() => { setCurrIdx(prevVal => {return prevVal===connects.length-1?0:prevVal+1}) }}
                        className="connect absolute top-0 left-0 nowrap pr-5 pl-7 backdrop-saturate-200 shadow-xl rounded-lg min-w-[34rem]">
                        {/*{connects[currIdx]}*/}
                        {connect}
                    </div>
                </div>
            </div>

            {/* section main */}
            <div className="contact-main flex justify-center h-fit relative">

                <div className="z-[99]">
                    <SocialPalette />
                </div>

                <div className="z-[90] absolute left-28">
                    <ContactCard />
                </div>

                <div className="min-w-96 -translate-x-32">
                    {/* dummy placeholder to maintain container size */}
                </div>

            </div>

            {/* doodle */}
            <div className="absolute w-[60rem] -top-[20rem] -left-[20rem] rotate-6 inset-x-0 z-0">
                <img className="w-full" src={'/doodles/doodle4.png'} />
            </div>

        </div>
    )
})

export default Contact;