export class Character {
    /*static - dana vec nalezi/patri tride - ne objektu*/
    static charactersData;

    /*
    const foo = new Character(....);
    foo.name; - name patri objektu

    pokud dana vec patri tride - je static
    Character.charactersData - zapis vypada takto
    foo.charactersData - nebude fungovat
    */

//CONSTRUCTOR------------------------------------------
    constructor(name, hp, dmg, speed, type) {
        this.name = name;
        this.img = new Image();
        this.setType(name);
        this.img.src = this.path;
        this.ratio = 0.3;
        this.size = {
            width: 336 * this.ratio,
            height: 634 * this.ratio
        };
        this.state = 0;
        this.animationSpeed = 4;
        this.frame= {
            counter: 0,
            index: 1,
            maxIndex: 11,
            width: 100;
            height: 100
        }
    }
//SETTYPE-----------------------------------------------
    setType(name) {
        Character.charactersData.map((obj)=>{
            if(name  === obj.name){
                this.sprites = obj.sprites;
                this.hp = obj.stats.hp;
                this.maxHp = this.hp;
                this.dmg = obj.stats.dmg;
                this.speed = obj.stats.speed;
                this.side = obj.stats.side;
                this.velocity = {
                    x: obj.stats.velocity * this.speed;
                };
                this.position{
                    x: obj.stats.position,
                    y: 350,
                };
                return;
            }
        })
    }
//ANIMACE-----------------------------------------------
    animate(ctx){
        ctx.drawImage
    }
//VYKRESLENÍ--------------------------------------------
    draw(ctx) {
        ctx.save();
        if (this.side === 0) {
            this.animate(ctx);
            return ctx.restore();
        }
            ctx.translate(this.position.x + this.size.width, 0)
            ctx.scale(-1, 1);
            this.animate(ctx);
            ctx.drawImage(this.img, 0, this.position.y, this.size.width, this.size.height); 
            ctx.restore();
        }
    update(state) {
        switch (state) {
            case 0:
                this.move()
                break;
            case 1:
                console.log(this.name + "attacks!")
                break;
            case 2:
                console.log(this.name + " has found peace in this war! He lost the fight but he will never be forgotten!")
                this.position.x = 0;
                this.hp = 1000;
                break;
            default:
        }
    }
//POHYB-------------------------------------------------
    move() {
        this.position.x += this.velocity.x;
        if (this.position.x >= 1100) {
            this.velocity.x *= -1;
            this.side = 1;
        }
        if (this.position.x <= 90) {
            this.velocity.x *= -1;
            this.side = 0;
        }
    }
}

//funkce - stojí sama o sobě
//metoda - funkce, ale patrí nějakému objektu
//kopie z šablony - objekt (object) - instance
//constructor - metoda, která se zavolá pokud vytvoříme instanci od třídy - kopii od šablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
//this - slovo které ukazuje na daný objekt uvnitř třídy