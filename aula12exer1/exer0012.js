
var agorahr = new Date()
var agoramin = new Date()
var agoradata = new Date()
var agoradataano = new Date()
var min = agoramin.getMinutes()
var hora = agorahr.getHours()
var data = agoradata.getDate()
var dataano = agoradataano.getFullYear()

console.log (`São ${hora}:${min} horas de ${data}/${dataano} `)
if (hora >= 6 && hora <= 12) {
    console.log ('Bom dia')
}
else if (hora > 12 && hora <= 18){
    console.log ('Boa tarde')
}
else if (hora > 18 && hora <= 23){
    console.log ('Boa noite')
}
else if (hora >= 1 && hora <= 5){
    console.log ('Boa madrugada')
}
