import { useEffect } from "react";
import Waves from "./Waves/Waves";
import { useScroll } from "../Util/ScrollProvider";

export default function Hero() {

    return (
        <>
            <div className="flex flex-wrap justify-center content-center h-screen overflow-x-hidden">
                <div className='absolute text-4xl text-white' style={{ top: '17rem' }}>
                    <div className="relative p-2 z-20" 
                    // style={{filter: 'blur(1px)' }}
                    >
                        Hi there 👋
                    </div>
                    <div className='flex text-8xl z-20 relative' 
                    // style={{ filter: 'blur(1px)' }}
                    >
                        <div>I'm&nbsp;</div>
                        <div>Himanshu Lilhore</div>
                    </div>
                    <div className="z-40 relative p-2 pt-8">A full stack web developer</div>
                </div>

                <div className='absolute h-screen w-full overflow-hidden top-0 left-0'>
                    <Waves></Waves>
                </div>
            </div>
        </>
    )
}