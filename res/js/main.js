const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720);
};
const update = () => {};
const render = () => {};
const getFps = () => {};


//loop
const gameLoop = () =>{
    //resizeCanvas
    resizeCanvas();
    //clearCanvas
    clearCanvas();
    //update
    update();
    //render
    render();
    //fps
    getFps();

    window.requestAnimationFrame(gameLoop);
}


//window.onload = po načtení stránky
window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}





//ARRAY
//indexování        0         1       2        3    4   5   6
/*const names = ["Karel", "Ondřej", "Jan" , "Petr", 1 , 2 , 3];
console.log(names[3]); vypíše ,,Petr"
names[3] = "Viktor";  změní Petr na Viktor*/

//Js Objekt
/*const urban = {
    hp: 1000,
    dmg: 1
    as: 0.01,
    speed: 0.1,
}
console.log(urban.hp);
urban.hp -=50;
console.log(urban.hp);*/
