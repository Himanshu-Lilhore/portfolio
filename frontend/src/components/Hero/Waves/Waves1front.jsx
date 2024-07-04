import React, { useEffect, useRef } from 'react';
import T1 from '../../../assets/Waves/Waves1front/T1'
import T2 from '../../../assets/Waves/Waves1front/T2'
import T3 from '../../../assets/Waves/Waves1front/T3'
import T4 from '../../../assets/Waves/Waves1front/T4'
import T5 from '../../../assets/Waves/Waves1front/T5'

export default function Waves1front(props) {
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
                    console.log(localOffset);
                    keyframes.push({ d: 'path("' + thisSvgThisPath.getAttribute('d') + '")', offset: localOffset });
                }

                animations.push(mainPaths[pathCount].animate(keyframes, {
                    duration: 1500 * totalSvgs,
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
                <path d="M0 1916L53.8 1891.7C107.7 1867.3 215.3 1818.7 323 1808.5C430.7 1798.3 538.3 1826.7 646 1842C753.7 1857.3 861.3 1859.7 969 1834.5C1076.7 1809.3 1184.3 1756.7 1292 1748C1399.7 1739.3 1507.3 1774.7 1615 1775.7C1722.7 1776.7 1830.3 1743.3 1938.2 1749.2C2046 1755 2154 1800 2261.8 1824.5C2369.7 1849 2477.3 1853 2585 1824.5C2692.7 1796 2800.3 1735 2908 1745.5C3015.7 1756 3123.3 1838 3231 1851.3C3338.7 1864.7 3446.3 1809.3 3554 1771C3661.7 1732.7 3769.3 1711.3 3877 1719.7C3984.7 1728 4092.3 1766 4146.2 1785L4200 1804L4200 2801L4146.2 2801C4092.3 2801 3984.7 2801 3877 2801C3769.3 2801 3661.7 2801 3554 2801C3446.3 2801 3338.7 2801 3231 2801C3123.3 2801 3015.7 2801 2908 2801C2800.3 2801 2692.7 2801 2585 2801C2477.3 2801 2369.7 2801 2261.8 2801C2154 2801 2046 2801 1938.2 2801C1830.3 2801 1722.7 2801 1615 2801C1507.3 2801 1399.7 2801 1292 2801C1184.3 2801 1076.7 2801 969 2801C861.3 2801 753.7 2801 646 2801C538.3 2801 430.7 2801 323 2801C215.3 2801 107.7 2801 53.8 2801L0 2801Z" fill="#3085a8"/>
                <path d="M0 2068L53.8 2053.7C107.7 2039.3 215.3 2010.7 323 1999.3C430.7 1988 538.3 1994 646 2009.2C753.7 2024.3 861.3 2048.7 969 2078.8C1076.7 2109 1184.3 2145 1292 2147.8C1399.7 2150.7 1507.3 2120.3 1615 2108.7C1722.7 2097 1830.3 2104 1938.2 2111C2046 2118 2154 2125 2261.8 2115.7C2369.7 2106.3 2477.3 2080.7 2585 2082.7C2692.7 2084.7 2800.3 2114.3 2908 2136.5C3015.7 2158.7 3123.3 2173.3 3231 2160.3C3338.7 2147.3 3446.3 2106.7 3554 2103.3C3661.7 2100 3769.3 2134 3877 2132.3C3984.7 2130.7 4092.3 2093.3 4146.2 2074.7L4200 2056L4200 2801L4146.2 2801C4092.3 2801 3984.7 2801 3877 2801C3769.3 2801 3661.7 2801 3554 2801C3446.3 2801 3338.7 2801 3231 2801C3123.3 2801 3015.7 2801 2908 2801C2800.3 2801 2692.7 2801 2585 2801C2477.3 2801 2369.7 2801 2261.8 2801C2154 2801 2046 2801 1938.2 2801C1830.3 2801 1722.7 2801 1615 2801C1507.3 2801 1399.7 2801 1292 2801C1184.3 2801 1076.7 2801 969 2801C861.3 2801 753.7 2801 646 2801C538.3 2801 430.7 2801 323 2801C215.3 2801 107.7 2801 53.8 2801L0 2801Z" fill="#4eb5d4"/>
                <path d="M0 2335L53.8 2334.2C107.7 2333.3 215.3 2331.7 323 2341.5C430.7 2351.3 538.3 2372.7 646 2390.8C753.7 2409 861.3 2424 969 2414.7C1076.7 2405.3 1184.3 2371.7 1292 2360.8C1399.7 2350 1507.3 2362 1615 2376.7C1722.7 2391.3 1830.3 2408.7 1938.2 2395.7C2046 2382.7 2154 2339.3 2261.8 2327.8C2369.7 2316.3 2477.3 2336.7 2585 2349.7C2692.7 2362.7 2800.3 2368.3 2908 2380C3015.7 2391.7 3123.3 2409.3 3231 2403.5C3338.7 2397.7 3446.3 2368.3 3554 2372.3C3661.7 2376.3 3769.3 2413.7 3877 2417.7C3984.7 2421.7 4092.3 2392.3 4146.2 2377.7L4200 2363L4200 2801L4146.2 2801C4092.3 2801 3984.7 2801 3877 2801C3769.3 2801 3661.7 2801 3554 2801C3446.3 2801 3338.7 2801 3231 2801C3123.3 2801 3015.7 2801 2908 2801C2800.3 2801 2692.7 2801 2585 2801C2477.3 2801 2369.7 2801 2261.8 2801C2154 2801 2046 2801 1938.2 2801C1830.3 2801 1722.7 2801 1615 2801C1507.3 2801 1399.7 2801 1292 2801C1184.3 2801 1076.7 2801 969 2801C861.3 2801 753.7 2801 646 2801C538.3 2801 430.7 2801 323 2801C215.3 2801 107.7 2801 53.8 2801L0 2801Z" fill="#71e7ff"/>
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

