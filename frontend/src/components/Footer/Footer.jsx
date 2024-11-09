import logo from '/logo.svg'

export default function Footer() {
    return (
        <div className='text-white relative bg-zinc-900 min-h-56 flex flex-row gap-3 justify-end items-center pr-20'>
            <div className='size-8'>
                <img src={logo} />
            </div>
            <div className='text-xl'>Himanshu Lilhore</div>
        </div>
    );
}