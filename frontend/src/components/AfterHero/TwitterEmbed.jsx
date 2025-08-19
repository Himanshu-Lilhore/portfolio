import { useEffect, useRef } from "react";

export default function TwitterEmbed() {
    const tweetRef = useRef(null);

    useEffect(() => {
        if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                if (window.twttr && tweetRef.current) {
                    window.twttr.widgets.load(tweetRef.current);
                }
            };
        } else if (window.twttr && tweetRef.current) {
            window.twttr.widgets.load(tweetRef.current);
        }
    }, []);

    return (
        <blockquote
            className="twitter-tweet h-96 w-96 overflow-hidden hover:overflow-auto border-2 rounded-lg transform transition-transform duration-500 hover:scale-110 shadow-black shadow-2xl"
            ref={tweetRef}
        >
            <a href="https://twitter.com/HimanshuLilhore">@HimanshuLilhore</a>
            <a href="https://twitter.com/HimanshuLilhore/status/1938728962513043480?ref_src=twsrc%5Etfw">
                June 27, 2025
            </a>
        </blockquote>
    );
}
