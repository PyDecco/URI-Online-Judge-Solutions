var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);
var C = parseFloat(lines.shift()).toFixed(1);

MEDIA = (A*2 + B*3 + C*5)/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`)