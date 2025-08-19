import { useScroll } from "../Util/ScrollProvider";
import TwitterEmbed from "./TwitterEmbed";
import BeachLeft from "../../assets/Beach/BeachLeft";
import BeachRight from "../../assets/Beach/BeachRight";
import { useState } from "react";

export default function TwtAndBeach() {
    const { scrollVal, setScrollVal } = useScroll();
    const [hoveringFirst, setHoveringFirst] = useState(false);

    return (
        <>
            <div
                style={{ top: "-7.3vw", transform: `translateX(${-scrollVal * 0.0055}vw)` }}
                className="hidden lg:block opacity-5 z-[91] absolute right-[7.8vw] transition-opacity duration-500 ease-in-out hover:opacity-100 hover:scale-[105%]"
                onMouseEnter={() => setHoveringFirst(true)}
                onMouseLeave={() => setHoveringFirst(false)}
            >
                <TwitterEmbed></TwitterEmbed>
            </div>

            <div
                className="absolute z-[70] w-full top-[-42vw] lg:top-[-32vw]"
                style={{ left: `${-2.78 + scrollVal * 0.003}vw`, scale: `${95 + scrollVal/100}%` }}
            >
                <BeachLeft className="min-w-[55.6vw] lg:min-w-[125vw]"></BeachLeft>
            </div>

            <div
                className="absolute right-0 z-50 w-full top-[-47.2vw] lg:top-[-43.4vw]"
                style={{ right: `${12.5 + scrollVal * 0.01}vw`, scale: `${95 + scrollVal/100}%` }}
            >
                <BeachRight className="min-w-[48.6vw] lg:min-w-[125vw]"></BeachRight>
                <div
                    className={`${
                        hoveringFirst ? "opacity-0" : "opacity-100"
                    } hidden lg:block z-[60] absolute top-[36.11vw] -right-[6.7vw] transition-opacity duration-500 ease-in-out`}
                >
                    <TwitterEmbed></TwitterEmbed>
                </div>
            </div>
        </>
    );
}
