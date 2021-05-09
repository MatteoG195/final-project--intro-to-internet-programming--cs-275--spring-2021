let doDiamond = (size) => {
    let output = ``;
    let half = Math.floor(size/2);

    if(size % 2 == 1){
        //go from -half to half, this allows for calcs
        //to occur for how many spaces to put before center
        //as well as how many stars to put after center
        for(let i = -1*half; i <= half; i++){
            //spaces before center point
            for(let j = Math.abs(i); j > 0; j--){
                output = output + ` `;
            }
            //stars before center point
            for(let j = half - Math.abs(i); j > 0; j--)
            {
                output = output + `*`;
            }
            //center point
            output = output + `*`;
            //stars after center point
            for(let j = half - Math.abs(i); j > 0; j--)
            {
                output = output + `*`;
            }
            output = output + `\n`;
        }
    }else{
        for(let i = -1*size; i <= size; i+=2){
            //spaces before center line
            for(let j = Math.abs(i); j > 0; j-=2){
                output = output + ` `;
            }
            //stars before center line
            for(let j = size - Math.abs(i); j > 0; j-=2)
            {
                output = output + `*`;
            }
            //add center point if first or last line, otherwise
            //pivot to stars after centerline (no center point)
            if(Math.abs(i) == half){
                output = output + `*`;
            }
            //stars after center line
            for(let j = size - Math.abs(i); j > 0; j-=2)
            {
                output = output + `*`;
            }
            output = output + `\n`;
        }
    }
    return output;
};

window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
    console.log(doDiamond(5));
    console.log(doDiamond(4));
};
