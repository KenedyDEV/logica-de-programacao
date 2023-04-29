
function dobro(x){
  alert(`O dobro de ${x} é igual à ${2*x}`)
}
dobro(5)
//os parenteses retornam o valor de x

function ola(name = 'usuário'){
  alert(`Olá, ${name}`)
}
ola('Kenedy')
ola()
//caso a função seja chamada sem valor (undefined), podemos adicionar 
//um valor padrão nesse caso o valor padrão é 'usuário'

function soma(a,b){
  alert(a+b)
}
soma(4,5)
//é possível adicionar mais de um paramertro a função.

//funções e objetos:
function criaUser(nome, email, senha){
  const user = {
    //quando atribuimos um obk com o mesmo nome de seu parametro é possível abrevia-lo
    nome, //abreviação para nome (obj) = nome (parametro)
    email, //abreviação para email (obj) = email (parametro)
    senha //abreviação para senha(obj) = senha (parametro)
  }
  console.log(user)
}
criaUser('Kenedy', 'kenedyal478@gmail.com', 'Kenedy123')

//IMPORTANTE:: VALORES PADRÃO, EM FUNÇÕES COM MAIS DE UM PARÂMETRO, SÓ SERVEM NO FINAL

//TRABALHANDO COM MUITOS PARÂMETROS:
function objetoComoParâmetro(usuário){
  return usuário
}
const dadosDoUsuário = {
  nome: 'Kenedy',
  dataDeNascimento: '07/07/2004',
  idade: '18 anos',
  senha: 'Kenedy123',
  profissao: 'DEV',
  sonho: 'Ser feliz'
}
console.log(objetoComoParâmetro(dadosDoUsuário))
//criarr um objeto com os valores de parametros necessarios pode ser conveniente




