import { useScroll } from "../Util/ScrollProvider"
import Skills from "../Skills/Skills"
import TwtAndBeach from "./TwtAndBeach"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import { RefContext } from '../Util/RefContext';
import { useContext } from 'react';

export default function AfterHero() {
    const { scrollVal, setScrollVal } = useScroll()
    const { projectsRef, aboutRef, contactRef } = useContext(RefContext);

    return (
        <>
            <div className='relative'>

                <TwtAndBeach />

                <div className="relative z-[90] overflow-hidden">

                    <About ref={aboutRef} />
                    <Skills />
                    <Projects ref={projectsRef}/>
                    <Contact ref={contactRef}/>
                    <Footer />

                </div>

            </div>
        </>
    )
}