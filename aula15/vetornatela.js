let valores = [1,3,4,6,7,8]
/*for (let pos = 0; pos < valores.length;pos = pos + 1){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores){
    console.log (`a posição ${pos} tem  o valor ${valores[pos]}`)
}