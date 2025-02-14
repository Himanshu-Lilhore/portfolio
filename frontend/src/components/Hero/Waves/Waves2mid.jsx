import React, { useEffect, useRef } from 'react';
import T1 from '../../../assets/Waves/Waves2mid/T1'
import T2 from '../../../assets/Waves/Waves2mid/T2'
import T3 from '../../../assets/Waves/Waves2mid/T3'
import T4 from '../../../assets/Waves/Waves2mid/T4'
import T5 from '../../../assets/Waves/Waves2mid/T5'

export default function Waves2mid(props) {
    const mainSVGRef = useRef(null);
    const svgContainerRef = useRef(null);

    useEffect(() => {
        const mainSVG = mainSVGRef.current;
        const svgContainer = svgContainerRef.current;

        if (!mainSVG || !svgContainer) return;

        const mainPaths = mainSVG.querySelectorAll('path');
        const totalPaths = mainPaths.length;
        const totalSvgs = svgContainer.childElementCount;
        let keyframes = [];
        let animations = [];
        let allPaths = [];
        let thisSvgThisPath;

        for (let svgCount = 1; svgCount <= totalSvgs; svgCount++) {
            let paths = svgContainer.querySelector(`svg:nth-child(${svgCount})`).querySelectorAll('path');
            let pathList = [];
            paths.forEach(path => {
                pathList.push(path);
            });
            allPaths.push(pathList);
        }

        const animatePaths = () => {
            for (let pathCount = 0; pathCount < totalPaths; pathCount++) {
                keyframes = [];
                for (let svgCount = 0; svgCount < totalSvgs; svgCount++) {
                    thisSvgThisPath = allPaths[svgCount][pathCount];
                    let localOffset = (1 / (totalSvgs - 1)) * svgCount;
                    keyframes.push({ d: 'path("' + thisSvgThisPath.getAttribute('d') + '")', offset: localOffset });
                }

                animations.push(mainPaths[pathCount].animate(keyframes, {
                    duration: 2500 * totalSvgs,
                    iterations: Infinity,
                    direction: "alternate",
                    easing: "ease-in-out"
                }));
            }
        };

        animatePaths();
    }, []);

    return (
        <div {...props}>
            {/* T1 : */}
            <svg id="visual" ref={mainSVGRef} viewBox="0 0 4200 2800" width={4200} height={2800} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path style={{filter: 'blur(6px)'}} d="M0 1645L58.3 1654.8C116.7 1664.7 233.3 1684.3 350 1696.8C466.7 1709.3 583.3 1714.7 700 1698.3C816.7 1682 933.3 1644 1050 1603.8C1166.7 1563.7 1283.3 1521.3 1400 1538.8C1516.7 1556.3 1633.3 1633.7 1750 1636.7C1866.7 1639.7 1983.3 1568.3 2100 1561.2C2216.7 1554 2333.3 1611 2450 1613.8C2566.7 1616.7 2683.3 1565.3 2800 1536.7C2916.7 1508 3033.3 1502 3150 1514.3C3266.7 1526.7 3383.3 1557.3 3500 1547.7C3616.7 1538 3733.3 1488 3850 1463.8C3966.7 1439.7 4083.3 1441.3 4141.7 1442.2L4200 1443L4200 2801L4141.7 2801C4083.3 2801 3966.7 2801 3850 2801C3733.3 2801 3616.7 2801 3500 2801C3383.3 2801 3266.7 2801 3150 2801C3033.3 2801 2916.7 2801 2800 2801C2683.3 2801 2566.7 2801 2450 2801C2333.3 2801 2216.7 2801 2100 2801C1983.3 2801 1866.7 2801 1750 2801C1633.3 2801 1516.7 2801 1400 2801C1283.3 2801 1166.7 2801 1050 2801C933.3 2801 816.7 2801 700 2801C583.3 2801 466.7 2801 350 2801C233.3 2801 116.7 2801 58.3 2801L0 2801Z"
                    fill="#1e89c4" />
            </svg>

            <div id="svgContainer" ref={svgContainerRef} className='hidden'>
                <T1 />
                <T2 />
                <T3 />
                <T4 />
                <T5 />
            </div>
        </div>
    );
};

