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
            for(let j = half - Math.abs(i); j > 0; j--){
                output = output + `*`;
            }
            //center point
            output = output + `*`;
            //stars after center point
            for(let j = half - Math.abs(i); j > 0; j--){
                output = output + `*`;
            }
            output = output + `\n`;
        }
    }else{
        //top and bottom need (size-1) spaces and a single *.
        for(let i = 0; i < size - 1; i++){
            output += ` `;
        }
        output += `*\n`;
        //outer for loop needs to run from i = [-(half-1),half-1]
        //because the outer rows (+-half) are resolved by the loops
        //above and below
        for(let i = -1*half+1; i <= half-1; i++){
            //spaces before stars
            for(let j = 0; j < Math.abs(i); j++){
                output = output + `  `;
            }
            //stars
            for(let j = 0; j < size-2*Math.abs(i); j++){
                //final * has a trailing space,
                //but should be fine for now
                output = output + `* `;
            }
            //add line break
            output = output + `\n`;
        }
        //bottom row, (size-1) spaces and a single *.
        for(let i = 0; i < size - 1; i++){
            output += ` `;
        }
        output += `*\n`;
    }
    return output;
};

window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
    console.log(doDiamond(5));
    console.log(doDiamond(4));
    console.log(doDiamond(6));

    let div = document.getElementById(`diamondBox`);
    let input;
    let direction = `right`;

    console.log(div.style.left);

    const ONE_SECOND = 1000;

    do{
        input = window.prompt(`Enter a number for the size of the diamond.`);
        input = parseInt(input);
    }while(isNaN(input));

    console.log(doDiamond(input));
    div.content = doDiamond(input);

    setInterval(() => {
        let pos;

        if(direction == `right`){
            pos = div.style.right;
            if(pos == window.clientWidth5){
                direction = `left`;
            }else{
                div.style.left--;
            }
        }else{
            pos == div.style.left;
            if(pos == 0){
                direction = `right`;
            }else {
                div.style.left++;
            }
        }
        console.log(direction);
    }, (ONE_SECOND))
};
