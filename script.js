// LISTA DE PALAVRAS //

let listaDePalavras = ['MERCADO','GATO','CANETA','BOLA','COMPUTADOR','JORNAL','CARRO','CHAVE','CACHORRO','CELULAR'];


//  SALVA A PALAVRA  E DETERMINA O NUMERO DE LETRAS // 

let mudar = document.getElementById('salvar');
let novaPalavra = document.querySelector('#novaPalavra');
let textBox = document.getElementById('textBox');
let numeroDeLetras =document.querySelector("#numeroDeLetras")
let inputs = document.querySelectorAll('.espacoLetra')
let cont = 0

function selecionar(){
    receberLetra.focus()
    mudar.classList.add('sumir')    
}
mudar.addEventListener('click',()=>{
    
    ver.classList.remove('sumir')
    novaPalavra.value = listaDePalavras[cont];    
    numeroDeLetras.textContent = novaPalavra.value.length;
    
    if (cont == 9) {
        cont = 0;
    } else {
        cont++;
    };
});

//  TORNAR A PALAVRA VISÍVEL

let ver = document.querySelector('#ver')
ver.classList.add('sumir')

function verPalavra(){
    receberLetra.focus()
    if(novaPalavra.type == 'text'){
        novaPalavra.setAttribute('type','password');
    } else if(novaPalavra.type == 'password') {
        novaPalavra.setAttribute('type','text');
    };
};

// SISTEMA DE JOGO IDENTIFICA A LETRA // 

let receberLetra  = document.getElementById('receberLetra');
let enviarNovaletra = document.getElementById('enviarNovaletra')
let checks = document.querySelectorAll('.check')
let cont2 = 0
let span = document.querySelector('#derrota')

// ATIVAT COM ENTER 'E' // 

document.addEventListener('keyup',(event)=>{
   if(event.key == 'Enter'){
    sistemaDeJogo()
   };
});

// SISTEMA DE JOGO //

function sistemaDeJogo(){

    let arrayLetras = Array.from(novaPalavra.value)
    let letra = receberLetra.value.toUpperCase();

    if( receberLetra.value == '' ){
        console.log('DIGETE UMA LETRA')
    } else{

        const indice = arrayLetras.indexOf(letra);

        if (indice !== -1) {
            inputs[indice].value = letra;
        } else if(cont2 < 6 ){
            checks[cont2].classList.add('marcado');
            cont2 += 1
        }

        if(cont2 >= 6){
            novaPalavra.setAttribute('type','text');
            span.classList.add('derrota')
            span.textContent = 'VC PERDEU DESEJA RECOMEÇAR'
            recomecar.classList.remove('sumir')
        }

        receberLetra.value = ''
        receberLetra.focus()
    };
};

// RECOMERÇAR JOGO // 

let recomecar = document.querySelector('#btnrecomcar')
recomecar.classList.add('sumir')

function recomecarjogo(){
    location.reload()
}
