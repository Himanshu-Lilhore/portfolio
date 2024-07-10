import { useScroll } from "../Util/ScrollProvider"
import Skills from "../Skills/Skills"
import TwtAndBeach from "./TwtAndBeach"
import About from "../About/About"

export default function AfterHero() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div className='relative h-[1500px]'>

                <TwtAndBeach></TwtAndBeach>

                <div className="relative z-[90]"
                    style={{ top: - scrollVal * 2.1 }}>

                    <About />
                    <Skills />
                </div>

            </div>
        </>
    )
}