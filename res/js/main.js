import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";
const Frafta = new Character("Frafta", 10000, 1, 0.1, 0);
const background = new Background();
console.log(background);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//KLÁVESNICE
const keys = {};
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});
const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    background.draw(ctx);
};
const update = () => {
    if(Frafta.position.x >= 640){
        Frafta.update(1);
        Frafta.hp-=100;
        console.log(Frafta.hp)
        if(Frafta.hp <= 0){
            Frafta.update(2);
        }
    }
    else{
        Frafta.update(0);
    }
};
const render = () => {Frafta.draw(ctx)};
const getFps = () => {};
//LOOP
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
    //zažádáme si snímek z funkce gameloop
    window.requestAnimationFrame(gameLoop);
}


//WINDOWS.ONLOAD = po načtení stránky
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
