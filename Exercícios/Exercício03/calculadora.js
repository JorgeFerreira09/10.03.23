const entrada1 = prompt("Insira o primeiro valor:");
const entrada2 = prompt("Insira o segundo valor:");

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

window.alert(
    "Resultado: \n" +
    "\n Soma: " + soma +
    "\n Subtração: " + subtracao +
    "\n Multiplicação: " + multiplicacao +
    "\n Divisão: " + divisao
) 