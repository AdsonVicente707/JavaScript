var agora = new Date()
var dias = agora.getDay()

switch (dias) {
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('segunda')
        break
    case 2: 
        console.log ('terça')
        break
    case 3:
        console.log ('quarta')
        break
    case 4:
        console.log ('quinta')
        break
    case 5:
        console.log ('sexta')
        break
    case 6:
        console.log ('sábado')
        break
    
    default:
        console.log('dia invalido ERRO')
        break
}
