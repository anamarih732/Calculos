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
        } else if (rcq <= 0.85) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Moderado.`;
        } else if (rcq > 0.85) {
            document.getElementById("saude2").innerHTML = `Sua Relação Cintura-Quadril é ${rcq.toFixed(2)}. O risco é Alto/Aumentado.`;
        };
    };
};

function calcularAgua() {
    const idade = Number(document.getElementById("idade-agua").value);
    const peso = Number(document.getElementById("peso-agua").value);
    let ml = 0;

    if (idade <= 17) {   /* Jovens */
        ml = 40;
    } else if ((idade >= 18) && (idade <= 55)) {     /* Adultos */
        ml = 35;
    } else if ((idade >= 56) && (idade <= 65)) {
        ml = 30;
    } else if ((idade >= 66)) {    /* Idosos  */
        ml = 25;
    };
    
    const litros = (ml * peso) / 1000;

    let div = document.getElementsByClassName("resposta")[2];
    div.style.backgroundColor = vermelho;
    document.getElementById("saude3").innerHTML = `Pelo seu peso e idade, você deve beber, em média, ${litros.toLocaleString("pt-BR", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
})} litros de água por dia.`
};

function calcularSono() {
    const idade = Number(document.getElementById("idade-sono").value);
    const dorme = document.getElementById("dorme").value;
    const acorda = document.getElementById("acorda").value;

    const [horaDormiu, minDormiu] = dorme.split(":").map(Number);
    const [horaAcordou, minAcordou] = acorda.split(":").map(Number);

    const minutosDormiu = horaDormiu * 60 + minDormiu;
    const minutosAcordou = horaAcordou * 60 + minAcordou;

    let totalMinutos = minutosAcordou - minutosDormiu;

    /* Se passou da meia-noite */
    if (totalMinutos < 0) {
        totalMinutos += 24 * 60;
    };

    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    let div = document.getElementsByClassName("resposta")[3];
    div.style.backgroundColor = vermelho;
    if (minutos === 0) {
        document.getElementById("saude4").textContent = `Você dorme ${horas} horas.`
    } else {
    document.getElementById("saude4").textContent = `Você dorme ${horas} horas e ${minutos} minutos.`;
    };

    if (idade === 0) {
        document.getElementById("saude4-1").textContent = `Entre 0 e 3 meses de idade, deve-se dormir de 14 a 17 horas e de 4 a 11 meses, de 12 a 16 horas, em média.`
    } else if ((idade === 1) || (idade === 2)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 11 a 14 horas.`
    } else if ((idade >= 3) && (idade <= 5)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 10 a 13 horas.`
    } else if ((idade >= 6) && (idade <= 12)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 9 a 12 horas.`
    } else if ((idade >= 13) && (idade <= 17)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 8 a 10 horas.`
    } else if ((idade >= 18) && (idade <= 60)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir 7 horas ou mais.`
    } else if ((idade >= 61) && (idade <= 64)) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 7 a 9 horas.`
    } else if (idade >= 65) {
        document.getElementById("saude4-1").textContent = `Nesta faixa etária, deve-se dormir de 7 a 8 horas.`
    };
};


function calcularHoraDormir() {
    const horasSono = Number(document.getElementById("horas-sono").value);
    const horaAcordar = document.getElementById("acordar-sono").value;

    const [horas, minutos] = horaAcordar.split(":").map(Number);

    const minutosAcordar = horas * 60 + minutos;
    const minutosSono = Math.round(horasSono * 60);

    const minutosDormir = (minutosAcordar - minutosSono + 1440) % 1440;

    const horaDormir = String(Math.floor(minutosDormir / 60)).padStart(2, "0");

    const minutoDormir = String(minutosDormir % 60).padStart(2, "0");

    let div = document.getElementsByClassName("resposta")[4];
    div.style.backgroundColor = vermelho;

    document.getElementById("saude5").innerHTML = `Para dormir ${horasSono.toLocaleString("pt-BR")} horas, você deve dormir às ${horaDormir}:${minutoDormir}hs.`;
};
