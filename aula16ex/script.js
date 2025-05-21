function taboada(){
   var num = document.getElementById('txtn')
   var tab = document.getElementById('seltab')
   if (num.value.length == 0){
      alert('ERRO preencha as informações e tente novamente')
   }
   else{
       var n = Number(num.value)
       var c = 1 
       tab.innerHTML = ''
       while (c <= 10){
         var item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         item.value= `${c}`
         tab.appendChild(item)
         c = c + 1
       }
   }
  
}

   
      
