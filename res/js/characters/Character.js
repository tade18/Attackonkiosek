
export class Character {
    constructor(name, hp, dmg, speed){
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        console.log(this);
    }
}
//funkce - stojí sama o sobě
//metoda - funkce, ale patrí nějakému objektu
//kopie z šablony - objekt (object) - instance
//constructor - metoda, která se zavolá pokud vytvoříme instanci od třídy - kopii od šablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);