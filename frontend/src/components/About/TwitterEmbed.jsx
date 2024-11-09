import React, { useEffect, useRef } from 'react';

export default function TwitterEmbed() {
    const twitterRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
            if (window.twttr) {
                window.twttr.widgets.load(twitterRef.current);
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="h-96 w-96 overflow-hidden hover:overflow-auto border-2 rounded-lg transform transition-transform duration-500 hover:scale-120 shadow-black shadow-2xl"
        style={{animation:'scale 2s'}}>
            <div ref={twitterRef}>
                <a
                    className="twitter-timeline"
                    href="https://twitter.com/HimanshuLilhore?ref_src=twsrc%5Etfw"
                    data-tweet-limit="2"
                    data-chrome="nofooter noborders"
                >
                    Tweets by HimanshuLilhore
                </a>
            </div>
        </div>
    );
}
