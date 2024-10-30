const key = "89f88b4bc1a5981ed54095373a36f58a";

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao-tempo").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    const imgPrevisao = document.querySelector(".img-previsao");
    imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    imgPrevisao.style.display = "block";
    imgPrevisao.classList.add("mostrar");
}

async function buscarCidade(cidade) {
    const cidadeCodificada = encodeURIComponent(cidade); // Codifica a cidade

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeCodificada}&appid=${key}&lang=pt_br&units=metric`;

    const dados = await fetch(url).then(resposta => resposta.json());

    if (dados.cod === "404") {
        alert("Cidade não encontrada!");
    } else {
        colocarDadosNaTela(dados);
    }
}

function botaoClicado() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
