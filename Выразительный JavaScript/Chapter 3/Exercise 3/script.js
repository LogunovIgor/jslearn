// Подсчет букв
const countBs = function(str) {
    let count = 0;
    for(let ch of str) {
        if (ch == 'B')
            count++;
    }

    return count;
};

console.log(countBs('ASBqweqBq1213B'));


const countChar = function(str, char) {
    let count = 0;
    for(let ch of str) {
        if (ch == char)
            count++;
    }

    return count;
}

console.log(countChar('OGE#UFVE&*nuiwe29323jwve222iuw23', '2'));