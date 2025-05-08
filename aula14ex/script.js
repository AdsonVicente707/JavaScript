function veridicar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano') 
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('varifique os dados e tente novamente')
   }
   else {
    window.alert('tudo certo')
   }
}