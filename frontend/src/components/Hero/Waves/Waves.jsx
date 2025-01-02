import Waves1front from './Waves1front'
import Waves2mid from './Waves2mid'
import Waves3back from './Waves3back'
import './Waves.css'
import { useScroll } from '../../Util/ScrollProvider'

export default function Waves() {
    const { scrollVal, setScrollVal } = useScroll()

    return (
        <div className='w-full'>
            <div className='min-w-[1000px] lg:min-w-[1800px] absolute top-0 lg:-top-64'>
                <Waves3back className='z-10 absolute' style={{ top: scrollVal * 0.9}} />
                <Waves2mid className='z-30 absolute opacity-95' style={{ top: scrollVal * 0.6 }} />
                <Waves1front className='z-50 absolute opacity-95' style={{ top: scrollVal * 0.5  }} />
            </div>
        </div>
    ); 1
};

