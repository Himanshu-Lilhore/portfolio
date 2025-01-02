import logo from '/logo.svg'
import Navigator from './Navigator'
import './Header.css'
import { useContext } from 'react';
import { RefContext, scrollToSection } from '../Util/RefContext';

export default function Header() {
    const { projectsRef, aboutRef, contactRef } = useContext(RefContext);

    const resumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Adjust the path if necessary
        link.download = 'Himanshu_Lilhore.pdf'; // Specify the name for the downloaded file
        document.body.appendChild(link); // Append to body
        link.click(); // Trigger click to download
        document.body.removeChild(link); // Clean up
    };

    return (
        <>
            <div className="px-2 lg:px-36 flex justify-between w-full z-[100]">

                <div className='logo-container scale-[0.8] lg:scale-100'>
                    <img src={logo} className="logo" alt="Logo" />
                </div>


                <div className='hidden lg:block text-gray-200 border-gray-400 border my-auto flex justify-between text-xl px-3 space-x-6 bg-gray-400/15 h-fit justify-items-center rounded-full'>
                    <Navigator onClick={() => scrollToSection(aboutRef)}>About</Navigator>
                    <Navigator onClick={resumeDownload}>Resume</Navigator>
                    <Navigator onClick={() => scrollToSection(projectsRef)}>Projects</Navigator>
                    <Navigator onClick={() => scrollToSection(contactRef)}>Contacts</Navigator>
                </div>

            </div>
        </>
    )
}