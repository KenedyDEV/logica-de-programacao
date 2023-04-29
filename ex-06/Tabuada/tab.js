let num = Number(prompt('Insira um número para saber sua tabuada: '))
let armazena = ''
for(let i = 0; i < 21; i++){
  armazena += `\n${i*num}` 
}
alert(armazena)