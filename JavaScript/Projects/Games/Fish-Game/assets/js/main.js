let running = false;
let interval;
let intervalFruit;
const movePx = 5;
let fish;
let fruits = [];
let id = 1;
let points = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Fruit {
    constructor() {
        this.id = id++;
        this.divElement = document.querySelector(`.container`);
        this.posX = random(0, this.divElement.getBoundingClientRect().width);
        this.posY = 0;
        this.sizeContainerY = this.divElement.getBoundingClientRect().height;
        this.element;
        this.interval;
        this.create();
    }

    create() {
        const element = document.createElement(`div`);
        element.classList.add(`fruit`);
        element.style.width = `20px`;
        element.style.height = `20px`;
        element.style.top = `${this.posY}px`;
        element.style.left = `${this.posX}px`;
        this.divElement.appendChild(element);
        this.element = element;
    }

    move() {
        this.posY += 2;
        this.element.style.top = `${this.posY}px`;
        if (this.posY > this.sizeContainerY) {
            clearInterval(this.interval);
            this.element.remove();
            fruits = fruits.filter(fruit => fruit.id !== this.id);
        }
    }

    eaten() {
        clearInterval(this.interval);
        this.element.remove();
        fruits = fruits.filter(fruit => fruit.id !== this.id);
        document.querySelector(`.points`).innerText = ++points;
    }
}

class Fish {
    constructor(size) {
        this.arrayBody = [];
        this.side = `ArrowDown`;

        let fishBody = null;
        let posX = 0;
        let posY = (movePx * (size - 1));

        for(let i=0; i<size; i++) {
            fishBody = new FishBody(fishBody, 20, 20, posX, posY);
            this.arrayBody.push(fishBody);
            posY -= movePx;
        }
    }

    move() {
        for(let i=(this.arrayBody.length - 1); i>=0; i--) {
            this.arrayBody[i].move(this.side);
        }
    }
}

class FishBody {
    constructor(parent, sizeX, sizeY, posX, posY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.posX = posX;
        this.posY = posY;
        this.divElement = document.querySelector(`.container`);
        this.sizeContainerX = this.divElement.getBoundingClientRect().width;
        this.sizeContainerY = this.divElement.getBoundingClientRect().height;
        this.parent = parent;
        this.element;
        this.create();
    }

    create() {
        const element = document.createElement(`div`);
        element.classList.add(`fish-body`);
        element.style.width = `${this.sizeX}px`;
        element.style.height = `${this.sizeY}px`;
        element.style.top = `${this.posY}px`;
        element.style.left = `${this.posX}px`;
        this.divElement.appendChild(element);

        if (!this.parent) {
            element.classList.add(`fish-head`);
        }

        this.element = element;
    }

    move(side) {
        if (!this.parent) {
            if (side === `ArrowDown`) {
                this.posY += movePx;
                if (this.posY > (this.sizeContainerY - movePx)) this.posY = 0;
                this.element.style.top = `${this.posY}px`;
            } else if (side === `ArrowUp`) {
                this.posY -= movePx;
                if (this.posY < 0) this.posY = (this.sizeContainerY - movePx);
                this.element.style.top = `${this.posY}px`;
            } else if (side === `ArrowLeft`) {
                this.posX -= movePx;
                if (this.posX < 0) this.posX = (this.sizeContainerX - movePx);
                this.element.style.left = `${this.posX}px`;
            } else if (side === `ArrowRight`) {
                this.posX += movePx;
                if (this.posX > (this.sizeContainerX - movePx)) this.posX = 0;
                this.element.style.left = `${this.posX}px`;
            }
            this.checkEatFruit();
        } else {
            this.posX = this.parent.posX;
            this.posY = this.parent.posY;
            this.element.style.top = `${this.posY}px`;
            this.element.style.left = `${this.posX}px`;
        }
    }

    checkEatFruit() {
        fruits.forEach(fruit => {
            if (((this.posX >= fruit.posX && this.posX <= (fruit.posX + 20))
                 || ((this.posX + 20) <= (fruit.posX + 20) && (this.posX + 20) >= fruit.posX))
                && ((this.posY >= fruit.posY && this.posY <= (fruit.posY + 20))
                    || ((this.posY + 20) <= (fruit.posY + 20) && (this.posY + 20) >= fruit.posY))) {
                fruit.eaten();
            }
        });
    }
}

function startGame() {
    points = 0;
    document.querySelector(`.points`).innerText = `0`;
    fish = new Fish(10);
    startIntervalFish();
    intervalFruit = setInterval(() => {
        const fruit = new Fruit();
        fruits.push(fruit);
        fruit.interval = setInterval(() => {
            fruit.move();
        }, 30);
    }, 3000);
}

function startIntervalFish() {
    interval = setInterval(() => {
        fish.move();
    }, 25);
}

document.addEventListener(`click`, e => {
    const element = e.target;
    
    if (element.classList.contains(`btn-start`)) {
        if (!running) startGame();
        running = true;
    }
});

document.addEventListener(`keydown`, e => {
    if (!running) return;
    clearInterval(interval);
    fish.side = e.key;
    fish.move();
    startIntervalFish();
});

/*

 - Ter tela de Upgrades no peixe, para melhorar velocidade, protecao, boost e ter opcao de colocar dentes para atacar.
 - Ter diversos inimigos, primeiro sera o tubarao, quando conseguir matar o tubaracao usando os dentes, fazer um novo
inimigo aparecer (quando o tubaracao morre, fazer victory achieve, mas ai dizer que a ira dos mares foi disparada, e
ai proxima play vai ter outro inimigo que nao pode ser vencido com os dentes).
 - Nao fazer o tubarao o primeiro boss, mas sim o ultimo, fazer por exemplo um carangueijo como o primeiro e ir melhorando
os inimigos ate chegar ao tubarao.

*/