const verde = getComputedStyle(document.documentElement).getPropertyValue('--verde').trim();

function calcularJurosSimples() {
    const capital = Number(document.getElementById("j-simples").value);
    const taxa = Number(document.getElementById("taxa").value) / 100;
    const tempo = Number(document.getElementById("tempo").value);

    let jurosTotal = 0;
    let montante = capital;
    let tabela = `
        <table class="tabela-juros">
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Capital</th>
                    <th>Juros</th>
                    <th>Montante</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let mes = 1; mes <= tempo; mes++) {
        const jurosMes = capital * taxa;
        jurosTotal += jurosMes;
        montante = capital + jurosTotal;

        tabela += `
            <tr>
                <td>${mes}</td>
                <td>R$${capital.toFixed(2)}</td>
                <td>R$${jurosMes.toFixed(2)}</td>
                <td>R$${montante.toFixed(2)}</td>
            </tr>
        `;
    }

    tabela += `
            </tbody>
        </table>
    `;

    let div = document.getElementsByClassName("resposta")[0];
    div.style.backgroundColor = verde;
    document.getElementById("financas1").innerHTML = `O juros simples será de R$${jurosTotal.toFixed(2)} e o Montante será de R$${montante.toFixed(2)}.`;
    document.getElementById("financas1-2").innerHTML = tabela;
};

function calcularJurosCompostos() {
    const capitalInicial = Number(document.getElementById("j-compostos").value);
    const taxa = Number(document.getElementById("taxa2").value) / 100;
    const tempo = Number(document.getElementById("tempo2").value);

    let montante = capitalInicial;
    let jurosTotal = 0;
    let tabela = `
        <table class="tabela-juros">
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Capital</th>
                    <th>Juros</th>
                    <th>Montante</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let mes = 1; mes <= tempo; mes++) {
        const jurosMes = montante * taxa;
        montante += jurosMes;
        jurosTotal += jurosMes;

        tabela += `
            <tr>
                <td>${mes}</td>
                <td>R$${capitalInicial.toFixed(2)}</td>
                <td>R$${jurosMes.toFixed(2)}</td>
                <td>R$${montante.toFixed(2)}</td>
            </tr>
        `;
    }

    tabela += `
            </tbody>
        </table>
    `;

    let div = document.getElementsByClassName("resposta")[1];
    div.style.backgroundColor = verde;
    document.getElementById("financas2").innerHTML = `O juros composto será de R$${jurosTotal.toFixed(2)} e o Montante será de R$${montante.toFixed(2)}.`;
    document.getElementById("financas2-2").innerHTML = tabela;
};

function calcularPercentual() {
    const valor_inicial = Number(document.getElementById("valor-inicial").value);
    const valor_final = Number(document.getElementById("valor-final").value);
    let percentual = 0;

    let div = document.getElementsByClassName("resposta")[2];
    div.style.backgroundColor = verde;

    if (valor_inicial > valor_final) {
        percentual = (valor_inicial - valor_final) / valor_inicial * 100
        document.getElementById("financas3").innerHTML = `O desconto foi de ${percentual.toFixed(2)}%.`
    } else if (valor_inicial < valor_final) {
        percentual = (valor_final - valor_inicial) / valor_inicial * 100
        document.getElementById("financas3").innerHTML = `O aumento foi de ${percentual.toFixed(2)}%.`
    } else {
        document.getElementById("financas3").innerHTML = `O valor continua igual, sem aumento nem desconto.`
    };
};

function calcularJurosDepositos() {
    const capitalInicial = Number(document.getElementById("j-compostos2").value);
    const taxa = Number(document.getElementById("taxa3").value) / 100;
    const tempo = Number(document.getElementById("tempo3").value);
    const valorMensal = Number(document.getElementById("deposito").value);
    const depositoSelecionado = document.querySelector('input[name="deposito_mes"]:checked');
    const momento = depositoSelecionado ? depositoSelecionado.value : "deposito_fim";

    let saldo = capitalInicial;
    let totalContribuicoes = 0;
    let jurosTotal = 0;
    let tabela = `
        <table class="tabela-juros">
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Capital</th>
                    <th>Depósito/Saque</th>
                    <th>Juros</th>
                    <th>Montante</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let mes = 1; mes <= tempo; mes++) {
        const capitalAntes = saldo;

        if (momento === "deposito_inicio") {
            saldo += valorMensal;
            totalContribuicoes += valorMensal;
        }

        const jurosMes = saldo * taxa;
        saldo += jurosMes;
        jurosTotal += jurosMes;

        if (momento === "deposito_fim") {
            saldo += valorMensal;
            totalContribuicoes += valorMensal;
        }

        tabela += `
            <tr>
                <td>${mes}</td>
                <td>R$${capitalAntes.toFixed(2)}</td>
                <td>R$${valorMensal.toFixed(2)}</td>
                <td>R$${jurosMes.toFixed(2)}</td>
                <td>R$${saldo.toFixed(2)}</td>
            </tr>
        `;
    }

    tabela += `
            </tbody>
        </table>
    `;

    const montante = saldo;
    const jurosEfetivos = montante - capitalInicial - totalContribuicoes;

    let div = document.getElementsByClassName("resposta")[3];
    div.style.backgroundColor = verde;
    document.getElementById("financas4").innerHTML = `O juros composto será de R$${jurosEfetivos.toFixed(2)} e o Montante será de R$${montante.toFixed(2)}.`;
    document.getElementById("financas4-2").innerHTML = tabela;
};