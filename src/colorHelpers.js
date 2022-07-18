import chroma from 'chroma-js';

const levels = [50,100,200,300,400,500,600,700,800,900];

function generatePalette(starterPalette){
    let newPalette = {
        name: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }

    for(let level of levels){
        newPalette.colors[level] = []
    }

    for(let color of starterPalette.colors){
        // scale has 10 items[c1,c2,c3,c4,c5...]
        let scale = generateScale(color.color, 10).reverse();
        // push every value in scale in another level
        // from i of 10 colors scale [2154151,15151,15151,215515,20201,151512]
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`, // red - 200
                id: color.name.toLowerCase().replace(/ /g, '-'), // Chi-gung = chigung
                hex: scale[i], //#f1ds5f1
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            })
        }

        // 50: [scale1]
        // 100: [scale2]
        // 200: [scale3]
        // 300: [scale4]

    }

    return newPalette
}

function getRange(hexColor){
    const end = '#fff';

    // darkColor - color - whiteColor
    return[chroma(hexColor).darken(1.4).hex(), hexColor, end] 
}

function generateScale(hexColor, numberOfColors){
    // take 3 range colors and convert it to lab mode and export 10 colors between values
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors)
}

export {generatePalette}