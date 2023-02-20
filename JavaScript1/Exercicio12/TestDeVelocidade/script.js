/* ## Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a 
velocidade de dois veículos e exiba na tela uma mensagem dizendo
qual dos dois é mais rápido (ou que as velocidades são iguais se 
este for o caso) 
*/

const carOne = prompt("Nome do primeiro veiculo");
const speedCarOne = parseFloat(prompt("Velocidade do primeiro veiculo"));

const carTwo = prompt("Nome do segundo veiculo");
const speedCarTwo = parseFloat(prompt("Velocidade do segundo veiculo"));

if (speedCarOne > speedCarTwo) {
   alert(`O Carro ${carOne} é mais rapido, sua velocidade é ${speedCarOne - speedCarTwo} km maior que o ${carTwo}`)
} else if (speedCarOne < speedCarTwo) {
  alert(`O Carro ${carTwo} é mais rapido, sua velocidade é ${speedCarTwo - speedCarOne} km maior que o ${carOne}`)
} else {
  alert(`A velocidade do ${carOne} e ${carTwo} são iguais`)
}