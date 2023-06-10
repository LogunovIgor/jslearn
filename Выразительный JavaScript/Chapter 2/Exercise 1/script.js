// Построение треугольника в цикле
const symbol = '#';

for (let a = 1; a < 8; a++) {
    let str = '';
    
    while (str.length < a) {
        str += symbol;
    }
    console.log(str);
}
