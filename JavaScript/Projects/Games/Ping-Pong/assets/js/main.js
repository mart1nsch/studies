class Game {
    constructor() {
        this.player1 = document.querySelector(`#player1`);
        this.player2 = document.querySelector(`#player2`);
        this.ball = document.querySelector(`.ball`);
        this.game = document.querySelector(`.game`);
        this.home = document.querySelector(`.home`);
        this.containerPoints = document.querySelector(`.container-points`);
        this.points1 = document.querySelector(`#points1`);
        this.points2 = document.querySelector(`#points2`);
        this.endgame = document.querySelector(`.endgame`);
        this.playerWin = document.querySelector(`#player-win`);
        
        this.fps = 60;
        this.moves = 7;
        this.movesBall;
        this.angle;
        this.ballSpeedX;
        this.ballSpeedY;

        this.posXBall;
        this.posYBall;

        this.posYPlayer1;
        this.posYPlayer2;

        this.upPressPlayer1 = false;
        this.downPressPlayer1 = false;
        this.upPressPlayer2 = false;
        this.downPressPlayer2 = false;

        this.interval;

        this.keyEvent();
    }

    keyEvent() {
        document.addEventListener(`keydown`, e => {
            const key = e.key.toLowerCase();

            if (key === `w`) this.upPressPlayer1 = true;
            if (key === `s`) this.downPressPlayer1 = true;

            if (key === `arrowup`) this.upPressPlayer2 = true;
            if (key === `arrowdown`) this.downPressPlayer2 = true;

            if (!this.interval && key === `enter`) this.startGame();
        });

        document.addEventListener(`keyup`, e => {
            const key = e.key.toLowerCase();

            if (key === `w`) this.upPressPlayer1 = false;
            if (key === `s`) this.downPressPlayer1 = false;

            if (key === `arrowup`) this.upPressPlayer2 = false;
            if (key === `arrowdown`) this.downPressPlayer2 = false;
        });
    }

    startGame() {
        this.home.style.display = `none`;
        this.game.style.opacity = `1`;
        this.containerPoints.style.opacity = `1`;
        this.endgame.style.display = `none`;
        this.points1.innerText = `0`;
        this.points2.innerText = `0`;
        this.gameLoop();
    }

    calculatePositions() {
        this.movesBall = 5;
        this.angle = Game.degreesToRadians(Game.degreesAngle());
        this.ballSpeedX = this.movesBall * Math.cos(this.angle);
        this.ballSpeedY = this.movesBall * Math.sin(this.angle);

        this.posXBall = window.innerWidth / 2;
        this.posYBall = window.innerHeight / 2;

        this.posYPlayer1 = window.innerHeight / 2;
        this.posYPlayer2 = window.innerHeight / 2;
    }

    calculateCollision(posY) {
        const relativeIntersectY = (posY + 80 / 2) - this.posYBall;
        const normalizedIntersectY = relativeIntersectY / (80 / 2);
        const direction = this.ballSpeedX > 0 ? -1 : 1;

        this.angle = normalizedIntersectY * (Math.PI / 4);

        this.ballSpeedX = this.movesBall * Math.cos(this.angle) * direction;
        this.ballSpeedY = this.movesBall * Math.sin(this.angle);
    }

    update() {
        if (this.upPressPlayer1) this.posYPlayer1 -= this.posYPlayer1 <= 0 ? 0 : this.moves;
        if (this.downPressPlayer1) this.posYPlayer1 += (this.posYPlayer1 + 80) >= window.innerHeight ? 0 : this.moves;

        if (this.upPressPlayer2) this.posYPlayer2 -= this.posYPlayer2 <= 0 ? 0 : this.moves;
        if (this.downPressPlayer2) this.posYPlayer2 += (this.posYPlayer2 + 80) >= window.innerHeight ? 0 : this.moves;

        this.posXBall += this.ballSpeedX;
        this.posYBall += this.ballSpeedY;

        if (this.posXBall <= 0) this.point(`player2`);
        else if ((this.posXBall + 15) >= window.innerWidth) this.point(`player1`);
        
        // Colisoes no teto e no chao
        if (this.posYBall <= 0 || (this.posYBall + 15) >= window.innerHeight) {
            this.ballSpeedY *= -1;
            this.posYBall += this.ballSpeedY;
        }

        // Colisao no jogador
        if (this.posXBall <= 15 && this.posYBall >= this.posYPlayer1 && this.posYBall <= (this.posYPlayer1 + 80)) {
            this.movesBall += 0.5;
            this.calculateCollision(this.posYPlayer1);
        }
        if ((this.posXBall + 15) >= (window.innerWidth - 15) && this.posYBall >= this.posYPlayer2 && this.posYBall <= (this.posYPlayer2 + 80)) {
            this.movesBall += 0.5;
            this.calculateCollision(this.posYPlayer2);
        }
    }

    rebuild() {
        this.game.innerHTML = ``;

        for (let i=1; i<=2; i++) {
            const element = document.createElement(`div`);
            element.classList.add(`player`);
            element.id = `player${i}`;
            element.style.top = `${i === 1 ? this.posYPlayer1 : this.posYPlayer2}px`;

            if (i === 2) element.style.right = `0`;

            this.game.appendChild(element);
        }

        const element = document.createElement(`div`);
        element.classList.add(`ball`);
        element.style.top = `${this.posYBall}px`;
        element.style.left = `${this.posXBall}px`;
        this.game.appendChild(element);
    }

    gameLoop() {
        this.calculatePositions();

        this.interval = setInterval(() => {
            this.update();
            this.rebuild();
        }, 1000 / this.fps);
    }

    point(player) {
        if (player === `player1`) this.points1.innerText = Number(this.points1.innerText) + 1;
        if (player === `player2`) this.points2.innerText = Number(this.points2.innerText) + 1;

        if (Number(this.points1.innerText) === 10 || Number(this.points2.innerText) === 10) {
            this.endGame(player);
        } else {
            this.restartGame();
        }
    }

    restartGame() {
        clearInterval(this.interval);

        setTimeout(() => {
            this.gameLoop();
        }, 3000);
    }

    endGame(player) {
        clearInterval(this.interval);
        this.interval = null;

        setTimeout(() => {
            this.endgame.style.display = `flex`;
            this.playerWin.innerText = player === `player1` ? `Player 1` : `Player 2`;
            this.game.style.opacity = `0`;
            this.containerPoints.style.opacity = `0`;
        }, 3000);
    }
    
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    static degreesAngle() {
        let degrees;

        while (true) {
            degrees = this.random(0, 361);

            if ((degrees >= 0 && degrees <= 30) ||
                (degrees <= 360 && degrees >= 330) ||
                (degrees <= 180 && degrees >= 150) ||
                (degrees >= 180 && degrees <= 210)) {
                break;
            }
        }

        return degrees;
    }
}

(function startGame() {
    const game = new Game();
})();