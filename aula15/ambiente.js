let num = [5,6,3,2,2]
num.push(6)
num.sort()
// a ordem dos fatores altera o resultado!
console.log(`${num}`)
console.log(`nosso vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('esse numero não existe tente novamente!')
}
else{
    console.log (`o valor 8 ta na posição ${pos}`)
}

