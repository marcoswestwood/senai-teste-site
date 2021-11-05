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
            valorDe: "De: R$ 3.599,00",
            valorPor: "Por: R$ 2.699,00",
            prestacao: "Em até 10x de R$ 269,90"
        },
        {
            titulo: "notebook asus",
            imagem: "imagens/laptop-asus.png",
            valorDe: "De: R$ 3.199,00",
            valorPor: "Por: R$ 1.999,00",
            prestacao: "Em até 10x de R$ 199,90"
        },
        {
            titulo: "headphone",
            imagem: "imagens/headphone-vermelho.png",
            valorDe: "De: R$ 89,00",
            valorPor: "Por: R$ 59,90",
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
                <img src="${novidade.imagem}" alt="">
            </div>
            <h5>${novidade.valorDe}</h5>
            <h4>${novidade.valorPor}</h4>
            <h6>${novidade.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}




function renderizarCategorias() {
    let espaco = document.getElementById("espaco-categorias");

    let listaCategorias = [
        {
            titulo: "smartphones",
            icone: "imagens/icone smartphone.png",
            vinculo: "celulares.html",
            alt: "smartphones",
        },
        {
            titulo: "notebooks",
            icone: "imagens/icone notebook.png",
            vinculo: "computadores.html",
            alt: "notebooks",
        },
        {
            titulo: "óculos vr",
            icone: "imagens/icone-oculos-vr.png",
            vinculo: "oculosvr.html",
            alt: "óculos realidade virtual",
        },
        {
            titulo: "pc gamers",
            icone: "imagens/icone-pcgamer.png",
            vinculo: "pcgamers.html",
            alt: "pc gamers",
        },
        {
            titulo: "consoles",
            icone: "imagens/icone-videogame.png",
            vinculo: "consoles.html",
            alt: "consoles",
        },
        {
            titulo: "acessórios",
            icone: "imagens/icone-acessórios.png",
            vinculo: "acessorios.html",
            alt: "acessórios",
        },
    
    ]

    let template = "";

    for (let index = 0; index < listaCategorias.length; index++) {
        const categoria = listaCategorias[index];

        template += `<div class="col">
            <section class="card">
                <div class="icone">
                    <a href=${categoria.vinculo}><img src="${categoria.icone}" alt="${categoria.alt}"></a>
                </div>
                <h4>${categoria.titulo}</h4>
            </section>   
        </div> `
    }
    espaco.innerHTML = template;
}



function renderizarGaleria() {
    let espaco = document.getElementById("espaco-galeria");

    let listaGaleria = [
        {
            imagem: "imagens/galeria/foto1.jpg",
            a: "imagens/galeria/foto1.jpg",
        },
        {
            imagem: "imagens/galeria/foto2.jpg",
            a: "imagens/galeria/foto2.jpg",
        },
        {
            imagem: "imagens/galeria/foto3.jpg",
            a: "imagens/galeria/foto3.jpg",
        },
        {
            imagem: "imagens/galeria/foto4.jpg",
            a: "imagens/galeria/foto4.jpg",
        },
        {
            imagem: "imagens/galeria/foto5.jpg",
            a: "imagens/galeria/foto5.jpg",
        },
        {
            imagem: "imagens/galeria/foto6.jpg",
            a: "imagens/galeria/foto6.jpg",
        },
        {
            imagem: "imagens/galeria/foto7.jpg",
            a: "imagens/galeria/foto7.jpg",
        },
        {
            imagem: "imagens/galeria/foto8.jpg",
            a: "imagens/galeria/foto8.jpg",
        },
        {
            imagem: "imagens/galeria/foto9.jpg",
            a: "imagens/galeria/foto9.jpg",
        },
        {
            imagem: "imagens/galeria/foto10.jpg",
            a: "imagens/galeria/foto10.jpg",
        }
    ]

    let template = "";

    for (let index = 0; index < listaGaleria.length; index++) {
        const galeria = listaGaleria[index];

        template += `<a href=${galeria.a} class="itens-galeria">
            <img src="${galeria.imagem}" alt="">
        </a>`
    }
    espaco.innerHTML = template;
}











// ----- RENDERIZAÇÃO DA PAGINA ACESSORIOS ----- 

function renderizarAcessorios() {
    let espaco = document.getElementById("espaco-acessorios");

    let listaAcessorios = [
        {
            titulo: "headphone",
            imagem: "imagens/headphone-vermelho.png",
            valorDe: "De: R$ 89,00",
            valorPor: "Por: R$ 59,00",
            prestacao: "Em até 10x de R$ 5,90"
        },
        {
            titulo: "teclado",
            imagem: "imagens/teclado.png",
            valorDe: "De: R$ 299,00",
            valorPor: "Por: R$ 199,00",
            prestacao: "Em até 10x de R$ 19,90"
        },
        {
            titulo: "mouse",
            imagem: "imagens/mouse.png",
            valorDe: "De: R$ 49,00",
            valorPor: "Por: R$ 34,00",
            prestacao: "Em até 10x de R$ 3,40"
        },
        {
            titulo: "controle sem fio xbox",
            imagem: "imagens/controle sem fio xbox.png",
            valorDe: "De: R$ 499,00",
            valorPor: "Por: R$ 349,00",
            prestacao: "Em até 10x de R$ 34,90"
        }
    ]

    let template = "";

    for (let index = 0; index < listaAcessorios.length; index++) {
        const acessorios = listaAcessorios[index];

        template += `<div class="card">
            <h3>${acessorios.titulo}</h3>
            <div class="icon">
                <img src="${acessorios.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${acessorios.valorDe}</h5>
            <h4>${acessorios.valorPor}</h4>
            <h6>${acessorios.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}









// ----- RENDERIZAÇÃO DA PAGINA CELULARES ----- 

function renderizarCelulares() {
    let espaco = document.getElementById("espaco-celulares");

    let listaCelulares = [
        {
            titulo: "Samsung galaxy s21",
            imagem: "imagens/samsung-galaxy-s21.png",
            valorDe: "De: R$ 5.299,00",
            valorPor: "Por: R$ 3.999,00",
            prestacao: "Em até 10x de R$ 399,90"
        },
        {
            titulo: "Iphone 12 pro max",
            imagem: "imagens/iphone 12 pro max.png",
            valorDe: "De: R$ 9.799,00",
            valorPor: "Por: R$ 7.999,00",
            prestacao: "Em até 10x de R$ 799,90"
        },
        {
            titulo: "Galaxy z fold 2",
            imagem: "imagens/Zfold2.png",
            valorDe: "De: R$ 9.599,00",
            valorPor: "Por: R$ 8.199,00",
            prestacao: "Em até 10x de R$ 819,90"
        },
        {
            titulo: "Motorola edge 20",
            imagem: "imagens/motorola-edge-20.png",
            valorDe: "De: R$ 3.899,90",
            valorPor: "Por: R$ 2.999,00",
            prestacao: "Em até 10x de R$ 299,90"
        }
        
    ]

    let template = "";

    for (let index = 0; index < listaCelulares.length; index++) {
        const celulares = listaCelulares[index];

        template += `<div class="card">
            <h3>${celulares.titulo}</h3>
            <div class="icon">
                <img src="${celulares.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${celulares.valorDe}</h5>
            <h4>${celulares.valorPor}</h4>
            <h6>${celulares.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}








// ----- RENDERIZAÇÃO DA PAGINA COMPUTADORES ----- 

function renderizarComputadores() {
    let espaco = document.getElementById("espaco-computadores");

    let listaComputadores = [
        {
            titulo: "notebook asus",
            imagem: "imagens/laptop-asus.png",
            valorDe: "De: R$ 3.199,00",
            valorPor: "Por: R$ 1.999,00",
            prestacao: "Em até 10x de R$ 199,90"
        },
        {
            titulo: "notebook lenovo",
            imagem: "imagens/notebook lenovo.png",
            valorDe: "De: R$ 2.999,00",
            valorPor: "Por: R$ 1.899,00",
            prestacao: "Em até 10x de R$ 189,90"
        },
        {
            titulo: "notebook acer",
            imagem: "imagens/notebook acer.png",
            valorDe: "De: R$ 3.599,00",
            valorPor: "Por: R$ 2.499,00",
            prestacao: "Em até 10x de R$ 249,90"
        },
        {
            titulo: "macbook",
            imagem: "imagens/macbook pro.png",
            valorDe: "De: R$ 15.299,00",
            valorPor: "Por: R$ 12.899,00",
            prestacao: "Em até 10x de R$ 1.289,90"
        }
    ]

    let template = "";

    for (let index = 0; index < listaComputadores.length; index++) {
        const computadores = listaComputadores[index];

        template += `<div class="card">
            <h3>${computadores.titulo}</h3>
            <div class="icon">
                <img src="${computadores.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${computadores.valorDe}</h5>
            <h4>${computadores.valorPor}</h4>
            <h6>${computadores.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}









// ----- RENDERIZAÇÃO DA PAGINA CONSOLES ----- 

function renderizarConsoles() {
    let espaco = document.getElementById("espaco-consoles");

    let listaConsoles = [
        {
            titulo: "Playstation 4",
            imagem: "imagens/playstation4.png",
            valorDe: "De: R$ 3.599,00",
            valorPor: "Por: R$ 2.699,00",
            prestacao: "Em até 10x de R$ 269,90"
        },
        {
            titulo: "X box one s",
            imagem: "imagens/xbox one s.png",
            valorDe: "De: R$ 3.199,00",
            valorPor: "Por: R$ 2.599,00",
            prestacao: "Em até 10x de R$ 259,90"
        },
        {
            titulo: "Playstation 5",
            imagem: "imagens/playstation_5.png",
            valorDe: "De: R$ 7.299,00",
            valorPor: "Por: R$ 6,099,00",
            prestacao: "Em até 10x de R$ 609,90"
        },
        {
            titulo: "Nintendo Switch",
            imagem: "imagens/nintendo-switch.png",
            valorDe: "De: R$ 2.399,00",
            valorPor: "Por: R$ 1.799,00",
            prestacao: "Em até 10x de R$ 179,90"
        }
    ]

    let template = "";

    for (let index = 0; index < listaConsoles.length; index++) {
        const consoles = listaConsoles[index];

        template += `<div class="card">
            <h3>${consoles.titulo}</h3>
            <div class="icon">
                <img src="${consoles.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${consoles.valorDe}</h5>
            <h4>${consoles.valorPor}</h4>
            <h6>${consoles.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}









// ----- RENDERIZAÇÃO DA PAGINA MELHORES JOGOS ----- 

function renderizarMelhoresJogos() {
    let espaco = document.getElementById("espaco-melhoresjogos");

    let listaMelhoresJogos = [
        {
            titulo: "Fifa 21",
            imagem: "imagens/jogos/f1 2021 xbox.png",
            valorDe: "De: R$ 199,00",
            valorPor: "Por: R$ 149,00",
            prestacao: "Em até 10x de R$ 14,90"
        },
        {
            titulo: "Fifa 22",
            imagem: "imagens/jogos/fifa2022.png",
            valorDe: "De: R$ 299,00",
            valorPor: "Por: R$ 209,00",
            prestacao: "Em até 10x de R$ 20,90"
        },
        {
            titulo: "Immortals fenyx rising",
            imagem: "imagens/jogos/immortal_fenyx.png",
            valorDe: "De: R$ 149,00",
            valorPor: "Por: R$ 99,00",
            prestacao: "Em até 10x de R$ 9,90"
        },
        {
            titulo: "Mortal kombat",
            imagem: "imagens/jogos/mortal_kombat.png",
            valorDe: "De: R$ 249,00",
            valorPor: "Por: R$ 129,00",
            prestacao: "Em até 10x de R$ 12,90"
        },
        
    ]

    let template = "";

    for (let index = 0; index < listaMelhoresJogos.length; index++) {
        const melhoresjogos = listaMelhoresJogos[index];

        template += `<div class="card">
            <h3>${melhoresjogos.titulo}</h3>
            <div class="icon">
                <img src="${melhoresjogos.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${melhoresjogos.valorDe}</h5>
            <h4>${melhoresjogos.valorPor}</h4>
            <h6>${melhoresjogos.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}









// ----- RENDERIZAÇÃO DA PAGINA OCULOS VR ----- 

function renderizarOculosvr() {
    let espaco = document.getElementById("espaco-oculosvr");

    let listaOculosvr = [
        {
            titulo: "Óculos vr shinecon",
            imagem: "imagens/oculos-vr1.png",
            valorDe: "De: R$ 499,00",
            valorPor: "Por: R$ 299,00",
            prestacao: "Em até 10x de R$ 29,90"
        },
        {
            titulo: "Óculos vr merge 360",
            imagem: "imagens/oculos-vr2.png",
            valorDe: "De: R$ 299,00",
            valorPor: "Por: R$ 249,00",
            prestacao: "Em até 10x de R$ 24,90"
        },
        {
            titulo: "Óculos vr shinecon",
            imagem: "imagens/oculos-vr3.png",
            valorDe: "De: R$ 699,00",
            valorPor: "Por: R$ 499,00",
            prestacao: "Em até 10x de R$ 49,90"
        },
        {
            titulo: "Óculos vr celexon",
            imagem: "imagens/oculos-vr4.png",
            valorDe: "De: R$ 599,00",
            valorPor: "Por: R$ 399,00",
            prestacao: "Em até 10x de R$ 39,90"
        },
        
    ]

    let template = "";

    for (let index = 0; index < listaOculosvr.length; index++) {
        const oculosvr = listaOculosvr[index];

        template += `<div class="card">
            <h3>${oculosvr.titulo}</h3>
            <div class="icon">
                <img src="${oculosvr.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${oculosvr.valorDe}</h5>
            <h4>${oculosvr.valorPor}</h4>
            <h6>${oculosvr.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}










// ----- RENDERIZAÇÃO DA PAGINA PC GAMERS ----- 

function renderizarPcgamers() {
    let espaco = document.getElementById("espaco-pcgamers");

    let listaPcgamers = [
        {
            titulo: "Pc gamers asus",
            imagem: "imagens/pcgamer asus.png",
            valorDe: "De: R$ 3.299,00",
            valorPor: "Por: R$ 2.699,00",
            prestacao: "Em até 10x de R$ 269,90"
        },
        {
            titulo: "Notebook acer nitro 5",
            imagem: "imagens/notebook gamer acer nitro 5.png",
            valorDe: "De: R$ 5.999,00",
            valorPor: "Por: R$ 5.099,00",
            prestacao: "Em até 10x de R$ 509,90"
        },
        {
            titulo: "Lenovo gaming 3i",
            imagem: "imagens/notebook lenovo ideapad gaming 3i.png",
            valorDe: "De: R$ 5.399,00",
            valorPor: "Por: R$ 4.899,00",
            prestacao: "Em até 10x de R$ 489,90"
        },
        {
            titulo: "Pc gamer amd fx-6100",
            imagem: "imagens/pc gamer amd fx-6100.png",
            valorDe: "De: R$ 3.999,00",
            valorPor: "Por: R$ 2.899,00",
            prestacao: "Em até 10x de R$ 289,90"
        },
        
    ]

    let template = "";

    for (let index = 0; index < listaPcgamers.length; index++) {
        const pcgamers = listaPcgamers[index];

        template += `<div class="card">
            <h3>${pcgamers.titulo}</h3>
            <div class="icon">
                <img src="${pcgamers.imagem}" alt="controle sem fio xbox">
            </div>
            <h5>${pcgamers.valorDe}</h5>
            <h4>${pcgamers.valorPor}</h4>
            <h6>${pcgamers.prestacao}</h6>
            <button>Comprar</button> 
        </div>`
    }
    espaco.innerHTML = template;
}




