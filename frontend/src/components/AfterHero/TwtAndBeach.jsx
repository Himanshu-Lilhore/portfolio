import { useScroll } from "../Util/ScrollProvider"
import TwitterEmbed from "./TwitterEmbed"
import BeachLeft from "../../assets/Beach/BeachLeft"
import BeachRight from "../../assets/Beach/BeachRight"

export default function TwtAndBeach() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <>
            <div style={{ top: -105}} className='hidden lg:block opacity-5 z-[91] absolute right-28 transition-opacity duration-500 hover:opacity-100'>
                <TwitterEmbed></TwitterEmbed>
            </div>


            <div className="absolute z-[70] w-full top-[-605px] lg:top-[-430px]"
                style={{ left: -40 + scrollVal * 0.05 }}
            >
                <BeachLeft className='min-w-[800px] lg:min-w-[1800px]'></BeachLeft>
            </div>


            <div className="absolute right-0 z-50 w-full top-[-680px] lg:top-[-625]"
                style={{ right: 180 + scrollVal * 0.05 }}
            >
                <BeachRight className='min-w-[700px] lg:min-w-[1800px]'></BeachRight>
                <div className='hidden lg:block z-[60] absolute top-[520px] -right-24 transition-opacity duration-500 hover:opacity-0 '>
                    <TwitterEmbed></TwitterEmbed>
                </div>
            </div>
        </>
    )
}