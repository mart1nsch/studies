const inputTarefaElement = document.querySelector(".input-nova-tarefa");
const btnAddTarefaElement = document.querySelector(".btn-add-tarefa");
const tarefasElement = document.querySelector(".tarefas");

inputTarefaElement.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        if (!inputTarefaElement.value) return;
        criaTarefa(inputTarefaElement.value);
    }
});

document.addEventListener("click", function(e){
    const element = e.target;

    if (element.classList.contains("btn-add-tarefa")) {
        if (!inputTarefaElement.value) return;
        criaTarefa(inputTarefaElement.value);
    } else if (element.classList.contains("apagar")) {
        element.parentElement.remove();
        salvarTarefas();
    }
});

function criaTarefa(textoInput){
    const liElement = criaLi();
    liElement.innerText = textoInput;
    tarefasElement.appendChild(liElement);
    criaBotaoApagar(liElement);
    salvarTarefas();
    limpaInput();
}

function criaLi(){
    return document.createElement("li");
}

function limpaInput(){
    inputTarefaElement.value = "";
    inputTarefaElement.focus();
}

function criaBotaoApagar(li){
    li.innerText += " ";
    const botaoApagarElement = document.createElement("button");
    botaoApagarElement.setAttribute("class", "apagar");
    botaoApagarElement.setAttribute("title", "Apagar esta tarefa");
    botaoApagarElement.innerText = "Apagar";
    li.appendChild(botaoApagarElement);
}

function salvarTarefas(){
    const liTarefasElements = tarefasElement.querySelectorAll("li");
    const listaDeTarefas = [];

    for (li of liTarefasElements) {
        let tarefa = li.innerText;
        tarefa = tarefa.replace(" Apagar", "");
        listaDeTarefas.push(tarefa);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJson);
}

function adiconaTarefasSalvas(){
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adiconaTarefasSalvas();
