const testeDeArray = ["Kenedy", "Davi", "Wanessa", "Toddynho"];

//adicionar elementos no final (push)
testeDeArray.push("Darlyson" , "Maicão");

//adicionar elementos no começo (unshift)
testeDeArray.unshift("Zé");

//remover elementos no final do array (pop)
const i = testeDeArray.pop();

//remover elementos no começo do array (shift)
testeDeArray.shift();

//...
console.log(testeDeArray);

//verifica se um elemento está incluso no array, retorna valor boolean (includes)
console.log(testeDeArray.includes("Kenedy"));

//devolve o índice do elemento pesquisado (indexOf)
console.log(testeDeArray.indexOf("Wanessa"));

//cortar array (slice)
const corteDeArray = testeDeArray.slice(0, 3) //corta da posição 0 a 2
console.log(testeDeArray)
console.log(corteDeArray)

//concatenar arrays (CONCAT) armazena todos os arrays que desejar
const timesPaulistas = ['SPFC','PALMEIRAS', 'CORINTHIANS', 'SANTOS']
const timesCariocas = ['FLUMINENSE', 'FLAMENGO', 'VASCO', 'BOTAFOGO']
const uniaoRioSP = timesPaulistas.concat(timesCariocas)
console.log(uniaoRioSP)

//substituir um grupo de elementos de um array
const elementosRemovidos = uniaoRioSP.splice(2,3, "BANGU")
console.log(uniaoRioSP)          //onde começa, onde termina, quem substitui