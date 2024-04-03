function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var idade = parseInt(document.getElementById('idade').value);
    var sexo = document.getElementById('sexo').value;

    var imc;
    if (sexo === 'feminino') {
        imc = peso / Math.pow(altura, 2);
    } else {
        imc = peso / Math.pow(altura, 2);
    }

    var resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';

    if (isNaN(imc)) {
        resultadoElemento.innerHTML = 'Por favor, preencha os valores corretamente.';
        return;
    }

    var interpretacao;
    if (imc < 18.5) {
        interpretacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        interpretacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        interpretacao = 'Sobrepeso';
    } else {
        interpretacao = 'Obesidade';
    }

    resultadoElemento.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + ' kg/m² - ' + interpretacao;
}
