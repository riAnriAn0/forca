let listaDePalavras = ['','GATO','CANETA','BOLA','COMPUTADOR','JORNAL','CARRO','CHAVE','CACHORRO','CELULAR'];


function verPalavra(){
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
        cont = 1;
    } else {
        cont++;
    }

        receberLetra.focus()
});

let receberLetra  = document.getElementById('receberLetra')
let enviarNovaletra = document.getElementById('enviarNovaletra')
let checks = document.querySelectorAll('#check')
let cont2 = 0

enviarNovaletra.addEventListener('click',()=>{
    
    let arrayLetras = Array.from(novaPalavra.value)
    let letra = receberLetra.value.toUpperCase();
    
    if( receberLetra.value == '' ){
        console.log('DIGETE UMA LETRA')
    } else{
        arrayLetras.forEach((element,indice) => {       
            
            if (element === letra) {
                qualquerCoisa = 1
            } else if (element !== letra) {
                qualquerCoisa = 2
            }

           
            switch (qualquerCoisa){
                case 1:
                    inputs[indice].value = letra;
                    break;
                case 2:
                    checks[cont2].classList.add('marcado');
                    break;
            };  
            
            
        });
        if (cont == 6) {
            cont = 0;
        } else {
            cont++;
        }
        receberLetra.value = ''
        receberLetra.focus()
    }  
})



