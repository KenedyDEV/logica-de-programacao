let options = ''
do{
  options = prompt('Qual forma geométrica desejas calcular?\n1-Área do triângulo \n2-Area do retangulo \n3-Area do quadrado \n4-Area do trapézio \n5-Area do círculo \n6-Nenhuma, sair.' )
  switch(options){
      case '1':
        function areaTriangulo(base, altura){
          const area = (base * altura) / 2 
          alert(`A area do triângulo é igual a: ${area}cm.`)
        }
        areaTriangulo(prompt('Qual o valor da base em cm?'), prompt('Qual o valor da altura em cm?'))
        break

      case '2':
        function areaRetangular(base, altura){
          const area = (base * altura)
          alert(`A area do retângulo é igual a: ${area}cm.`)
        }
        areaRetangular(prompt('Qual o valor da base em cm?'), prompt('Qual o valor da altura em cm?'))
        break

      case '3':
        function areaQuadrado(lado){
          const area = (lado*lado) 
          alert(`A area do quadrado é igual a: ${area}cm.`)
        }
        areaQuadrado(prompt('Qual o valor do lado do quadrado em cm?'))
        break

      case '4':
        function areaTrapezio(_basemaior,_basemenor,altura){
          const area = (_basemaior + _basemenor) * altura / 2 
          if(_basemaior === _basemenor){
            alert('Esses números não coincidem com a área de um trapézio!')
          }
          else if(_basemaior < _basemenor){
            alert('Você inverteu os valores da base!')
          }
          else{
          alert(`A area do trapézio é igual a: ${area}cm.`)
        } 
      }
        areaTrapezio(prompt('Qual o valor da base maior em cm?'), prompt('Qual o valor da outra base em cm?'), prompt('Qual o valor da altura em cm?'))        
        break
      
      case '5':
        function areaCirculo(raio){
          const area = (3.14 * raio**2 )
          alert(`A area do circulo é igual a: ${area}cm.`)
        }
        areaCirculo(prompt('Qual o valor o raio em cm?'))
        break

      case '6':
        alert('saindo...')
        break

      default:
        alert('opção inválida')
  }
} while(options !== '6')