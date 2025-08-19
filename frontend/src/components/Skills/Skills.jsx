import './Skills.css'
import BeachLeft from '../../assets/Beach/BeachLeft'

export default function Skills() {
    const skills = {
        Languages: ['Javascript', 'Python', 'Java', 'Typescript', 'C/C++'],
        Technologies: ['Next.js', 'Node.js', 'Express.js', 'React.js', 'Django', 'SocketIO', 'Tailwind', 'Selenium', 'HTML5', 'CSS'],
        Databases: ['MongoDB', 'MySQL', 'OracleDB'],
        'CI/CD': ['Github Pages', 'Vercel', 'Github Actions', 'Unit Testing'],
        'Developer Tools': ['Git/Github', 'VS Code', 'Eclipse', 'Jira', 'ChatGPT', 'Jama']
    }

    return (
        <div className="top-[-90px] lg:top-0 py-24 relative bg-gradient-to-b from-transparent to-purple-300 overflow-hidden">
            <div className='block lg:hidden -z-[20]'>
                <BeachLeft className='absolute top-0 left-0 min-w-[900px] rotate-180'></BeachLeft>
                <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-purple-300'></div>
            </div>

            <div className="skills-card z-[9999] lg:z-2 mx-56 relative border-0 rounded-lg overflow-hidden shadow-2xl shadow-black">
                <div className="border-4 rounded-lg border-slate-700 flex flex-col p-10 backdrop-blur-sm bg-red-600/30 bg-clip-padding">

                    <div className="absolute text-2xl font-bold top-9 -right-16 bg-red-500 px-20 rotate-45">Skillset</div>

                    {Object.keys(skills).map(key => {
                        return (
                            <div key={key} className="flex flex-col my-4">
                                <div className="pl-1 mb-3 text-base">{key}</div>
                                <div className="flex flex-row flex-wrap gap-y-3 text-lg font-medium">
                                    {skills[key].map(val => {
                                        return (
                                            <div key={val} className="mr-5 border-2 rounded-full text-gray-100 px-4 py-1 border-slate-700 bg-indigo-700 shadow-xl">{val}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="absolute top-0 left-0 scale-110 w-full -z-10">
                <img className="w-full" src={`/curves/curve1.svg`} />
            </div>

        </div>
    )
}