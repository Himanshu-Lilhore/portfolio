
export default function ContactCard() {
    return (
        <div className="h-full text-black text-xl border-2 border-black rounded-r-3xl px-10">
            <div className="text-xl py-6 font-bold flex justify-center underline underline-offset-4">
                Write a message or a feedback
            </div>
            <div className="flex justify-between py-4">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    className="text-base rounded-md px-2"
                    style={{ minWidth: '240px' }}
                    placeholder="(optional)"
                />
            </div>
            <div className="flex justify-between py-4">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className="text-base rounded-md px-2"
                    style={{ minWidth: '240px' }}
                    placeholder="Write a message..."
                />
            </div>
            <div className="flex justify-center py-4">
                <button
                    className="rounded-full px-5 py-1"
                    style={{ color: '#f48925', backgroundColor: 'black' }}
                >
                    SEND
                </button>
            </div>
        </div>
    )
}