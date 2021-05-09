let doDiamond = (size) =>
{
    let output = ``;
    let perSide = Math.floor(size/2);
    for(let i = 0; i < size; i++){
        //add spaces to the front
        for(let j = 0; j < size; j++) {
            if (j < perSide - i + 1) {
                output = output + ` `;
            }else{
                perSide = `*`;
            }
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
