/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/

  alert(`Hello World!`)

/*2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/

  const numberOne = 1
  const numberTwo = 2

  const sum = numberOne + numberTwo

  alert(sum)

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`*/

  const checkNumber = 2

  if (typeof checkNumber == 'number') {
    alert("É um número.")
  } else {
    alert("Não é um número.")
  }
    
/*4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/

  const checkString = true

  if (typeof checkString == 'string') {
    alert("É uma string.")
  } else {
    alert("Não é uma string.")
  }

/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

  const checkBoolean = true

  if (typeof checkBoolean == 'boolean') {
    alert("É um booleano.")
  } else {
    alert("Não é um booleano.")
  }  

/*6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

  const numberThree = 3
  const numberFour = 4

  const sub = numberThree - numberFour

  alert(sub)

/*7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/

  const numberFive = 5
  const numberSix = 6

  const multi = numberFive * numberSix

  alert(multi)

/*8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/

  const numberSeven = 7
  const numberEight = 8

  const div = numberSeven / numberEight

  alert(div.toFixed(2))

/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/

  const numberNine = 9

  if (numberNine % 2 == 0) {
    alert("É um número par.")
  } else {
    alert("Não é um número par")
  }

/*10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/

const numberTen = 10

if (numberTen % 2 != 0) {
  alert("É um número ímpar.")
} else {
  alert("Não é um número ímpar")
}