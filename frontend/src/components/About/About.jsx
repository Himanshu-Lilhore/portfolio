import TwitterEmbed from "./TwitterEmbed"
import './About.css'

export default function About() {

    return (
        <>
            <div className='flex justify-around relative w-full px-16'>
                <div className="pl-5">
                    <div className="text-5xl pb-8">Who am I ?</div>
                    <div className="text-2xl">
                        <ul className='space-4'>
                            <li>Hi, I'm Himanshu Lilhore, a 2022 B.Tech graduate and passionate Full-Stack Developer</li>
                            <li>Ujjain | Bhopal | Hyderabad</li>
                            <li>At Deloite, I have worked on web development stacks including MERN and Java in backend for health projects</li>
                            <li>Also worked on making internal tools (being used by team of 200+ people on regular basis)</li>
                            <li>Want to make a meaningful impact through software development and innovation.</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <TwitterEmbed></TwitterEmbed>
                </div>
            </div>
        </>
    )
}