// #! /usr/bin/env node
const DEBUG = false; // to turn true to debug

// export default to remove when debugging with nodejs
// and first line to uncomment

export default function generatePetalsCoord(
    centerX,
    centerY,
    distToCenter,
    PISectorDivider,
    iconQty,
    iconNamesArr) {
        // init array of positions
        let posArr = [];

        // ICON QTY IS EVEN => 90° AXES NOT FILLED,
        // SYMETRY ALONG Y + 0° + 180° FILLED -------------------------------------
        if (iconQty % 2 === 0) {
            const quadrantIntervals = (iconQty / 2) + 1;
            // e.g. Math.PI/(2*3) => the angle will progress by +30°
            // for (imo) good looking values, check the README
            const a = (Math.PI/(PISectorDivider*quadrantIntervals));

            if (DEBUG) {
                console.log("for number of icons (even): ", iconQty);
                console.log(quadrantIntervals);
                console.log(a)
            }

            // Note For even iconQty:
            // for a version +a angle --> sector size, then regular deltas of +a
            // replace (k) with (k+1) in Math.cos() and Math.sin() methods
            // for a version 0 --> sector size, keep (k)
            for (let k = 0; k < iconQty / 2; k++) {
                let iconPos = {
                    iconName : iconNamesArr[k],
                    x: centerX + Math.floor(Math.cos((k) * a)*distToCenter),
                    y: centerY - Math.floor(Math.sin((k) * a)*distToCenter)
                };
                posArr.push(iconPos);
              }
            // ...past 90° axis, we can use the symetrical coordinates
            for (let k = iconQty / 2; k < iconQty; k++) {
                let iconPosAftY = {
                    iconName : iconNamesArr[k],
                    x: 2*centerX - posArr[iconQty - k - 1].x, //(2-1)centerX = centerX
                    y: posArr[iconQty - k - 1].y
                };
                posArr.push(iconPosAftY);
              }
        }
        
        // ICON QTY IS ODD => 0°, 90°, 180° ALL FILLED
        // + OFF-AXES ICONS SYMETRICAL ALONG Y ------------------------------------
        else {
            const quadrantIntervals = Math.floor(iconQty / 2); 
            const a = (Math.PI/(PISectorDivider*quadrantIntervals));
        
            if (DEBUG) {
                console.log("for number of icons (odd): ", iconQty);
                console.log(quadrantIntervals);
                console.log(a)
            }

            // 0 --> sector size: progress by regular deltas of +a angle
            for (let k = 0; k <= Math.floor(iconQty / 2); k++) {

                let iconPos = {
                    iconName : iconNamesArr[k],
                    x: centerX + Math.floor(Math.cos(k * a)*distToCenter),
                    y: centerY - Math.floor(Math.sin(k * a)*distToCenter)
                };
                posArr.push(iconPos);
              }
            // ...past 90° axis, we can use the symetrical coordinates
            for (let k = Math.floor(iconQty / 2) + 1; k < iconQty; k++) {
                let iconPosAftY = {
                    iconName : iconNamesArr[k],
                    x: 2*centerX - posArr[iconQty - k - 1].x, 
                    y: posArr[iconQty - k - 1].y
                };
                posArr.push(iconPosAftY);
                }  
        }   
        return posArr;
};

if (DEBUG) {
    const iconNamesArrTest = ["example1", "example2", "example3", "example4", "example5", "example6", "example7"];
    const res = generatePetalsCoord(0, 0, 100, 2, 7, iconNamesArrTest);
    console.log(res);
}