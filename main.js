// MENU HAMBURGUER
var menu = document.querySelector('#menu')
var secoes = document.querySelector('#secoes')

menu.addEventListener('click', abrirFechar)

function abrirFechar(){
    if(secoes.style.display == 'flex'){
        secoes.style.display = 'none'
    } else {
        secoes.style.display = 'flex'
    }
    console.log(window.innerWidth)
    if(window.innerWidth > 800 && window.innerWidth < 980){
        console.log('Maior que 800.')
    } else if(window.innerWidth > 400 && window.innerWidth < 800) {
        console.log('Maior que 400.')
    }
}
// FIM MENU HAMBURGUER

// NAV SECOES
function ligarSecoes(){
    if(secoes.style.display == 'none' && window.innerWidth > 980) {
        secoes.style.display = 'flex'
        console.log(window.innerWidth + ' Ligou as seções!')
    }
}
// FIM NAV SECOES

// CARROSSEL
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
// FIM CARROSSEL

// MENU OPÇÕES
const opcao1 = document.querySelector('.op1')
const opcao2 = document.querySelector('.op2')
const opcao3 = document.querySelector('.op3')

const btnOpcao1 = document.querySelector('#btnOpcao1')
const btnOpcao2 = document.querySelector('#btnOpcao2')
const btnOpcao3 = document.querySelector('#btnOpcao3')

function desligar() {
    opcao1.classList.add('desligado')
    opcao2.classList.add('desligado')
    opcao3.classList.add('desligado')
}

function telaOpcao1() {
    desligar()
    opcao1.classList.remove('desligado')
}
function telaOpcao2() {
    desligar()
    opcao2.classList.remove('desligado')
}
function telaOpcao3() {
    desligar()
    opcao3.classList.remove('desligado')
}
// FIM MENU OPÇÕES