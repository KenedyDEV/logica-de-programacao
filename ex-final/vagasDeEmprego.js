let options = ''
const listaDeVagas = []

function listarVagas(){
  if(listaDeVagas.length === 0){
    alert('Não há vagas disponíveis no momento.')
  } 
  else{
    for (let i = 0; i < listaDeVagas.length; i++) {
      alert(
        "Identificador da vaga: " + (i) +
        "\nNome da vaga: " + listaDeVagas[i].nome +
        "\nEmpresa ofertante: " + listaDeVagas[i].empresa +
        "\nNúmero de candidatos atualmente: " + listaDeVagas[i].candidatos.length
      )
    }
  }
} 
function criaVaga(){
  const novaVaga = {}
  novaVaga.nome = prompt('Qual o nome da vaga?') 
  novaVaga.empresa = prompt('Qual o nome da empresa ofertante?')
  novaVaga.descrição = prompt('Adicione uma descrição para a vaga: ')
  novaVaga.dataLimite = prompt('Até quando a vaga estará disponível?')
  novaVaga.candidatos = []
    if(novaVaga.nome === '' || novaVaga.empresa === '' || novaVaga.descrição === '' || novaVaga.dataLimite === ''){
      alert('Revise os dados e tente novamente!')
    } else{
  const confirma = confirm(`Deseja confirmar os dados inseridos? \nVaga: ${novaVaga.nome} - ${novaVaga.empresa} \nDescrição : ${novaVaga.descrição} \nData Limite: ${novaVaga.dataLimite}`)
         if(confirma === true){
          listaDeVagas.push(novaVaga)
          alert('Vaga adicionado com êxito!')
         }
        else{
        alert('Cancelando operação...')
        }
}
    }
  


function visualizarVaga(){
  const optionVisu = Number(prompt('Qual o índice da vaga que deseja ver com mais detalhes?'))

  if(listaDeVagas.length <= 0){
    alert('Não há vagas disponíveis')
  } else if(optionVisu > listaDeVagas.length){
    alert('Não foi possível encontrar a vaga solicitada.')
  }    else{
    alert(
    'Índice da vaga: ' + optionVisu +
    '\nNome da vaga: ' + listaDeVagas[optionVisu].nome +
    '\nDescrição: ' + listaDeVagas[optionVisu].descrição + 
    '\nData Limite: ' + listaDeVagas[optionVisu].dataLimite +
    '\nQuantidade de candidatos: ' + listaDeVagas[optionVisu].candidatos.length +
    '\nNome dos candidatos: '   + listaDeVagas[optionVisu].candidatos
    )
  }
}
function inscreverCandidato(){
  const nomeCandidato = prompt('Qual o nome do candidato?')
  const vagaCandidato = prompt(`Para qual vaga ${nomeCandidato} está se candidatando?`)
  listaDeVagas[vagaCandidato].candidatos.push(nomeCandidato)
}
function removerVaga(){
  const vagaRemovida = Number(prompt('Qual o índice da vaga a ser removida?'))
  if(vagaRemovida > listaDeVagas.length || vagaRemovida < 0)
  {
    alert('Ocorreu um erro, tente novamente.')
  } else{
  const confirmacaoRemove = confirm('Tem certeza que deseja remover a seguinte vaga?' +
    '\nNome da vaga: ' + listaDeVagas[vagaRemovida].nome +
    '\nDescrição: ' + listaDeVagas[vagaRemovida].descrição + 
    '\nData Limite: ' + listaDeVagas[vagaRemovida].dataLimite +
    '\nQuantidade de candidatos: ' + listaDeVagas[vagaRemovida].candidatos.length +
    '\nNome dos candidatos: '   + listaDeVagas[vagaRemovida].candidatos)
  if (confirmacaoRemove == true){
  listaDeVagas.splice(vagaRemovida, vagaRemovida)
  alert('Vaga removida com sucesso. Os identificadores das vagas foram alterados. ')
  } else{
    alert('Operação cancelada.')
  }
}
}

do{
  options = Number(prompt('O que deseja acessar? \n1 - Ver vagas disponíveis. \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n5 - Excluir uma vaga \n6 - Sair'))
  switch(options){
    case 1:
      listarVagas()
      break
    case 2:
      criaVaga()
      break 
    case 3:
      visualizarVaga()
      break
    case 4:
      inscreverCandidato()
      break
    case 5:
      removerVaga()
      break
    case 6:
      alert('Saindo...')
      break
    default:
      alert('Opção inválida!')
  }
} while (options != 6)

