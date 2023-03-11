const primeiroNome = prompt("Informe o primeiro nome do usuário");
const sobrenome = prompt ("Informe o sobrenome do usuário");
const campoDeEstudo = prompt ("Informe o campo de estudo do usuário");
const anoDeNacimento = prompt ("Informe o ano de nascimento do usuário");

alert(
    "Recruta cadastrado com sucesso! \n " +
    "\n Nome Completo: " + primeiroNome  + "" +  sobrenome +
    "\n Campo de Estudo: " + campoDeEstudo +
   "\n Idade: " + (2023 - anoDeNacimento) 
)
