import Waves from "./Waves";

export default function Hero() {

    return (
        <>
            <div className="flex flex-wrap justify-center content-center h-screen relative">
                <div className='absolute text-4xl top-56'>
                    <div className="">
                        Hi there 👋
                    </div>
                    <div className='flex text-8xl'>
                        <div>I'm&nbsp;</div>
                        <div>Himanshu Lilhore</div>
                    </div>
                    <div>A full stack web developer</div>
                </div>

                <div className='absolute bottom-16 w-full object-cover overflow-hidden'>
                    <Waves></Waves>
                </div>
            </div>
        </>
    )
}