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
        <div className="bg-purple-300 p-10">
            <div className="p-24">
                <div className="flex px-8 py-16 gap-12 overflow-x-auto container border-x-4 border-black">
                    {projList.map((element, index) => {
                        return (<ProjectCard details={element} key={index} />)
                    })}
                </div>
            </div>
        </div>
    )
}