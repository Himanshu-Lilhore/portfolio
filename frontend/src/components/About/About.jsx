import { useScroll } from "../Util/ScrollProvider"
import Highlighter from "../Util/Highlighter"
import DescLine from "./DescLine"

export default function About() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className="relative pl-8">
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
                            <Highlighter bgColor="bg-green-600/90">Deloitte</Highlighter>
                            , I have worked on web development stacks including
                            <Highlighter bgColor="bg-rose-400">MERN and Java</Highlighter>
                            in backend for health projects</DescLine>
                        <DescLine>Also worked on making internal tools (being used by team of 200+ people on regular basis)</DescLine>
                        <DescLine>Want to make a meaningful impact through software development and innovation.</DescLine>
                    </div>
                </div>
            </div>
        </>
    )
}