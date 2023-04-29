let conditions = document.querySelector('.initial-conditions')
let h4Initial = document.querySelector('.h4-initial')
let h4Final = document.querySelector('.h4-final')
let nameCharacter1 = prompt('Qual o nome do personagem atacante?')
let powerAttackCharacter1 = Number(prompt(`Qual o poder de ataque de ${nameCharacter1}?`))

h4Initial.innerText += `${nameCharacter1} possui ${powerAttackCharacter1} pontos de ataque.`

let nameCharacter2 = prompt('Qual o nome do personagem defensivo?')
let lifePointsCharacter2 = Number(prompt(`Quantos pontos de vida o ${nameCharacter2} possui atualmente?`))
let powerDeffenseCharacter2 = Number(prompt('Qual o seu poder de defesa? '))
let shieldCharacter2 = confirm('Se ele possui escudo, confirme.')

h4Initial.innerHTML += `${nameCharacter2} atualmente possui ${lifePointsCharacter2} pontos de vida e ${powerDeffenseCharacter2} de poder de defesa. Além disso ${shieldCharacter2 === true ? 'possui' : 'não possui'} escudo.`

let withShield = (powerAttackCharacter1 - powerDeffenseCharacter2)/2 
let withoutShield =  powerAttackCharacter1 - powerDeffenseCharacter2

if(powerAttackCharacter1 > powerDeffenseCharacter2 && shieldCharacter2 === false){
  alert(`O dano causado foi de ${withoutShield}`)
  h4Final.innerHTML = `${nameCharacter2} ficou com ${lifePointsCharacter2 - withoutShield} pontos de vida.`
} 

else if(powerAttackCharacter1 > powerDeffenseCharacter2 && shieldCharacter2 === true){
  alert(`O dano causado foi de ${withShield}`)
  h4Final.innerHTML = `${nameCharacter2} ficou com ${lifePointsCharacter2 - withShield} pontos de vida.` 
} 

else if (powerAttackCharacter1 <= powerDeffenseCharacter2){
  alert(`Não houve dano à ${nameCharacter2}`)
}