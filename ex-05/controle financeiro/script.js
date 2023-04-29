let saldo = Number(prompt('Informe a quantidade de dinheiro disponível.'))
let option = ''

do {
  option = prompt( "Saldo disponível: R$ " + saldo +
  "\n1 - Adicionar dinheiro" +
  "\n2 - Remover dinheiro" +
  "\n3 - Sair")
  switch(option){
    case '1':
      saldo += Number(prompt('Informe o valor a ser adicionado'))
      break;
    case '2':
      saldo -= Number(prompt('Informe o valor de saída'))
      break
    case '3':
      alert('Saindo do site')
      break
    default:
      alert('entrada inválida')
  }
} while(option !== '3')