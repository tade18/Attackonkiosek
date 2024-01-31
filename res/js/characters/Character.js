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
    constructor(type) {
        this.img = new Image();
        this.setType(type);
        this.img.src = this.path;
        this.ratio = 0.3;
        this.size = {
            width: 600 * this.ratio,
            height: 634 * this.ratio,
        };
        this.state = 0;
        this.animationSpeed = 4;
        this.frame= {
            counter: 0,
            index: 1,
            maxIndex: 11,
            width: 100,
            height: 100
        }
    }
//SETTYPE-----------------------------------------------
    setType(type) {
        Character.charactersData.map((obj)=>{
            if(obj.name  === type){
                this.sprites = obj.sprites;
                this.name = obj.name
                this.hp = obj.stats.hp;
                this.maxHp = this.hp;
                this.dmg = obj.stats.dmg;
                this.speed = obj.stats.speed;
                this.side = obj.stats.side;
                this.velocity = {
                    x: obj.stats.velocity * this.speed
                };
                this.position = {
                    x: obj.stats.position,
                    y: 350
                };
                return;
            }
        });
    }
//ANIMACE-----------------------------------------------
    animate(ctx){
        let movementX = this.position.x;
        if (this.side === 1) {
            movementX = 0;
        }
        ctx.drawImage(
            this.img,
            this.frame.width * this.frame.index,
            0,
            this.frame.width,
            this.frame.height,
            movementX,
            this.position.y,
            this.size.width,
            this.size.height,
        );
        if (this.frame.index >= this.frame.maxIndex) return this.frame.index = 0;
        this.frame.counter++;
        if (this.frame.counter >= this.animationSpeed) {
            this.frame.index++;
            /*reset counteru*/
            this.frame.counter = 0;
        }
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
    update() {
        switch (this.state) {
            case 0:
                this.img.src = this.sprites.movement.path;
                this.frame.maxIndex = this.sprites.movement.frames;
                this.frame.width = this.sprites.movement.width;
                this.frame.height = this.sprites.movement.height;
                this.move();
                break;
            case 1:
                console.log(this.name + "attacks!");
                this.img.src = this.sprites.attack.path;
                this.frame.maxIndex = this.sprites.attack.frames;
                this.frame.width = this.sprites.attack.size.width;
                this.frame.height = this.sprites.attack.size.height;
                break;
            case 2:
                console.log(this.name + " has found peace in this war! He lost the fight but he will never be forgotten!")
                this.position.x = 0;
                this.hp = this.maxHp;
                if (this.side === 0) return this.position.x = -200;
                this.position.x = 1400;
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

attack(enemy){
    if(enemy === undefined){
        enemy.state = 2;
    }
    enemy.hp -= this.dmg;
    if (enemy.hp <= 0) {
        enemy.state = 2;
    }
}

//DETEKCE KOLIZE---------------------------------------
    static detectCollison(friendly, enemy){
        if (friendly.position.x < enemy.position.x + enemy.size.width * 0.3 + enemy.size.width * 0.2 &&
            friendly.position.x + friendly.size.width / 2 + friendly.size.width * 0.2 > enemy.position.x + enemy.size.width * 0.3)
            {
            friendly.state = 1;
            enemy.state = 1;
            friendly.attack(enemy);
            enemy.attack(friendly);
            friendly.update();
            enemy.update();
            return;
        }
        friendly.state = 0;
        enemy.state = 0;
        friendly.update();
        enemy.update();
    }
}

//funkce - stojí sama o sobě
//metoda - funkce, ale patrí nějakému objektu
//kopie z šablony - objekt (object) - instance
//constructor - metoda, která se zavolá pokud vytvoříme instanci od třídy - kopii od šablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
//this - slovo které ukazuje na daný objekt uvnitř třídy