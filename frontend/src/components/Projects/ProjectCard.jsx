import './ProjectCard.css'
import { forwardRef } from 'react'

const ProjectCard = forwardRef(({ details, ...props }, ref) => {

    return (
        <div ref={ref} className="card relative flex flex-col bg-cyan-500 border-4 border-gray-800 rounded-lg p-5 pb-3 min-w-[375px] container shadow-black/40 shadow-xl overflow-hidden" {...props}>
            {/* image */}
            <div className="imgDiv relative rounded-lg overflow-hidden border-0">
                <img className='border-0' src={details.img} />
                <div className="grad opacity-0 absolute -inset-0.5 bg-gradient-to-b from-transparent from-20% to-70% to-cyan-500"></div>
                <div className='link text-white absolute z-[92] left-1/2 transform -translate-x-1/2 top-14 opacity-0'>
                    <button className='flex flex-row flex-nowrap rounded-sm bg-lime-600 py-1 px-9'>
                        <div className='flex flex-nowrap'>Live Link</div>
                        <div className='ml-1 pt-1 h-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div>

                    </button>
                </div>
            </div>


            {/* title + github */}
            <div className="title flex justify-between py-1 px-2 z-[91]">
                <div className="text-xl font-extrabold">{details.title}</div>
                <div className="h-6 mt-1">
                    <a href={details.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                            <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity="0"></path><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                        </svg>
                    </a>
                </div>
            </div>


            {/* desc */}
            <div className="desc px-2 z-[91] absolute bottom-0 opacity-0 text-md font-normal">
                {details.desc.map((line, index) => <div key={index}>- {line}</div>)}
            </div>


            {/* tech */}
            <div className='z-[91] pl-2 text-sm text-gray-800'>React, Node, Tailwind</div>
        </div>
    )
})

export default ProjectCard