const nameTourist = prompt('Qual é o seu nome?')
let cidades = ""
let contagem = 0

let continuar = prompt('Você ja visitou alguma cidade? s/n')

while(continuar === 's'){
  let cidade = prompt('Qual?')
  cidades += " - " +  cidade + "\n"
  contagem++
  continuar = prompt('você visitou alguma outras cidade? s/n')
}
window.alert (`Número de cidades visitadas: ${contagem} \nCidades visitadas:  \n${cidades}`)