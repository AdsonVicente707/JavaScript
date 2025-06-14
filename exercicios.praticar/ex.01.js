function somar(){

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')
let numone = Number(num1.value)
let numtwo = Number(num2.value)
let soma = numone + numtwo
res.innerHTML = `A soma entre ${numone} e ${numtwo} é ${soma}`

}
