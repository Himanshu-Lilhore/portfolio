import { useScroll } from "../Util/ScrollProvider"
import TwitterEmbed from "./TwitterEmbed"
import BeachLeft from "../../assets/Beach/BeachLeft"
import BeachRight from "../../assets/Beach/BeachRight"

export default function TwtAndBeach() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div style={{ top: -105}} className='z-[91] absolute opacity-5 right-28 transition-opacity duration-500 hover:opacity-100'>
                <TwitterEmbed></TwitterEmbed>
            </div>


            <div className="absolute z-[70] w-full"
                style={{ top: -430, left: -40 + scrollVal * 0.05 }}
            >
                <BeachLeft className='min-w-[1800px]'></BeachLeft>
            </div>


            <div className="absolute right-0 z-50 w-full"
                style={{ top: -625, right: 180 + scrollVal * 0.05 }}
            >
                <BeachRight className='min-w-[1800px]'></BeachRight>
                <div className='z-[60] absolute top-[520px] -right-24 transition-opacity duration-500 hover:opacity-0 '>
                    <TwitterEmbed></TwitterEmbed>
                </div>
            </div>
        </>
    )
}