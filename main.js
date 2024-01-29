const mensagemPositiva = "Tudo certo!"
const mensagemNegativa = "ERRO, O valor do campo B precisa ser maior do que o campo A"

const form = document.getElementById('formulario');

function calculaCampo(campA, campB){
    const valorA = parseInt(campA);
    const valorB = parseInt(campB);

    if(valorA>=valorB){
        return false;
    }
    else{
        return true;
    }
}

form.addEventListener('submit', function(e){
    let formEValido = false;

    e.preventDefault();

    const cA = document.getElementById('campoA');
    const cB = document.getElementById('campoB');
    formEValido = calculaCampo(cA.value, cB.value);

    if (formEValido){
        alert(mensagemPositiva);

        cA.value = '';
        cB.value = '';
    }
    else{
        alert(mensagemNegativa);
    }
})