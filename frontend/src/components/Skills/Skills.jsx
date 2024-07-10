export default function Skills() {
    const skills = {
        'Languages': ['Javascript', 'Java', 'Python', 'Typescript', 'C/C++'],
        'Technologies': ['Node.js', 'Express.js', 'React.js', 'SocketIO', 'Tailwind', 'Selenium', 'HTML5', 'CSS'],
        'Databases': ['MongoDB', 'MySQL', 'OracleDB'],
        'CI/CD': ['Github Pages', 'Vercel', 'Github Actions', 'Unit Testing'],
        'Developer Tools': ['Git/Github', 'VS Code', 'Eclipse', 'Jira', 'ChatGPT', 'Jama']
    }

    return (
        <div className="my-20 mx-44 relative overflow-hidden">

            <div className="border-4 rounded-lg border-slate-700 flex flex-col p-10 backdrop-blur-sm bg-gray-800/20 bg-clip-padding">

                <div className="absolute text-lg font-bold top-8 -right-16 bg-red-500 px-20 rotate-45">Skillset</div>

                {Object.keys(skills).map(key => {
                    return (
                        <div className="flex flex-col my-4">
                            <div className="pl-1 mb-3 text-base">{key}</div>
                            <div className="flex flex-row flex-wrap gap-y-3 text-xl">
                                {skills[key].map(val => {
                                    return (
                                        <div className="mr-5 border-2 rounded-full px-4 py-1 border-slate-700 bg-lime-600/60">{val}</div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}