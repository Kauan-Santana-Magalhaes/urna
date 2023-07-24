
let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = ''
function comecarEtapa() {
    let etapa = etapas[etapaAtual]

    let numerosHTML = ''

    for(let i = 0;i< etapa.numeros;i++) {
        if(i === 0){
            numerosHTML += '<div class="numero pisca"></div>'

        } else{
        numerosHTML += '<div class="numero"></div>'}
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numerosHTML
}
function atualizaInterface() {
    let etapa = etapas[etapaAtual]
        let candidato = etapa.candidatos.filter((item)=>{
            if(item.numero === numero) {
                return true
            } else{
                return false
            }
        })

        if(candidato.lenght > 0) {
            candidato = candidato
            seuVotoPara.style.display = 'block'
            aviso.style.display = 'block'
            descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`

            let fotosHTML = ''
            for(let i in candidato) {
                fotosHTML += `<div class="d-1-image"><img src="${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`
            }

            lateral.innerHTML = fotosHTML

        } 

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if(elNumero !== null) {
        elNumero.innerHTML = n
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else{
            atualizaInterface()
        }
}
}
function branco () {
    console.log('clicou no branco')
}
function corrige () {
    console.log('clicou no corrige')
}
function confirma () {
    console.log('clicou no confirma') 
}
comecarEtapa()