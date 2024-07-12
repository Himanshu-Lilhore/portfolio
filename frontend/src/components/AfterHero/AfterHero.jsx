import { useScroll } from "../Util/ScrollProvider"
import Skills from "../Skills/Skills"
import TwtAndBeach from "./TwtAndBeach"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

export default function AfterHero() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className='relative min-h-[1500px]'>

                <TwtAndBeach />

                <div className="relative z-[90]"
                    style={{ top: - scrollVal * 2.1 }}>

                    <About />
                    <Skills />
                    <Projects />
                    <Contact />

                </div>

            </div>
        </>
    )
}