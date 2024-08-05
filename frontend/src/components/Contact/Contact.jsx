import SocialPalette from "./SocialPalette";
import ContactCard from "./ContactCard";
import './Contact.css'

export default function Contact() {

    return (
        <div className="contact-main px-36 py-16 flex justify-around h-fit">
            <div className="flex h-fit relative">

                <div className="z-[99]">
                    <SocialPalette />
                </div>

                <div className="z-[90] absolute left-28">
                    <ContactCard />
                </div>

            </div>
        </div>
    )
}