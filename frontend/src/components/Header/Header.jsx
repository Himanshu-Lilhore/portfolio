import viteLogo from '/vite.svg'
import Navigator from './Navigator'

export default function Header() {
    return (
        <>
            <div className="px-10 flex justify-between w-full z-50 border-2">
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