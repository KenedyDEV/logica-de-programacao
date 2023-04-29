let nameCar1 = prompt('Qual é o nome do primeiro carro?')
let speedCar1 = Number(prompt('Qual a velocidade do primeiro carro?'))

let nameCar2 = prompt('Qual é o nome do segundo carro?')
let speedCar2 = Number(prompt('Qual a velocidade do segundo carro?'))

if (speedCar1 > speedCar2) {
  alert('O' + nameCar1 + 'está mais rápido')
}
else if(speedCar1 < speedCar2) {
    alert('O' + nameCar2 + 'está mais rápido')
  }
else if (speedCar1 === speedCar2) {
    alert('Os carros estão em velocidade iguais')
}
else{
  alert('Revise os dados')
}