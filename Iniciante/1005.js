var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);

MEDIA = (A*3.5 + B*7.5)/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)