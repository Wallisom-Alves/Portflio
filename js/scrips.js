/*Saudação para o usuário */
const agora = new Date(); //Pega a data e hora do computador
const hora = agora.getHours(); //Extrai só a hora
const min = agora.getMinutes();

console.log("Hora atual: "+ hora + ":" + min); //Exibe a hora no console

let mensagem; //Mensagem de saudação do usuário

//Verifica qual a saudação adequada
if(hora < 12){
    mensagem = "Bom dia!";
}else if (hora < 18){
    mensagem = "Boa tarde!";
}else{
    mensagem = "Boa noite!";
}

const saudacao = document.querySelector("#saudacao"); //Localiza o parágrafo da saudação
saudacao.textContent = mensagem; // Exibe a mensagem no parágrafo

//document.getElementById("saudacao").textContent = mensagem;

/*MENU HAMBURGUER*/
const botaoMenu = document.querySelector(".menu-toggle"); // Localiza o botão ☰
const menu = document.querySelector(".menu"); // Localiza o menu de links
 
// "Quando o botão for clicado, execute esta função"
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto"); // Se a classe "aberto" não existe, adiciona; se existe, remove
});
 
// Bônus: fechar o menu ao clicar em um link
const links = document.querySelectorAll(".menu a"); // Localiza TODOS os links do menu
 
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto"); // Remove a classe: o menu se fecha
  });
});