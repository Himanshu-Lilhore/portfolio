import SocialPalette from "./SocialPalette";
import ContactCard from "./ContactCard";

export default function Contact() {

    return (
        <div className="px-36 py-16 flex justify-around">
            <div className="flex">

                <div>
                    <SocialPalette />
                </div>

                <div>
                    <ContactCard  className="h-full"/>
                </div>

            </div>
        </div>
    )
}