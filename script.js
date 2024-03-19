let listaDePalavras = ['MERCADO','GATO','CANETA','BOLA','COMPUTADOR','JORNAL','CARRO','CHAVE','CACHORRO','CELULAR'];


function verPalavra(){
    receberLetra.focus()
    if(novaPalavra.type == 'text'){
        novaPalavra.setAttribute('type','password');
    } else if(novaPalavra.type == 'password') {
        novaPalavra.setAttribute('type','text');
    };
};



let salvar = document.getElementById('salvar');
let novaPalavra = document.querySelector('#novaPalavra');
let textBox = document.getElementById('textBox');
let numeroDeLetras =document.querySelector("#numeroDeLetras")
let inputs = document.querySelectorAll('.espacoLetra')
let cont = 0

salvar.addEventListener('click',()=>{

    novaPalavra.value = listaDePalavras[cont];    
    numeroDeLetras.textContent = novaPalavra.value.length;
    
    if (cont == 9) {
        cont = 0;
    } else {
        cont++;
    }
    
    receberLetra.focus()
});

let receberLetra  = document.getElementById('receberLetra')
let enviarNovaletra = document.getElementById('enviarNovaletra')
let checks = document.querySelectorAll('#check')
let cont2 = 0
let span = document.querySelector('#derrota')

document.addEventListener('keyup',(event)=>{
   if(event.key == 'Enter'){
    sistemaDeJogo()
   }
})

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
            span.textContent = 'VC PERDEU DESEJA RECOMEÇAR'
            receberLetra.readOnly = true;

        }
        receberLetra.value = ''
        receberLetra.focus()
    };
};

