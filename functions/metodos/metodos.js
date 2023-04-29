//funções atreladas a objetos (métodos)

const pessoa = {
  nome: "Kenedy",
  idade: 18,
  dizerOla(){
    console.log(`Olá, ${this.nome}!`)
    //this referencia o próprio obejto dentro da função. Adicionar apenas 'nome' causaria um erro.
  }
}
pessoa.dizerOla()