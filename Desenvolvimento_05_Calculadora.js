/* Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 
*/
alert("Desenvolvimento 05 - Calculadora");
var numero_01 = parseFloat(prompt("Digite o Primeiro numero: "));
let operacao = prompt("Digite a Operação: +,-,* ou /");
var numero_02 = parseFloat(prompt("Digite o Segundo numero: "));

if (operacao == "+") {
		var soma = numero_01+numero_02;
			alert("A soma é: " + soma)
} else if (operacao == "-") {
		var subtracao = numero_01-numero_02;
			alert("A subtração é: " + subtracao)
} else if (operacao == "*") {
		var multiplicao = numero_01*numero_02;
			alert("A multiplicação é: " + multiplicao)
}	else if (operacao == "/") {
		var divisao = numero_01/numero_02;
		var modulo= numero_01 % numero_02;
  // var final = modulo - divisao;
			alert("A divisão é: " + divisao + " e o resto " + modulo)
} else {
	alert("Operação Invalida.")
}