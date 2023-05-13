// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um número, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

let chave = "cebcd482eda57fa9a6714c1c2ba91885"


function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura normal: "+ Math.floor(dados.main.temp) + "°C"
    document.querySelector(".temp-maxima").innerHTML = "Temperatura máxima: "+ Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: "+dados.main.humidity+"%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}