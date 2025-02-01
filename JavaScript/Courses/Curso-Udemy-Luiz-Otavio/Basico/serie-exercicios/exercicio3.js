function checkNumber(number){
    if (typeof(number) !== "number") return number;

    if (((number % 3) === 0) && ((number % 5) === 0)) return "FizzBuzz";

    if ((number % 3) === 0) return "Fizz";

    if ((number % 5) === 0) return "Buzz";

    return number;
}

const randomNumber = Math.round((Math.random() * 100));

console.log("numero aleatorio: ", randomNumber, "retorno: ", checkNumber(randomNumber));