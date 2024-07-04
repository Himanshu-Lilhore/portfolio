import Waves1front from './Waves1front'
import Waves2mid from './Waves2mid'
import Waves3back from './Waves3back'
import './Waves.css'

export default function Waves() {

    return (
        <div className='min-w-[1800px] absolute -top-64'>
            <Waves3back className='z-10 absolute' />
            <Waves2mid className='z-30 absolute opacity-95' />
            <Waves1front className='z-50 absolute opacity-90' />
        </div>
    );1
};

