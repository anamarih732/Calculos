const vermelho = getComputedStyle(document.documentElement).getPropertyValue('--vermelho').trim();

function calcularIMC() {
    const altura = Number(document.getElementById("altura").value) / 100;
    const peso = Number(document.getElementById("peso").value);

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Baixo Peso/Magreza.`
    } else if ((imc >= 18.5) && (imc <= 24.9)) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Peso normal/Adequado.`
    } else if ((imc >= 25.00) && (imc <= 29.9)) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Sobrepeso/Grau I.`
    } else if ((imc >= 30.00) && (imc <= 34.9)) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Obesidade Grau I.`
    } else if ((imc >= 35.0) && (imc <= 39.9)) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Obesidade Grau II.`
    } else if ((imc >= 40)) {
        document.getElementById("saude1").innerHTML = `Seu IMC é ${imc.toFixed(1)}. Você está com Obesidade Grave/Grau III.`
    };

    const peso_min = 18.5 * (altura * altura);
    const peso_max = 24.9 * (altura * altura);

    let div = document.getElementsByClassName("resposta")[0];
    div.style.backgroundColor = vermelho;

    document.getElementById("saude1-1").innerHTML = `Sua faixa de peso ideal está entre ${peso_min.toFixed(1)}kg e ${peso_max.toFixed(1)}kg.`
};

function calcularRCQ() {
    const cintura = Number(document.getElementById("cintura").value);
    const quadril = Number(document.getElementById("quadril").value);
    const genero = document.querySelector('input[name="genero"]:checked').value;

    const rcq = cintura / quadril;

    let div = document.getElementsByClassName("resposta")[1];
    div.style.backgroundColor = vermelho;

    if (genero === "masculino") {
        if (rcq < 0.90) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Baixo/Ideal.`;
        } else if (rcq <= 0.95) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Moderado.`;
        } else if (rcq > 0.95) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Alto/Aumentado.`;
        };
    } else if (genero === "feminino") {
        if (rcq < 0.80) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Baixo/Ideal.`;
        } else if ((rcq === 0.80) && (rcq <= 0.85)) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Moderado.`;
        } else if (rcq > 0.85) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Alto/Aumentado.`;
        };
    };
};