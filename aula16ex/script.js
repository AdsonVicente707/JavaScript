let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document. querySelector('div#res')
let valores = []

function adicionar(){
    if (isnumero(num.value) && !inlista(num.value,valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adcionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }
    else {
        alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0 ) {
        alert('adcione valores antes de finalizar')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores ){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p><strong>Ao todo , temos ${tot} numeros cadastrados ${valores}.</strong></p>`
        res.innerHTML += `<p><strong>O maior numero é ${maior} e o menor numero é ${menor}.</strong></p>`
        res.innerHTML += `<p><strong>A soma de todos os valores é ${soma}</strong></p>`
        res.innerHTML += `<p><strong>A madia de todos os valores é ${media}</strong></p>`
    }
    }
function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else { 
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}