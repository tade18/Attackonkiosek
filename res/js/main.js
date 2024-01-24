//IMPORTY------------------------------------------
import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

//CHARACTERS---------------------------------------
/*Postavy pro hráče*/
const friendly = [];
/*Postavy pro pc*/
const enemy = [];

//POZADÍ-------------------------------------------
const background = new Background();
console.log(background);

//CANVAS-------------------------------------------
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//KLÁVESNICE---------------------------------------
const keys = {};
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

//RESIZE CANVAS------------------------------------
const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    background.draw(ctx);
};

//UPDATE-------------------------------------------
const update = () => {
    Frafta.update(0);
    unrealurbic.update(0);
    /*if(Frafta.position.x >= 640){
        Frafta.update(1);
        //Frafta.hp-=100;
        console.log(Frafta.hp)
        if(Frafta.hp <= 0){
            Frafta.update(2);
        }
    }
    else{
        Frafta.update(0);
    }*/
};

//RENDER-----------------------------------------
const render = () => {
    /*a = postava která je v poli nařadě*/
        friendly.map((a)=>{
            a.draw(ctx);
        })
        enemies.map((a)=>{
            a.draw(ctx);
        })
};
const getFps = () => {};

//LOOP-------------------------------------------
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
};

//NAČTENÍ DAT Z CHARACTERS.JSON------------------
const loadData = async()=>{
    const file = await fetch("./res/data/characters.json");
    const data = await file.json();
    Character.charactersData = data;
};

//PRERENDER--------------------------------------
const prerender = () => {
    friendly.push(new Character("UnrealUrbic"));
    enemies.push(new Character("Frafticek"));
}

//WINDOWS.ONLOAD---------------------------------
window.onload = async() => {
    /*načteme soubory*/
    await loadData();
    /*prerenderujeme postavy*/
    prerender();
    /*spustime hru*/
    window.requestAnimationFrame(gameLoop);
};


//                                   .:;it1i;:,,..
//                                .:i1tfffLLLf1i;,,,.
//                              .:;;i1tffLfLLCLti:,,,,.
//                            .,,,:iLLLLLffffftti;:,,,,.
//                            :,,,;11i;;i11ii:,,,,,,,,,,,
//                           ,:..,:;,.,,,:;;::,...,,:,,.,.
//                           ;,..,,,:tf1;;;::::::::;;:,..,
//                           ,....,;fLLCCCCLt111tt1;;;,,.,
//                           ....,i1ttffLCCCLfffft1;;::,.,
//                           ....,i11ttfLLLLfffftt1;;:::.,
//                           ::..,;tt1tffLCLLLffffti::::,,
//                           ;i,.:i1ttt1ttffLLfLL1:,,,,,:.
//             .1i:      .....11:;11i;;;::,:;1tt;,,::,,::
//             ;0Ct1:..,Lif1,:ifLf11ii11ii;:;ift::;;;;;;:
//              :t1ti::,:,::,,,iLfLftt1t1ttfCLCC;i1ttf1i:
//               ;11ii:;ii1;f0Ci11fiifLttGGCLLLG1;;i11i;,
//               1Lt1111i...;t1::::,,iLftf1itttf1:::::::.
//             .iC0GGG00C:...  :1;Gi,,iii;itti;;:::,:;;:
//             tftft1iii;:,:;1tfC;:;:;1t1tttttft1;::;::.
//             .1fti;i1ttfLLCG00CffCt,:;;i1ffft1ii;;,,,
//             .LGCffffffffttffftti:,..,,,:i1tfft1;,;;..
//            .;L1tftt1iii111iii:.......,i:,,::::,,:i;...
//           ..Lt:1fLfft11it1,;: ........;t,........ .......
//          .,.G1,i;;;i11ii:.,,,...........,...... ...... ..,..
//         ,,..GG,;;;::;:;i..,:,................,::,..............
//        ,....i@1,;111;it, .,::..............;fLLtf1,...............
//       ,..... t@;:1iiGG, ...:: .............,f00GGC; ................
//      ,....... L8:.18G, ...it1,...............t880G1..................
//     ,..........8L1@C.,;iiitt1iiii:........... t808f ..................
//    ............,:;i..,,::,:,,,,................f08t ...................
//    ,...........    ...  ........................fG; ...............  .,
//   ..............................................,i.................;, .,
//   ,................................................................Lt...,
//  ,............................................................... ;i:...,,
// .,.................................................................  ....,,
// ,.........................................................................,.
// ,..........................................................................,
// ...........................................................................,.
//   ..........................................................................,
//       ......,. ..............................................................,
//              ,................................................................,
//               ,...............................................................,.
//                , ..............................................................,
