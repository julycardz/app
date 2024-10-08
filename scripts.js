
const key = "fb7ea97c11cc1583e6c183afb5fa6197"


function colocarNaTela(dados){

    document.querySelector (".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector (".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector (".texto-previsao").innerHTML = dados.weather [0].description
document.querySelector (".umidade").innerHTML = dados.main.humidity + "%"

 document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather [0].icon}.png`

console.log(dados)

}


async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +  cidade +  "&appid=" +  key + "&lang=pt_br" + "&units=metric"
        )
        .then(resposta => resposta.json())
    
        colocarNaTela(dados)


}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
