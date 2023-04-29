alert('Olá Dr. Hanshcrutz!')
const queue = []
alert('A lista de espera atual está vazia!')
let options;
let recebe = '';
do{

options = prompt('O que deseja fazer? \n 1 - Consultar pacientes. \n 2 - Adicionar novo paciente. \n 3 - Sair') 
switch(options){
  case '1':
    const pacienteAtendido = queue.shift()
    alert(`Paciente ${pacienteAtendido} foi atendido.`)
    if(queue.length === 0){
      alert('Todos os pacientes foram atendidos')
    }
    break
  case '2':
    const nameNewPatient = prompt('Qual o nome do paciente a ser adicionado?')
      if(nameNewPatient === '' || nameNewPatient === null  || nameNewPatient === undefined || nameNewPatient === Number){
        alert('Não foi possível adicionar paciente no sistema.')
      }
      else{
        queue.push(nameNewPatient)
        alert(`Paciente ${nameNewPatient} adicionado com sucesso na fila de espera.`)
        recebe = ''
        for(let i = 0; i < queue.length ; i++){
          recebe += `- ${queue[i]} \n`
        }
        alert(recebe)
      }
    break
  case '3':
  alert('Ok, até logo!')
}
} while(options !== '3')


