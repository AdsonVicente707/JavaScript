function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano') 
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('varifique os dados e tente novamente')
   }
   else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
   if (fsex [0].checked){
      genero = 'Masculino' 
      if ( idade >= 0 && idade < 10){
        
         img.setAttribute('src', 'bebe.avif')

     
      }
      else if ( idade < 21){
         img.setAttribute('src', 'adolescente.jpg')
      }
      else if ( idade < 50){
         img.setAttribute('src', 'mulher.jpg')
      }
      else {
      img.setAttribute('src', 'coroa.webp')
      }
   }
    else if (fsex [1].checked){
      genero = 'Feminino'
      if ( idade >= 0 && idade < 10){
     
      }
      else if ( idade < 21){
        img.setAttribute('src', 'adolescente.jpg')
      }
      else if ( idade < 50){
         img.setAttribute('src', 'mulher.jpg')
      }
      else {
         img.setAttribute('src', 'coroa.webp')
      }
       
      
    }
    res.innerHTML = `você é do sexo ${genero} e você tem ${idade} anos`
     res.appendChild(img)
   }
} 
   
   

   
      
