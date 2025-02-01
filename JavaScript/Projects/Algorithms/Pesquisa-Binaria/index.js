function randomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

class BinarySearch {
    static search(array, target) {
        if(!target) return "Informe o target";
        if(!array) array = BinarySearch.createArray();

        let bottom = 0;
        let top = array.length - 1;

        while(bottom <= top) {
            const middle = Math.floor((bottom + top) / 2);
            const value = array[middle];

            if(value === target) return middle;
            else if(value > target) top = middle - 1;
            else if(value < target) bottom = middle + 1;
        }

        return "Nao encontrado";
    }

    static createArray() {
        let array = [];
        const numElementsArray = randomNumber(30, 999999);

        for(let i=0; i<numElementsArray; i++) {
            array.push(randomNumber(0, 999999));
        }

        array = [ ...new Set(array) ];
        array.sort((a, b) => a - b);

        return array;
    }
}

console.log(BinarySearch.search(null, 156));