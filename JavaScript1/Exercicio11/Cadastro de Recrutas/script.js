/* # 11 - Exercício 1

## Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta.
 As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo 
e sua idade (apenas baseada no ano de nascimento). */

const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoEstudo = prompt("Informe o campo de estudo do recruta:");
const anoNascimento = prompt("Informe apenas o ano de Nascimento do recruta:");

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de estudo: " + campoEstudo +
  "\nIdade: " + (2022 - anoNascimento)
)