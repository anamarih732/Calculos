const azul = getComputedStyle(document.documentElement).getPropertyValue('--azul').trim();

function AproveitamentoAluno() {
    const total = Number(document.getElementById("nota-total").value);
    const obtida = Number(document.getElementById("nota-obtida").value);
    const apr = ((obtida / total) * 100).toFixed(2);

    if (obtida > total) {
        alert("A nota obtida não pode ser maior que a nota total!");
        return;
    }
    if (total === 0) {
        alert("A nota total não pode ser 0!");
        return;
    }
    
    let div = document.getElementsByClassName("resposta")[0];
    div.style.backgroundColor = azul;
    document.getElementById("notas1").innerHTML = "Seu aproveitamento foi de " + apr + "%!";

    if (apr == 100){
        document.getElementById("notas1-1").innerHTML = "Uau! Você gabaritou, meus parabéns! Continue assim. =D";
    } else if (apr >= 80.00) {       
        document.getElementById("notas1-1").innerHTML = "Parabéns! Seu rendimento neste conteúdo foi muito bom. Continue assim! :D";
    } else if (apr > 60.00) {
        document.getElementById("notas1-1").innerHTML = "Foi um rendimento legal. Dá pra passar de ano. :)";
    } else if (apr == 50.00) {
        document.getElementById("notas1-1").innerHTML = "Você acertou metade."
    } else if (apr > 40.00) {
        document.getElementById("notas1-1").innerHTML = "Hmm... Mais ou menos. Você pode tentar melhorar. :|";
    } else if (apr > 20.00) {
        document.getElementById("notas1-1").innerHTML = "Então... Melhor estudar mais pra próxima. :(";
    } else if ((apr < 20.00) && (apr > 0)) {
        document.getElementById("notas1-1").innerHTML = "Você foi mal... Melhor se dedicar mais. :c";
    } else if (apr == 0) {
        document.getElementById("notas1-1").innerHTML = "Eita, você zerou... Mais sorte na próxima vez... ";
    }
};

function NotaEUA() {
    const total = Number(document.getElementById("nota-total2").value);
    const obtida = Number(document.getElementById("nota-obtida2").value);
    const apr = ((obtida / total) * 100).toFixed(2);

    if (obtida > total) {
        alert("A nota obtida não pode ser maior que a nota total!");
        return;
    }
    if (total === 0) {
        alert("A nota total não pode ser 0!");
        return;
    }

    let div = document.getElementsByClassName("resposta")[1];   
    div.style.backgroundColor = azul;
    document.getElementById("notas2").innerHTML = "Seu aproveitamento foi de " + apr + "%";
    let nota, frase;

    if (apr >= 97.00) {
        nota = "A+";
        frase = "Desempenho Excepcional.";
    } else if ((apr >= 93.00) && (apr <= 96.00)) {
        nota = "A";
        frase = "Excelente.";
    } else if ((apr >=90.00) && (apr <= 92.00)) {
        nota = "A-";
        frase = "Excelente (Acima da Média).";
    } else if ((apr >=87.00) && (apr <=89.00)) {
        nota = "B+";
        frase = "Muito bom.";
    } else if ((apr >=83.00) && (apr <=86.00)) {
        nota = "B";
        frase = "Bom (Acima da média).";
    } else if ((apr >=80.00) && (apr <=82.00)) {
        nota = "B-";
        frase = "Bom (Médio-Alto).";
    } else if ((apr >=77.00) && (apr <=79.00)) {
        nota = "C+";
        frase = "Satisfatório (Médio).";
    } else if ((apr >=73.00) && (apr <=76.00)) {
        nota = "C";
        frase = "Satisfatório.";
    } else if ((apr >=70.00) && (apr <=72.00)) {
        nota = "C-";
        frase = "Satisfatório (Mínimo).";
    } else if ((apr >=67.00) && (apr <=69.00)) {
        nota = "D+";
        frase = "Abaixo da Média.";
    } else if ((apr >=65.00) && (apr <=66.00)) {
        nota = "D";
        frase = "Passagem mínima (Fraco).";
    } else if ((apr >=60.00) && (apr <=64.00)) {
        nota = "D-";
        frase = "Passagem Limite.";
    } else if (apr < 60.00) {
        nota = "F";
        frase = "Reprovado.";
    }

    document.getElementById("notas2-1").innerHTML = "Isso é equivalente a uma nota " + nota + " / " + frase;
};