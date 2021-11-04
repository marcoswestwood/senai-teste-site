$( document ).ready(function() {

    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })

})





let email = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}




function renderizarNovidades() {
    let espaco = document.getElementById("espaco-novidades");

    let listaNovidades = [
        {
            titulo: "playstation 4",
            imagem: "imagens/playstation4.png",
            valorDe: "R$ 3.599,00",
            valorPor: "R$ 2.699,00",
            prestacao: "Em até 10x de R$ 269,90"
        },
        {
            titulo: "notebook asus",
            imagem: "imagens/laptop-asus.png",
            valorDe: "R$ 3.199,00",
            valorPor: "R$ 1.999,00",
            prestacao: "Em até 10x de R$ 199,90"
        },
        {
            titulo: "headphone",
            imagem: "imagens/headphone-vermelho.png",
            valorDe: "R$ 89,00",
            valorPor: "R$ 59,90",
            prestacao: "Em até 10x de R$ 5,99"
        },
        {
            titulo: "samsung galaxy s21",
            imagem: "imagens/samsung-galaxy-s21.png",
            valorDe: "De: R$ 5.299,90",
            valorPor: "Por: R$ 3.999,00",
            prestacao: "Em até 10x de R$ 399,90"
        }
        
    ]
    let template = "";

    for (let index = 0; index < listaNovidades.length; index++) {
        const novidade = listaNovidades[index];

        template += `<div class="card">
            <h3>${novidade.titulo}</h3>
            <div class="icon">
                <img src="${novidade.imagem}"" alt="">
            </div>
            <h5>${novidade.valorDe}</h5>
            <h4>${novidade.valorPor}</h4>
            <h6>${novidade.prestacao}</h6>
            <button>Comprar</button> 
        </div>                  `
    }
    espaco.innerHTML = template;
}



