import React from 'react';
import './ContactCard.css';

const ContactCard = () => {
    return (
        <div className="contact-card relative">

            {/* talk bubble */}
            <div className="w-fit h-fit">
                <div class="talk-bubble tri-right btm-right px-10 py-8">
                    <div class="talktext">
                        <div className="text-xl py-6 font-bold flex justify-center underline underline-offset-4">
                            Write a message
                        </div>
                        <div className="flex justify-between py-4">
                            <label htmlFor="name">Name/Email</label>
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
                                className="text-base rounded-md px-2 ml-20 max-h-20"
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
                </div>
            </div>


            {/* circle svg */}
            <div className='absolute -right-36 -bottom-28 h-96 w-96 z-0'>
                <svg className='overflow-visible' id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 95">
                    <defs>
                        <style>
                            {`.Circle{fill:#f15a24;}.shadow{opacity:0.5;}.bubble{fill:#fff;}.Text1{fill:#f15a24}`}
                        </style>
                    </defs>
                    <circle className="Circle" cx="50" cy="60" r="20" />
                </svg>
            </div>


        </div>
    );
};

export default ContactCard;
