function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagendia')
    var data = new Date()
     var hora = data.getHours()
  
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src="imagens/dia.jpg"
        document.body.style.background = '#a6b35d'
    }
    else if (hora >= 12 && hora < 18){
        img.src="imagens/tarde.jpg"
        document.body.style.background = '#ddb56b'
    }
    else {
        img.src="imagens/noite.jpg"
        document.body.style.background = '#090936'
    }
    
}