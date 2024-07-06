import React, { useEffect, useRef } from 'react';
import T1 from '../../../assets/Waves/Waves3back/T1'
import T2 from '../../../assets/Waves/Waves3back/T2'
import T3 from '../../../assets/Waves/Waves3back/T3'
import T4 from '../../../assets/Waves/Waves3back/T4'
import T5 from '../../../assets/Waves/Waves3back/T5'

export default function Waves3back(props) {
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
                    duration: 2800 * totalSvgs,
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
                <rect x={0} y={0} width={4200} height={2800} fill="#001220" />
                <path style={{filter: 'blur(14px)'}} d="M0 1126L63.7 1145.2C127.3 1164.3 254.7 1202.7 382 1225.3C509.3 1248 636.7 1255 763.8 1256C891 1257 1018 1252 1145.2 1239.5C1272.3 1227 1399.7 1207 1527 1197.2C1654.3 1187.3 1781.7 1187.7 1909 1179C2036.3 1170.3 2163.7 1152.7 2291 1149.5C2418.3 1146.3 2545.7 1157.7 2673 1146.5C2800.3 1135.3 2927.7 1101.7 3054.8 1108.5C3182 1115.3 3309 1162.7 3436.2 1183.7C3563.3 1204.7 3690.7 1199.3 3818 1186.5C3945.3 1173.7 4072.7 1153.3 4136.3 1143.2L4200 1133L4200 2801L4136.3 2801C4072.7 2801 3945.3 2801 3818 2801C3690.7 2801 3563.3 2801 3436.2 2801C3309 2801 3182 2801 3054.8 2801C2927.7 2801 2800.3 2801 2673 2801C2545.7 2801 2418.3 2801 2291 2801C2163.7 2801 2036.3 2801 1909 2801C1781.7 2801 1654.3 2801 1527 2801C1399.7 2801 1272.3 2801 1145.2 2801C1018 2801 891 2801 763.8 2801C636.7 2801 509.3 2801 382 2801C254.7 2801 127.3 2801 63.7 2801L0 2801Z"
                    fill="#244c8f" />
                <path style={{filter: 'blur(8px)'}} d="M0 1434L63.7 1411.2C127.3 1388.3 254.7 1342.7 382 1337.2C509.3 1331.7 636.7 1366.3 763.8 1372.7C891 1379 1018 1357 1145.2 1330C1272.3 1303 1399.7 1271 1527 1286.8C1654.3 1302.7 1781.7 1366.3 1909 1374.8C2036.3 1383.3 2163.7 1336.7 2291 1316.7C2418.3 1296.7 2545.7 1303.3 2673 1316.7C2800.3 1330 2927.7 1350 3054.8 1363.5C3182 1377 3309 1384 3436.2 1381.7C3563.3 1379.3 3690.7 1367.7 3818 1367.5C3945.3 1367.3 4072.7 1378.7 4136.3 1384.3L4200 1390L4200 2801L4136.3 2801C4072.7 2801 3945.3 2801 3818 2801C3690.7 2801 3563.3 2801 3436.2 2801C3309 2801 3182 2801 3054.8 2801C2927.7 2801 2800.3 2801 2673 2801C2545.7 2801 2418.3 2801 2291 2801C2163.7 2801 2036.3 2801 1909 2801C1781.7 2801 1654.3 2801 1527 2801C1399.7 2801 1272.3 2801 1145.2 2801C1018 2801 891 2801 763.8 2801C636.7 2801 509.3 2801 382 2801C254.7 2801 127.3 2801 63.7 2801L0 2801Z"
                    fill="#1d6aab" />
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

