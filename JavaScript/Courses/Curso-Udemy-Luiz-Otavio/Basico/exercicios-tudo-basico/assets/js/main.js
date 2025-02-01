const formElement = document.querySelector(".form");
const containerElement = document.querySelector(".container");
const resultElement = document.querySelector(".result");
const imcMessages = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];
let weight;
let height;

formElement.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();

    weight = changeCommasToDots(document.querySelector("#peso").value);
    height = changeCommasToDots(document.querySelector("#altura").value);

    if (checkNaN()) {
        const imcResult = calculateIMC();

        if (imcResult) {
            setResult(`Seu IMC é ${imcResult} (${defineIMCMessage(imcResult)})`, true);
        }
    }
}

function changeCommasToDots(value){
    return value.replace(`,`, `.`);
}

function checkNaN(){
    const weightNaN = Number(weight);
    const heightNaN = Number(height);

    if (!weightNaN) {
        setResult(`Peso inválido`, false);
        return false;
    }
    if (!heightNaN) {
        setResult(`Altura inválida`, false);
        return false;
    }

    return true;
}

function calculateIMC(){
    return (weight / (height ** 2)).toFixed(2);
}

function defineIMCMessage(IMCResult){
    if (IMCResult >= 40) return imcMessages[5];
    if (IMCResult >= 35) return imcMessages[4];
    if (IMCResult >= 30) return imcMessages[3];
    if (IMCResult >= 25) return imcMessages[2];
    if (IMCResult >= 18.5) return imcMessages[1];
    if (IMCResult < 18.5) return imcMessages[0];
}

function setResult(message, isValid){
    cleanResult();
    
    let className;
    if (isValid) {
        className = `result-valid`;
    } else {
        className = `result-invalid`;
    }

    const spanElement = createSpan();

    addClassName(spanElement, `result-span`);

    addClassList(spanElement, className);

    setInnerHTML(spanElement, message);

    setAppendChild(resultElement, spanElement);
}

function cleanResult(){
    resultElement.innerHTML = ``;
}

function createSpan(){
    return document.createElement(`span`);
}

function addClassName(element, className){
    element.className = className;
}

function addClassList(element, className){
    element.classList.add(className);
}

function setInnerHTML(element, innerHTML){
    element.innerHTML = innerHTML;
}

function setAppendChild(fatherElement, childElement){
    fatherElement.appendChild(childElement);
}