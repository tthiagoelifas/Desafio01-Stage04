let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o segundo número: "))


const sum = "A soma dos dois numeros é: " + (numberOne + numberTwo)
const sub = "A subtração dos dois numeros é: " + (numberOne - numberTwo)
const mult = "A multiplicação dos dois numeros é: " + (numberOne * numberTwo)
const div = "A divisão dos dois numeros é: " + (numberOne / numberTwo)
const restDiv = "O resto da divisão dos dois numeros é: " + (numberOne % numberTwo)

const evenOrOdd = () => {
  
  if((numberOne + numberTwo) % 2 === 0){
    alert("A soma dos dois numeros é par!")
  }else{
    alert("A soma dos dois numeros é impar!")
  }

}

const equal = () => {
  if(numberOne === numberTwo){
    alert("Os numeros inseridos são iguais!")
  }else{
    alert("Os numeros inseridos são diferentes!")
  }
}

" A soma dos dois numeros é x"

alert(sum)
alert(sub)
alert(mult)
alert(div)
alert(restDiv)
evenOrOdd()
equal()
