const medida = Number(prompt('Digite um valor em metros: '))
const conv = Number(prompt(
  'Para qual medida deseja converter? ' +
  '\n1 - Milímetro \n2 - Centímetro \n3 - Decímetro \n4 - Decâmetro \n5 - Hectômetro \n6 - Quilômetro' ))

switch(conv){
  case 1: 
    alert(medida * 1000)
    break;
  case 2:
    alert(medida * 100)
    break;
  case 3:
    alert(medida * 10)
    break;
  case 4:
    alert(medida * 0.1)
    break;
  case 5:
    alert(medida * 0.01)
    break;
  case 6:
    alert(medida * 0.001)
    break;
  default:
    alert('Solicitação inválida');
}