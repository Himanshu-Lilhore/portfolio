import logo from '/logo.svg'
import Navigator from './Navigator'

export default function Header() {
    return (
        <>
            <div className="px-16 flex justify-between w-full z-[100]">
                <div className='logo-container'>
                    <img src={logo} className="logo" alt="Logo" />
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