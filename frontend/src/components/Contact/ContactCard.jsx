import React from 'react';
import './ContactCard.css';
import {useState} from 'react';
import Axios from 'axios'


export default function ContactCard (){
    const [contact, setContact] = useState('');
    const [msg, setMsg] = useState('');

    const handleSend = async () => {
        try {
          const payload = { 
            text: msg 
          };
          if (contact) payload.name = contact;
    
          const response = await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/message/send`, payload);
          console.log(response.data);
    
          setContact('');
          setMsg('');
        } catch (err) {
          console.error('Error sending message:', err);
        }
      };

    return (
        <div className="contact-card relative">

            {/* talk bubble */}
            <div className="relative w-fit h-fit backdrop-blur-sm z-[10]">
                <div className="talk-bubble tri-right btm-right px-10 py-8">
                    <div className="talktext">
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
                                onChange={(e) => setContact(e.target.value)}
                                value={contact}
                            />
                        </div>
                        <div className="flex justify-between py-4">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="text-base rounded-md px-2 ml-20 max-h-20"
                                style={{ minWidth: '240px' }}
                                placeholder="Write a message..."
                                onChange={(e) => setMsg(e.target.value)}
                                value={msg}
                            />
                        </div>
                        <div className="flex justify-center py-4">
                            <button
                                className="rounded-full px-5 py-1"
                                style={{ color: '#f48925', backgroundColor: 'black' }}
                                onClick={handleSend}
                            >
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* circle svg */}
            <div className='absolute -right-20 -bottom-28 h-96 w-96 z-0'>
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