import ProjectCard from "./ProjectCard"
import './Projects.css'

export default function Projects() {

    const projList = [
        { title: "Skillswap", img: "/projects/skillswap.png", github: "", tech: [], desc: ['Collaborate and find mentors', '50+ registered users', 'Tinder for techies'] },
        { title: "Youtube comment scraper", img: "", github: "", tech: [], desc: [] },
        { title: "Blog", img: "", github: "", tech: [], desc: [] },
        { title: "Realtime chat app", img: "", github: "", tech: [], desc: [] },
        { title: "OneClick", img: "", github: "", tech: [], desc: [] },
    ]

    return (
        <div className="relative bg-purple-300 p-10">

            <div className="absolute top-0 text-9xl font-extrabold text-gray-700/50 left-1/2 transform -translate-x-1/2 top-10">PROJECTS</div>

            <div className="py-8 px-28">
                <div className="flex px-8 py-16 gap-12 overflow-x-auto container border-x-4 border-black">
                    {projList.map((element, index) => {
                        return (<ProjectCard details={element} key={index} />)
                    })}
                </div>
            </div>
        </div>
    )
}