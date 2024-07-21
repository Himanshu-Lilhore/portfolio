import SocialPalette from "./SocialPalette";
import ContactCard from "./ContactCard";

export default function Contact() {

    return (
        <div className="px-36 py-16 flex justify-around h-fit bg-purple-500/20">
            <div className="flex h-fit">

                <div>
                    <SocialPalette />
                </div>

                <div>
                    <ContactCard />
                </div>

            </div>
        </div>
    )
}