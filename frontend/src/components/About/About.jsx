import TwitterEmbed from "./TwitterEmbed"
import './About.css'
import BeachLeft from "../../assets/Beach/BeachLeft"
import BeachRight from "../../assets/Beach/BeachRight"
import { useScroll } from "../Util/ScrollProvider"
import Highlighter from "../Util/Highlighter"
import DescLine from "./DescLine"
import Skills from "../Skills/Skills"

export default function About() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className='relative h-[1500px]'>

                <div style={{ top: -105 - scrollVal * 1.7 }} className='z-[90] absolute opacity-5 right-28 transition-opacity duration-500 hover:opacity-100'>
                    <TwitterEmbed></TwitterEmbed>
                </div>


                <div className="absolute z-[70] w-full"
                    style={{ top: -430 - scrollVal * 2.1, left: -45 + scrollVal * 0.12 }}
                >
                    <BeachLeft className='min-w-[1800px]'></BeachLeft>
                </div>


                <div className="absolute right-0 z-50 w-full"
                    style={{ top: -625 - scrollVal * 1.7, right: 180 + scrollVal * 0.12 }}
                >
                    <BeachRight className='min-w-[1800px]'></BeachRight>
                    <div className='z-[60] absolute top-[520px] -right-24 transition-opacity duration-500 hover:opacity-0 '>
                        <TwitterEmbed></TwitterEmbed>
                    </div>
                </div>


                <div className="z-[80] relative pl-8"
                    style={{ top: - scrollVal * 2.1 }}
                >
                    <div className="text-5xl pb-12 rubik-google-font">Who am I ?</div>
                    <div className="text-2xl">
                        <div className="flex flex-col">
                            <DescLine>
                                Hi, I'm Himanshu Lilhore, a 2022
                                <Highlighter bgColor="bg-sky-400">B. Tech graduate</Highlighter>
                                and passionate
                                <Highlighter bgColor="bg-violet-400">Full-Stack Developer</Highlighter>
                            </DescLine>
                            <DescLine>Ujjain | Bhopal | Hyderabad</DescLine>
                            <DescLine>
                                At
                                <Highlighter bgColor="bg-green-500">Deloitte</Highlighter>
                                , I have worked on web development stacks including
                                <Highlighter bgColor="bg-rose-400">MERN and Java</Highlighter>
                                in backend for health projects</DescLine>
                            <DescLine>Also worked on making internal tools (being used by team of 200+ people on regular basis)</DescLine>
                            <DescLine>Want to make a meaningful impact through software development and innovation.</DescLine>
                        </div>
                    </div>
                </div>


                <div className="z-[90] relative"
                    style={{ top: - scrollVal * 2.1 }}
                >
                    <Skills></Skills>
                </div>
            </div>
        </>
    )
}