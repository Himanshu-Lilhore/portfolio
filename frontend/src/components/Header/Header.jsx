import logo from '/logo.svg'
import Navigator from './Navigator'

export default function Header() {
    return (
        <>
            <div className="px-36 flex justify-between w-full z-[100]">

                <div className='logo-container'>
                    <img src={logo} className="logo" alt="Logo" />
                </div>


                <div className='text-gray-200 border-gray-400 border my-auto flex justify-between text-xl px-6 space-x-6 bg-gray-400/15 h-fit justify-items-center rounded-full'>
                    <Navigator>About</Navigator>
                    <Navigator>Resume</Navigator>
                    <Navigator>Projects</Navigator>
                    <Navigator>Contacts</Navigator>
                </div>

            </div>
        </>
    )
}