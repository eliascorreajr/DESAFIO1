// Solicitar o nome pelo prompt e mostrar em console com saudação
var nome = prompt("Digite o seu nome:");
console.log("Olá, " + nome + "!");

// Solicitar um número pelo prompt
var numeroDigitado = prompt("Digite um número:");

// Converter o número de string para número e somá-lo a outro número
var numeroArmazenado = 10; // Número armazenado em uma variável
var resultadoSoma = parseFloat(numeroDigitado) + numeroArmazenado;

// Mostrar o resultado da soma em console
console.log("O resultado da soma é: " + resultadoSoma);

// Solicitar dois textos pelo prompt
var texto1 = prompt("Digite o primeiro texto:");
var texto2 = prompt("Digite o segundo texto:");

// Concatenar os textos e mostrar o resultado através de um alert
var resultadoConcatenacao = texto1 + " " + texto2;
alert(resultadoConcatenacao);
