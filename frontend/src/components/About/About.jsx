import TwitterEmbed from "./TwitterEmbed"
import './About.css'
import BeachLeft from "../../assets/Beach/BeachLeft"
import BeachRight from "../../assets/Beach/BeachRight"
import { useScroll } from "../Util/ScrollProvider"

export default function About() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className='relative h-[1999px]'>

                <div style={{ top: -105 -scrollVal * 1.7 }} className='z-[90] absolute opacity-5 right-28 transition-opacity duration-500 hover:opacity-100'>
                    <TwitterEmbed></TwitterEmbed>
                </div>


                <div className="absolute z-[70] w-full"
                    style={{ top: -430 - scrollVal * 2.1, left: -45 + scrollVal*0.12 }}
                >
                    <BeachLeft className='min-w-[1800px]'></BeachLeft>
                </div>

                
                <div className="absolute right-0 z-50 w-full"
                    style={{ top: -625 - scrollVal * 1.7, right: 180 + scrollVal*0.12 }}
                >
                    <BeachRight className='min-w-[1800px]'></BeachRight>
                    <div className='z-[60] absolute top-[520px] -right-24 transition-opacity duration-500 hover:opacity-0 '>
                        <TwitterEmbed></TwitterEmbed>
                    </div>
                </div>


                <div className="z-[80] relative pl-8"
                style={{ top: - scrollVal * 2.1 }}
                >
                    <div className="text-5xl pb-12">Who am I ?</div>
                    <div className="text-2xl">
                        <ul className='space-4'>
                            <li>Hi, I'm Himanshu Lilhore, a 2022 B.Tech graduate and passionate Full-Stack Developer</li>
                            <li>Ujjain | Bhopal | Hyderabad</li>
                            <li>At Deloitte, I have worked on web development stacks including MERN and Java in backend for health projects</li>
                            <li>Also worked on making internal tools (being used by team of 200+ people on regular basis)</li>
                            <li>Want to make a meaningful impact through software development and innovation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}