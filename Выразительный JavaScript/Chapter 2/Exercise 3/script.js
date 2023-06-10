const width = 18;
const height = 8;

let result = '';
for (let y = 1; y <= height; y++) {
    for (let x = 1; x <= width; x++) {
            result += (y + x) % 2 == 0 ? '#' : ' ';
    }
    result += '\n';
}

console.log(result);