import { useScroll } from "../Util/ScrollProvider";
import Highlighter from "../Util/Highlighter";
import DescLine from "./DescLine";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
    const { scrollVal, setScrollVal } = useScroll();

    return (
        <>
            <div ref={ref} className="relative p-6 lg:pl-8">
                <div className="text-4xl lg:text-5xl pb-6 lg:pb-12 rubik-google-font">
                    Who am I ?
                </div>
                <div className="text-lg lg:text-2xl">
                    <div className="flex flex-col">
                        <DescLine>
                            Hi, I'm Himanshu Lilhore - 2022
                            <Highlighter bgColor="bg-sky-400">B. Tech graduate</Highlighter>.
                        </DescLine>

                        <DescLine>
                            Currently a
                            <Highlighter bgColor="bg-violet-400">
                                Frontend Developer @Ambitio
                            </Highlighter>
                            (ex
                            <Highlighter bgColor="bg-lime-500">SDE-1 @Deloitte</Highlighter>).
                        </DescLine>

                        <DescLine>
                            At Ambitio, I build engaging, performant experiences with
                            <Highlighter bgColor="bg-rose-400">Next.js</Highlighter>,
                            <Highlighter bgColor="bg-rose-400">React</Highlighter>,
                            <Highlighter bgColor="bg-rose-400">Three.js</Highlighter>,
                            <Highlighter bgColor="bg-rose-400">GSAP</Highlighter> &amp;
                            <Highlighter bgColor="bg-rose-400">Redux</Highlighter>.
                        </DescLine>

                        <DescLine>
                            Shipped new features &amp; optimized landing pages to improve
                            <Highlighter bgColor="bg-sky-500">SEO</Highlighter>,
                            <Highlighter bgColor="bg-teal-500">performance</Highlighter>
                            and user engagement, also strengthened security by patching
                            <Highlighter bgColor="bg-rose-500">SQL injection</Highlighter> issues.
                        </DescLine>

                        <DescLine>
                            Built internal tools including a
                            <Highlighter bgColor="bg-teal-400">custom CRM</Highlighter> and
                            <Highlighter bgColor="bg-pink-400">real-time chat</Highlighter>.
                        </DescLine>

                        <DescLine>
                            Previously at Deloitte, worked across
                            <Highlighter bgColor="bg-indigo-400">React/Node</Highlighter>,
                            <Highlighter bgColor="bg-indigo-400">Java</Highlighter>,
                            <Highlighter bgColor="bg-indigo-400">MongoDB</Highlighter> &amp;
                            <Highlighter bgColor="bg-indigo-400">MySQL</Highlighter> on
                            <Highlighter bgColor="bg-emerald-400">microservices</Highlighter>, plus
                            internal tools used by
                            <Highlighter bgColor="bg-emerald-400">200+ teammates</Highlighter>.
                        </DescLine>

                        <DescLine>
                            I care about crafting fast, accessible, and secure web apps that make a
                            real impact.
                        </DescLine>
                    </div>
                </div>
            </div>
        </>
    );
});

export default About;
