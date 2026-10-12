const laranja = getComputedStyle(document.documentElement).getPropertyValue('--laranja').trim();

function velocidadeVideo() {
    const duracao = document.getElementById("tempo-inicio").value;
    const velocidade = Number(document.getElementById("velocidade").value);

    if (duracao == "00:00") {
        alert("Digite uma duração válida!");
    };

    const [h, m] = duracao.split(":").map(Number);
    const totalMinutos = h * 60 + m;

    const tempoTotal = totalMinutos / velocidade;

    const minutosTotais = Math.round(totalMinutos / velocidade);

    const horas = Math.floor(minutosTotais / 60);
    const minutos = minutosTotais % 60;

    let div = document.getElementsByClassName("resposta")[0];
    div.style.backgroundColor = laranja;

    if ((horas > 0) && (minutos > 0)) {
        document.getElementById("curiosidades1").innerHTML = `A nova duração será de ${horas}hs e ${minutos} min.`;
    } else if (horas == 0) {
        document.getElementById("curiosidades1").innerHTML = `A nova duração será de ${minutos} min.`;
    } else if (minutos == 0) {
        document.getElementById("curiosidades1").innerHTML = `A nova duração será de ${horas}hs`;
    };
};

function alturaMedia() {
    const mae = Number(document.getElementById("altura-mae").value);
    const pai = Number(document.getElementById("altura-pai").value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    let altura = 0.0;

    if (genero === "masculino") {
        altura = (mae + pai + 13) / 2;
    } else if (genero === "feminino") {
        altura = (mae + pai - 13) / 2;
    };

    const altura_max = altura + 8.5;
    const altura_min = altura - 8.5;

    let div = document.getElementsByClassName("resposta")[1];
    div.style.backgroundColor = laranja;

    document.getElementById("curiosidades2").innerHTML = `Sua altura estimada é ${altura}cm.`;
    document.getElementById("curiosidades2-2").innerHTML = `A margem de variação fica entre ${altura_min}cm e ${altura_max}cm.`;  
};
 