let word = prompt('Digite uma palavra: ')
let reverse = ''
for (let i = word.length - 1; i >= 0 ; i--){ 
  reverse += (word[i])

}
if(reverse === word){
    alert(word + ' é um palíndromo')
  }
  else if (reverse !== word) ( 
    alert(`Não é um palíndromo: \nOriginal: ${word}. \nInvertida: ${reverse}.`)
  )






