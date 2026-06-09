function obterValores() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}

function somar() {
    let { num1, num2 } = obterValores();
    document.getElementById("resultado").textContent =
        "Resultado: " + (num1 + num2);
}

function subtrair() {
    let { num1, num2 } = obterValores();
    document.getElementById("resultado").textContent =
        "Resultado: " + (num1 - num2);
}

function multiplicar() {
    let { num1, num2 } = obterValores();
    document.getElementById("resultado").textContent =
        "Resultado: " + (num1 * num2);
}

function dividir() {
    let { num1, num2 } = obterValores();

    if (num2 === 0) {
        document.getElementById("resultado").textContent =
            "Não é possível dividir por zero!";
        return;
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + (num1 / num2);
}