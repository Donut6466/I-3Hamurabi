function calcularIMC() {

    var peso = document.getElementById("peso").value
    
    var altura = document.getElementById("altura").value

    var resultado = document.getElementById("resultado")

    if (peso === "" || altura === "") {
        return alert("Alguma informação ficou incompleta.\n\nPor favor, digite novamente.")
    }

    var imc = peso / (altura * altura)

    var classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do Peso"
        resultado.style.backgroundColor = "#9C27B0"

    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso Normal"
        resultado.style.backgroundColor = "#4CAF50"

    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso"
        resultado.style.backgroundColor = "#FFC107"

    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I"
        resultado.style.backgroundColor = "#FF9800"

    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II"
        resultado.style.backgroundColor = "#FF5722"

    } else {
        classificacao = "Obesidade Grau III (Obesidade Mórbida)"
        resultado.style.backgroundColor = "#795548"
    }

    resultado.innerText = "Seu IMC é " + imc.toFixed(2) + ". Classificação: " + classificacao
}

//não copie, direitos autorais de sales. sujeito à porrada.