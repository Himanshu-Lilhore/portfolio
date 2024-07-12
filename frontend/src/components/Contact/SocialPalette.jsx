import './SocialPalette.css'

export default function SocialPalette() {
    const socials = [
        { name: 'twitter', link: 'https://x.com/HimanshuLilhore', desc: '@himanshulilhore' },
        { name: 'github', link: 'https://github.com/Himanshu-Lilhore', desc: '@Himanshu-Lilhore' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/himanshulilhore/', desc: '@himanshulilhore' },
        { name: 'leetcode', link: 'https://leetcode.com/u/Himanshu_Lilhore/', desc: '@Himanshu_Lilhore' },
        { name: 'gmail', link: 'mailto:himanshulilhore@gmail.com', desc: 'himanshulilhore@gmail.com' },
        { name: 'codechef', link: 'https://www.codechef.com/users/a_neutron_star', desc: '@a_neutron_star' },
        { name: 'codeforces', link: 'https://codeforces.com/profile/a_neutron_star', desc: '@a_neutron_star' },
        { name: 'instagram', link: 'https://www.instagram.com/himanshulilhore', desc: '@himanshulilhore' },
        { name: 'spotify', link: 'https://open.spotify.com/user/31signniy6dzlup4t54ymz6pwv3q', desc: 'Share your playlist !' },
    ]

    return (
        <div className="flex flex-col gap-3 p-5">
            {socials.map((element, index) => {
                return (
                    <div className='relative social z-[99] w-fit' key={index}>
                        <a href={element.link} target='_blank'>
                            <div className='socialcard scale-x-0 opacity-0 absolute top-0 left-7 h-full min-w-32 border-y-2 border-r-2 border-black z-[99] pl-8 pr-2 flex items-center justify-center text-nowrap'>{element.desc}</div>
                            <div className="h-14 border-2 border-black w-fit rounded-full overflow-hidden p-3 z-[100]">
                                <img className="h-full" src={`/ContactLogos/${element.name}.svg`} alt={element.name} />
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>

    )
}