function calcularMedia() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    if (nota1 > 10 || nota2 > 10 || isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("resultado").innerHTML = "Erro: As notas devem ser números entre 0 e 10.";
        return;
    }

    var media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    document.getElementById("resultado").innerHTML = "Média das notas: " + media.toFixed(2);

    document.getElementById("notas").innerHTML = "Notas <br>"+ nota1 + "<br>" + nota2;
}