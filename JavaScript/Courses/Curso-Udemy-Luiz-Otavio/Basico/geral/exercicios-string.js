const nome = prompt("Digite o seu nome: ");
const nomeSemEspacos = nome.replace(" ", "");

document.body.innerHTML += `Seu nome é: ${nome}. <br>`;
document.body.innerHTML += `Seu nome tem ${nomeSemEspacos.length} letras. <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}. <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra r no seu nome? ${nome.toUpperCase().indexOf("R")}. <br>`;
document.body.innerHTML += `Qual o último índice da letra r no seu nome? ${nome.toUpperCase().lastIndexOf("R")}. <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}. <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}. <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}. <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}. <br>`;