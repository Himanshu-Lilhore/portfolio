import SocialPalette from "./SocialPalette";
import ContactCard from "./ContactCard";
import './Contact.css'

export default function Contact() {

    return (
        <div className="contact-section relative px-36 py-16 flex justify-evenly h-fit">

            <div className="connect-title -rotate-12 px-10">
                <div className="-mb-5">Let's</div>
                <div>connect?</div>
            </div>

            <div className="contact-main flex h-fit relative">

                <div className="z-[99]">
                    <SocialPalette />
                </div>

                <div className="z-[90] absolute left-28">
                    <ContactCard />
                </div>

                <div className="min-w-96">
                    {/* dummy placeholder to maintain container size */}
                </div>

            </div>

        </div>
    )
}