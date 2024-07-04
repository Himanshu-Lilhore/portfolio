import Waves from "./Waves/Waves";
import BeachRight from "../../assets/Beach/BeachRight";

export default function Hero() {

    return (
        <>
            <div className="flex flex-wrap justify-center content-center h-screen">
                <div className='absolute text-4xl text-white' style={{top: '17rem'}}>
                    <div className="relative p-2" style={{zIndex: '60'}}>
                        Hi there 👋
                    </div>
                    <div className='flex text-8xl z-20 relative'>
                        <div>I'm&nbsp;</div>
                        <div>Himanshu Lilhore</div>
                    </div>
                    <div className="z-40 relative p-2 pt-8">A full stack web developer</div>
                </div>

                <div className='absolute w-screen h-screen top-0 left-0 overflow-hidden'>
                    <Waves></Waves>
                    <BeachRight className='absolute bottom-0 right-0 z-[100]'/>
                </div>
            </div>
        </>
    )
}