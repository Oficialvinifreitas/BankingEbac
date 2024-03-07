const form = document.getElementById('formulario')

function validaNumero(valorNumeroA, valorNumeroB) {
    let comparacao = valorNumeroB > valorNumeroA ;
    return comparacao;
    }

form.addEventListener('submit',function(e){
   e.preventDefault(); 

const valorNumeroA = document.getElementById('number1')
const valorNumeroB = document.getElementById('number2')
if (validaNumero(valorNumeroA.value ,valorNumeroB.value) ) { 
    alert("Ok, dados enviados com sucesso!");
    valorNumeroA.value="";
    valorNumeroB.value="";
} else {
    alert("O segundo numero é menor que o primeiro!")
}

})