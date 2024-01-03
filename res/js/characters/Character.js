
export class Character {
    constructor(name, hp, dmg, speed, type){
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        this.img = new Image();
        this.setType(type);
        this.img.src = this.path;
        this.ratio = 0.3;
        this.size = {
            width: 336 * this.ratio,
            height: 634 * this.ratio
        };
        this.position = {
            x: 100,
            y: 300
        };
    }
    setType(type){
            const characterTypes = [
                "./res/img/fraftik4brady.png"
            ]
            this.path = characterTypes[type];
    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
    update(state){
        switch(state){
            case 0:
                this.position.x++;
                break;
            case 1:
                console.log(this.name + "attacks!")
                break;
            case 2:
                console.log(this.name + " has found peace in this war! He lost the fight but he will never be forgotten!")
                this.position.x = 0;
                this.hp = 10000;
                break;
            default:
        }
    }
}
//funkce - stojí sama o sobě
//metoda - funkce, ale patrí nějakému objektu
//kopie z šablony - objekt (object) - instance
//constructor - metoda, která se zavolá pokud vytvoříme instanci od třídy - kopii od šablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
//this - slovo které ukazuje na daný objekt uvnitř třídy