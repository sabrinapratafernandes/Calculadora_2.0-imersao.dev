function calcularNota() {
    var notaPrimeiroBimestre = document.getElementById("valorUm").value
    notaPrimeiroBimestre = parseFloat(notaPrimeiroBimestre)

    var notaSegundoBimestre = document.getElementById("valorDois").value
    notaSegundoBimestre = parseFloat(notaSegundoBimestre)

    var notaTerceiroBimestre = document.getElementById("valorTres").value
    notaTerceiroBimestre = parseFloat(notaTerceiroBimestre)

    var notaQuartoBimestre = document.getElementById("valorQuatro").value
    notaQuartoBimestre = parseFloat(notaQuartoBimestre)

    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

    console.log(notaFinal)

    var notaFixada = notaFinal.toFixed(2)

    var aprovado = notaFixada > 5
    var notaDiv = document.querySelector("#nota")
    var resultadoDiv = document.querySelector("#resultado")



    if (aprovado) {
        console.log("Aprovado(a)");
        resultadoDiv.innerHTML = "Parabéns, você foi aprovado(a)."
    }

    else {
        console.log("reprovados")
        resultadoDiv.innerHTML = "Você foi reprovado(a)."
    }


}