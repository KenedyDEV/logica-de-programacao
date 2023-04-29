// map: cria um novo array mapeando um array existente.

//comportamento de map demonstrado sem usa-lo
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}

//retorna: [ 'Thrall','Garrosh','Varok','Uther','Jaina','Tyrande','Muradin']

//usando o map com o mesmo exemplo:
const names = personagens.map(function(personagem){
  return personagem.nome
})

console.log(nomes)
console.log(names)
//retorna: [ 'Thrall','Garrosh','Varok','Uther','Jaina','Tyrande','Muradin']



//filter; filtra determinada busca e retorna o desejado em um novo array
//funcionamento de filter:

const orcs = []

for (let index = 0; index < personagens.length; index++) {
  if(personagens[index].raca === 'Orc'){
      orcs.push(personagens[index])
  }
  
}
console.log(orcs)

//com filter:
const orcss = personagens.filter(function (personagem){
    return personagem.raca === 'Orc'
})

console.log(orcss)

//reduce: reduz o array a um  único valor, pode ser uma string, number, array, obj, etc
// aplicando uma função de callback a cada elemento do array.

//array.reduce(callback[, valorInicial])

//array: O array que você deseja reduzir.
//callback: A função de callback que será chamada para cada elemento do array. A função de callback recebe quatro argumentos: acumulador, valor atual, índice atual e o array original.
//valorInicial (opcional): O valor inicial do acumulador. Se não for fornecido, o primeiro elemento do array será usado como valor inicial e o callback começará a ser aplicado a partir do segundo elemento.

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

//valor acumulado => valor => indice => array

const raca = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})



// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// cuidado: sort modifica o array original
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})
//se 'a' for maior que 'b' retornará um número positivo e o número ficará embaico por ser maior
//se 'a' for menor que 'b' retornará um número negativo e o número irá mais para o topo 