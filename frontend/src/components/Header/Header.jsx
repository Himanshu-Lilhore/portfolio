import viteLogo from '/vite.svg'
import Navigator from './Navigator'

export default function Header() {
    return (
        <>
            <div className="px-10 flex justify-between bg-accent-2 w-full">
                <div>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </div>
                <div className='flex justify-between space-x-4'>
                    <Navigator>About</Navigator>
                    <Navigator>Resume</Navigator>
                    <Navigator>Projects</Navigator>
                    <Navigator>Contacts</Navigator>
                </div>
            </div>
        </>
    )
}