var idade = 100;
console.log (`você tem ${idade} anos e você`)
if (idade < 16) {
    console.log('Menor de idade')
}
else if (idade < 18 ) {
        console.log ('voto opcional')
    }
else if (idade >= 18 && idade <= 64)  {
    console.log ('voto obrigatorio')
}
else if (idade > 65){
    console.log ('idoso voto opcional')
}
