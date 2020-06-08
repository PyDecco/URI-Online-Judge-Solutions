funcionarioNumero = parseInt(lines.shift());
horasTrabalho = parseInt(lines.shift());
valorHora = parseFloat(lines.shift()).toFixed(2);

salary = (valorHora * horasTrabalho).toFixed(2);

console.log(`NUMBER = ${funcionarioNumero}`);
console.log(`SALARY = U$ ${salary}`);