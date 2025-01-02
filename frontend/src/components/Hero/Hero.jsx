import Waves from "./Waves/Waves"
import { useScroll } from "../Util/ScrollProvider"

export default function Hero() {
    const hiClasses = 'p-3 px-5 w-fit -rotate-6 polygon'
    const devClasses = 'p-2'
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className="bg-cyan-400 flex flex-wrap justify-center content-center h-screen overflow-x-hidden">
                <div className='absolute text-4xl text-white' style={{ top: 272 + scrollVal * 0.8 }}>

                    {/* Hi */}
                    <div className="relative -top-2 lg:top-1 left-24 lg:left-2 shadow-2xl shadow-white">
                        <div className={`${hiClasses} opacity-0 scale-50 lg:scale-100 z-[22] bg-black`}
                            style={{ clipPath: 'polygon(5% 15%, 90% 0%, 98% 95%, 0% 95%)' }}
                        >
                            Hi there 👋
                        </div>
                        <div className={`${hiClasses} scale-50 lg:scale-100 absolute left-1 -inset-1 z-[22] bg-black`}
                            style={{ clipPath: 'polygon(5% 15%, 90% 0%, 98% 92%, 0% 89.4%)' }}
                        >
                            Hi there 👋
                        </div>
                        <div className={`${hiClasses} scale-50 lg:scale-105 absolute z-[21] left-1 -inset-1 bg-orange-400`}
                            style={{ clipPath: 'polygon(5% 15%, 90% 0%, 100% 100%, 0% 90%)' }}
                        >
                            Hi there 👋
                        </div>
                    </div>

                    {/* Name */}
                    <div className='scale-50 lg:scale-100 -top-20 lg:top-0 px-3 py-1 flex text-8xl z-20 relative bg-black border-4 border-orange-400 font-medium'>
                        <div className="block font-light">I'm&nbsp;</div>
                        <div>Himanshu Lilhore</div>
                    </div>

                    {/* dev */}
                    <div className="relative mt-5 w-fit -top-44 lg:top-0 left-12 lg:left-0">
                        <div className={`${devClasses} scale-50 lg:scale-100 z-[41] relative`}>A full stack web developer</div>
                        <div className={`${devClasses} scale-50 lg:scale-100 z-40 absolute top-4 left-0 bg-red-500 w-full h-1/2 blur-sm`}></div>
                    </div>

                </div>

                <div className='absolute h-screen w-full overflow-hidden top-0 left-0'>
                    <Waves></Waves>
                </div>
            </div>
        </>
    )
}