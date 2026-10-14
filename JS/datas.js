const lilas = getComputedStyle(document.documentElement).getPropertyValue('--lilas').trim();

const hoje = new Date();

function calcularTempoEmAnosMesesDias(dataInicial, dataFinal) {
    const inicio = new Date(Date.UTC(
        dataInicial.getUTCFullYear(),
        dataInicial.getUTCMonth(),
        dataInicial.getUTCDate()
    ));

    const fim = new Date(Date.UTC(
        dataFinal.getUTCFullYear(),
        dataFinal.getUTCMonth(),
        dataFinal.getUTCDate()
    ));

    const dataMenor = inicio <= fim ? inicio : fim;
    const dataMaior = inicio <= fim ? fim : inicio;

    let anos = dataMaior.getUTCFullYear() - dataMenor.getUTCFullYear();
    let meses = dataMaior.getUTCMonth() - dataMenor.getUTCMonth();
    let dias = dataMaior.getUTCDate() - dataMenor.getUTCDate();

    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(Date.UTC(
            dataMaior.getUTCFullYear(),
            dataMaior.getUTCMonth(),
            0
        )).getUTCDate();

        dias += ultimoDiaMesAnterior;
        meses -= 1;
    }

    if (meses < 0) {
        meses += 12;
        anos -= 1;
    }

    return {
        anos: Math.abs(anos),
        meses: Math.abs(meses),
        dias: Math.abs(dias)
    };
};

function calcularFalta() {
    const dataInformada = document.getElementById("data-falta").value;

    const [ano, mes, dia] = dataInformada.split("-").map(Number);

    const dataInicial = new Date(Date.UTC(hoje.getUTCFullYear(), hoje.getUTCMonth(), hoje.getUTCDate()));
    const dataFinal = new Date(Date.UTC(ano, mes - 1, dia));

    const diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
    const diferencaDias = diferencaTempo / (24 * 60 * 60 * 1000);

    if (diferencaDias < 0) {
        alert("A data informada já passou. Digite uma data futura.");
        return;
    }

    const { anos, meses, dias } = calcularTempoEmAnosMesesDias(dataInicial, dataFinal);

    const div = document.getElementsByClassName("resposta")[0];
    div.style.backgroundColor = lilas;

    document.getElementById("data1").textContent = `Faltam ${diferencaDias} ${diferencaDias === 1 ? "dia" : "dias"} para a data esperada!`;
    document.getElementById("data1-2").textContent = `Ou exatamente ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s).`;
};

function calcularFaz() {
    const dataInformada = document.getElementById("data-tempofaz").value;

    const [ano, mes, dia] = dataInformada.split("-").map(Number);

    const dataInicial = new Date(Date.UTC(ano, mes - 1, dia));
    const dataFinal = new Date(Date.UTC(hoje.getUTCFullYear(), hoje.getUTCMonth(), hoje.getUTCDate()));

    const diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
    const diferencaDias = diferencaTempo / (24 * 60 * 60 * 1000);

    if (diferencaDias < 0) {
        alert("A data informada está no futuro. Digite uma data passada.");
        return;
    }

    const { anos, meses, dias } = calcularTempoEmAnosMesesDias(dataInicial, dataFinal);

    const div = document.getElementsByClassName("resposta")[1];
    div.style.backgroundColor = lilas;

    document.getElementById("data2").textContent = `Já faz ${diferencaDias} ${diferencaDias === 1 ? "dia" : "dias"} que aconteceu!`;
    document.getElementById("data2-2").textContent = `Ou exatamente ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s).`;
};

function calcularDiferenca() {
    const data1 = document.getElementById("data-diferenca1").value;
    const data2 = document.getElementById("data-diferenca2").value;

    const [ano1, mes1, dia1] = data1.split("-").map(Number);
    const [ano2, mes2, dia2] = data2.split("-").map(Number);

    const dataInicial = new Date(Date.UTC(ano1, mes1 - 1, dia1));
    const dataFinal = new Date(Date.UTC(ano2, mes2 - 1, dia2));

    const diferenca = Math.abs(dataFinal.getTime() - dataInicial.getTime());
    const diferencaDias = diferenca / (24 * 60 * 60 * 1000);

    const { anos, meses, dias } = calcularTempoEmAnosMesesDias(dataInicial, dataFinal);

    const div = document.getElementsByClassName("resposta")[2];
    div.style.backgroundColor = lilas;

    document.getElementById("data3").textContent = `A diferença é de ${diferencaDias} ${diferencaDias === 1 ? "dia" : "dias"}!`;
    document.getElementById("data3-2").textContent = `Ou exatamente ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s).`;
};

function calcularDias() {
    const data = document.getElementById("data-base").value;
    const dias = Number(document.getElementById("dias").value);

    const [ano, mes, dia] = data.split("-").map(Number);

    const nova_data = new Date(Date.UTC(ano, mes - 1, dia + dias));

    const div = document.getElementsByClassName("resposta")[3];
    div.style.backgroundColor = lilas;

    document.getElementById("data4").textContent = `A data resultante é ${nova_data.toLocaleDateString("pt-BR", {timeZone: "UTC"})}`;
};

function calcularDiaSemana() {
    const data = document.getElementById("data-dia").value;

    const [ano, mes, dia] = data.split("-").map(Number);

    const nova_data = new Date(Date.UTC(ano, mes - 1, dia));

    const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"];

    const semana = diasSemana[nova_data.getUTCDay()];

    const dataHoje = [hoje.getFullYear(), String(hoje.getMonth() + 1).padStart(2, "0"), String(hoje.getDate()).padStart(2, "0")].join("-");

    const div = document.getElementsByClassName("resposta")[4];
    div.style.backgroundColor = lilas;

    if (data < dataHoje) {
        document.getElementById("data5").textContent = `Nesta data foi ${semana}!`;
    } else if (data > dataHoje) {
        document.getElementById("data5").textContent = `Nesta data será ${semana}!`;
    } else {
        document.getElementById("data5").textContent = `Nesta data é ${semana}!`;
    };
};