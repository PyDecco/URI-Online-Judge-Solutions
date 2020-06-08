var nomeFuncionario = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var montateTotal = parseFloat(lines.shift());

TOTAL = (salarioFixo + (montateTotal*0.15)).toFixed(2);

console.log(`TOTAL = R$ ${TOTAL}`);