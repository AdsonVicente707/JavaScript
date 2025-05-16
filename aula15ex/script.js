function verificar(){
   var ini = document.getElementById('inicio')
   var fi = document.getElementById('fim')
   var pas = document.getElementById('passos')
   var inicio = Number(ini.value)
   var fim = Number(fi.value)
   var passos = Number (pas.value)
   var res = document.querySelector('div#res')
 
  if (inicio == 0 || fim == 0 || passos == 0){
   alert ('ERRO dados incorretos TENTE NOVAMENTE')
}
   
      else {
         if (inicio < fim){
            for (var c = inicio; c <= fim ;c = c + passos){
               res.innerHTML += ` ${c} \u{1F449}`
}
}
         else {
           for (var c = inicio; c >= fim ;c = c - passos){
               res.innerHTML += ` ${c} \u{1F449}`}
}


} 
}   
   

   
      
