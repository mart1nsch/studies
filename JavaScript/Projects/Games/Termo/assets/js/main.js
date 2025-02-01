class Word {
    constructor(word, letters, chances) {
        this.word = word;
        this.letters = letters;
        this.chances = chances;
        this.inputs = [];
        this.acertou = false;
        this.sequencia;

        this.getLocalStorage();
    }

    static manageButtons(value) {
        let nextInput;
        let focusElement = document.activeElement;
        focusElement = document.querySelector(`#${focusElement.id}`);

        if (focusElement.classList.contains(`disabled`)) return;
    
        focusElement.value = value;
    
        if (value) {
            nextInput = Number(focusElement.id.replace(`input`, ``)) + 1;
        } else {
            nextInput = Number(focusElement.id.replace(`input`, ``)) - 1;
        }
        
        if (!value && (nextInput === 0
                       || nextInput === 5
                       || nextInput === 10
                       || nextInput === 15
                       || nextInput === 20
                       || nextInput === 25
                       || nextInput === 30)) {
            return;
        }
        
        if (((nextInput - 1) % 5 || !value) && nextInput !== 0) document.querySelector(`#input${nextInput}`).focus();
    }

    manageKeyboardPress() {
        document.addEventListener(`keydown`, e => {
            const focusElement = document.activeElement;
            const idPosition = Number(focusElement.id.replace(`input`, ``)) - 1;

            if (e.key === `Tab` && e.shiftKey) {
                if (idPosition === 0 || !(idPosition % 5)) e.preventDefault();
                return;
            }
            if (e.key === `Tab` && !((idPosition + 1) % 5)) {
                e.preventDefault();
                return;
            }
            if (e.key.length === 1) {
                e.preventDefault();
                Word.manageButtons(e.key.toUpperCase());
                return;
            }
            if (e.key === `Backspace`) {
                e.preventDefault();
                Word.manageButtons(null);
                return;
            }
            if (e.key === `Enter`) {
                e.preventDefault();
                this.tryResult();
                return;
            }
        });
    }

    manageMouseDown() {
        document.addEventListener(`mousedown`, (e) => {
            const el = e.target;
            const elParent = el.parentElement;
    
            if (el.classList.contains(`enter`)) {
                e.preventDefault();
                this.tryResult();
                return;
            }
    
            if (el.classList.contains(`backspace`)) {
                e.preventDefault();
                Word.manageButtons(null);
                return;
            }
    
            if (el.classList.contains(`keyboard-letter`)) {
                e.preventDefault();
                Word.manageButtons(el.innerText);
                return;
            }
            
            if ((el.classList.contains(`letter`) && ((elParent ? elParent.parentElement.classList.contains(`word-lines-disabled`) : false) || el.classList.contains(`disabled`)))
                || !el.classList.contains(`letter`)) {
                e.preventDefault();
                return;
            }
        });
    }

    getTryWord() {
        this.inputs = [];
        let lettersTry = [];
        let error = false;
        let idElement = Number(document.activeElement.id.replace(`input`, ``));

        if (idElement <= 5) idElement = 1;
        else if (idElement <= 10) idElement = 6;
        else if (idElement <= 15) idElement = 11;
        else if (idElement <= 20) idElement = 16;
        else if (idElement <= 25) idElement = 21;
        else if (idElement <= 30) idElement = 26;
        else if (idElement <= 35) idElement = 31;

        for (let i=0; i<5; i++) {
            this.inputs.push(idElement);
            idElement++;
        }

        this.inputs.forEach(input => lettersTry.push(document.querySelector(`#input${input}`).value.toUpperCase()));
        
        lettersTry.forEach(letter => {
            if (letter === ``) {
                error = true;
            }
        });

        if (error) return `ERR`;

        return lettersTry;
    }

    revealLetters(wordTry) {
        const colorLetters = [];

        wordTry.forEach((letter, index) => {
            if (letter === this.letters[index]) {
                colorLetters.push(`green`);
            } else {
                if (this.letters.filter(l => letter === l).length > 0) {
                    colorLetters.push(`yellow`);
                } else {
                    colorLetters.push(`red`);
                }
            }
        });

        colorLetters.forEach((color, index) => {
            if (color === `yellow`) {
                if (this.letters.filter((l, i) => wordTry[index] === l && colorLetters[i] !== `green` && i !== index).length === 0) {
                    colorLetters[index] = `red`;
                }
            }
        });

        this.animateLetters(colorLetters, wordTry);
        this.showNewLine();
    }

    animateLetters(colorLetters, wordTry) {
        colorLetters.forEach((color, i) => {
            const element = document.querySelector(`#input${this.inputs[i]}`);
            setTimeout(() => {
                element.classList.add(`disabled`);
                element.style.animation = `${color} 1s forwards`;
                Word.colorKeyboard(wordTry[i], color);
            }, 400 * i);
        });
    }

    showNewLine() {
        const nextInput = Number(this.inputs[0]) + 5;
        const newLineElement = document.querySelector(`#input${nextInput}`);
        if (!this.acertou && this.chances > 0) {
            setTimeout(() => {
                newLineElement.focus();
                newLineElement.parentElement.parentElement.classList.remove(`word-lines-disabled`);
            }, 2000);
        }
    }

    tryResult() {
        if (this.acertou || this.chances === 0) return;
        const wordTry = this.getTryWord();
        if (wordTry === `ERR`) return;
        if (wordTry.join().replace(/,/g, ``) === this.letters.join().replace(/,/g, ``)) {
            this.acertou = true;
        }
        this.chances--;
        this.revealLetters(wordTry);
        setTimeout(() => {
            if (this.acertou) this.finishWin();
            else if (this.chances === 0) this.gameOver();
        }, 2000);
    }

    finishWin() {
        this.setLocalStorage(`win`);
        document.querySelector(`.btn-play-again`).style.animation = `opacity 500ms forwards`;
    }

    gameOver() {
        this.setLocalStorage(`end`);
        document.querySelector(`#secret`).innerText = this.word;
        document.querySelector(`.btn-play-again`).style.animation = `opacity 500ms forwards`;
        document.querySelector(`.game-over`).style.animation = `opacity 500ms forwards`;
    }

    getLocalStorage() {
        this.sequencia = localStorage.getItem(`sequencia`);
        this.sequencia ? this.sequencia : 0;
        document.querySelector(`#sequencia`).innerText = this.sequencia;
    }

    setLocalStorage(type) {
        type === `win` ? this.sequencia++ : this.sequencia = 0;
        
        localStorage.setItem(`sequencia`, this.sequencia);
        document.querySelector(`#sequencia`).innerText = this.sequencia;
    }

    static colorKeyboard(letter, color) {
        const keyElement = document.querySelector(`#${letter}`);
        keyElement.style.animation = `key-${color} 1s forwards`;
    }
}

(function iniciaTermo() {
    disabledWords();
    focusLetter();
    const wordFromAPI = getSecretWord();
    const wordFromAPIArray = wordFromAPI.toUpperCase().split(``);
    const secretWord = new Word(wordFromAPI.toUpperCase(), wordFromAPIArray, 7);
    secretWord.manageMouseDown();
    secretWord.manageKeyboardPress();
})();

function disabledWords() {
    const wordLines = document.querySelectorAll(`.word-lines`);
    let contador = 0;

    for(el of wordLines) {
        if (contador !== 0) {
            el.classList.add(`word-lines-disabled`);
        }
        contador++;
    }
}

function focusLetter() {
    const letterElement = document.querySelectorAll('.letter');
    
    for(el of letterElement) {
        if (!el.value) {
            el.focus();
            break;
        }
    }
}

function getSecretWord() {
    try {
        const request = new XMLHttpRequest();
        request.open(`GET`, '../assets/json/words.json', false);
        request.send();
        
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            return response.words[random(0, response.words.length)];
        } else {
            console.log(`Status: `, request.status);
            return;
        }
    } catch(e) {
        console.log(`Erro no consumo da API: `, e);
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
