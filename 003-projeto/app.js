var salario = 2000;
var aumento = 0.15;
var inflacao = 0.07;
novosalario = salario + (aumento * salario)

console.log(novosalario);

var novosalarioinflacao = novosalario - (inflacao * novosalario);

console.log(novosalarioinflacao);



var strnovosalario =`O novo salário é:\n R$\t\t${novosalario}`;
console.log(strnovosalario);

var strnovosalarioinflacao =`O novo salário aplicada inflação é:\n R$ ${novosalarioinflacao}`;

console.log (strnovosalarioinflacao)

