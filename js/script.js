let input1 = document.getElementsByTagName("input")[0]
let input2 = document.getElementsByTagName("input")[1]
let input3 = document.getElementsByTagName("input")[2]
let input4 = document.getElementsByTagName("input")[3]

let qtdcarneh = 0.400
let qtdcarnem = 0.300
let qtdcarnec = 0.200

let qtdrefrihm = 1.5
let qtdrefric = 0.750

let qtdcervejahm = 1.65

let qtdcarvao = 0.83

let botao = document.getElementsByTagName("button")[0]

botao.addEventListener("click",calculocarne)

function calculocarne(){

    let nh = input1.value //número de homens, pegando do input
    let nm = input2.value //número de mulheres, pegando do input
    let nc = input3.value //número de crianças, pegando do input
    let hs = input4.value //número de horas, pegando do input

    let resultado1 = document.getElementById("resposta1") // pegando o span que contém as respostas
    let resultado2 = document.getElementById("resposta2")
    let resultado3 = document.getElementById("resposta3")
    let resultado4 = document.getElementById("resposta4")
    let resultado5 = document.getElementById("resposta5")

    resultado1.innerHTML = "" // toda vez que clica ele zera o span, para que não fique acrescentando valores (concatenando)
    resultado2.innerHTML = ""
    resultado3.innerHTML = ""
    resultado4.innerHTML = ""
    resultado5.innerHTML = ""


    if(hs >= 6) { // se o tempo for maior que 6h 
        qtdcarneh = 0.600
        qtdcarnem = 0.500
        qtdcarnec = 0.300

        let qtdcervejahm = 2

        qtdrefrihm = 2
        qtdrefric = 1
    }
    else{ // se o tempo for menor
        qtdcarneh = 0.400
        qtdcarnem = 0.300
        qtdcarnec = 0.200

        let qtdcervejahm = 1.65

        qtdrefrihm = 1.5
        qtdrefric = 0.750
    }

    if(nh == null || nh == ""){
        nh = 0
    }
    if(nm == null || nm == ""){
        nm = 0
    }
    if(nc == null || nc == ""){
        nc = 0
    }

    let totalh = nh * qtdcarneh //total de carnes para homens
    let totalm = nm * qtdcarnem //total de carnes para mulheres
    let totalc = nc * qtdcarnec //total de carnes para crianças

    let totalg = totalh + totalm + totalc //total de carnes geral

    let totalcervejahm = (parseInt(nh) + parseInt(nm)) * qtdcervejahm //total de bebida alcólica (parseInt converte string em número)
    let totalrefrihm = (parseInt(nh) + parseInt(nm)) * qtdrefrihm //total de refrigerante homem e mulher (parseInt converte string em número)
    let totalrefric = parseInt(nc) * qtdrefric //total de refrigerante criança (parseInt converte string em número)
    let totalrefrig = totalrefrihm + totalrefric //Total refrigerante geral

    let totalcarvao = totalg * qtdcarvao //total de carvão

    let totalpao = parseInt(nh) + parseInt(nm) + parseInt(nc) //total de pão de alho

    resultado1.innerHTML += "Você precisará de " + totalg.toFixed(2) + "Kg de carne." //span do html recebe esses valores
    resultado2.innerHTML += "Você precisará de " + totalrefrig + "l de refrigerante."
    resultado3.innerHTML += "Você precisará de " + totalcarvao.toFixed(2) + "Kg de carvão."
    resultado4.innerHTML += "Você precisará de " + totalpao + " pães de alho."
    resultado5.innerHTML += "Você precisará de " + totalcervejahm.toFixed(2) + "l de cerveja."

    let alertas = document.querySelector(".alerta")
    alertas.style.opacity = "1" //utilizei opacity para o efeito de aparição ficar suave com transition
    alertas.style.zIndex = "3"

    let formulario = document.querySelector(".formulario")
    formulario.style.opacity = "0" //utilizei opacity para o efeito de desaparecer ficar suave com transition
    formulario.style.zIndex = "-1"
   
    input1.value = "" //zerar o input depois do click
    input2.value = "" //zerar o input depois do click
    input3.value = "" //zerar o input depois do click
    input4.value = "" //zerar o input depois do click
}

let botao2 = document.querySelector(".bot2")

botao2.addEventListener("click",sair)

function sair() {
    let divale = document.querySelector(".alerta")
    divale.style.opacity = 0
    divale.style.zIndex = "-1"

    let formulario = document.querySelector(".formulario")
    formulario.style.opacity = "1"
    formulario.style.zIndex = "3"

}
