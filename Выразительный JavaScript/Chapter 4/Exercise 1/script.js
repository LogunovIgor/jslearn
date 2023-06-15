// Сумма диапазона
const range = function(start, end, step = 1) {
    let array = [];

    if (step > 0) {
        while (start <= end) {
            array.push(start);
            start += step;
        }
    } 
    
    if (step < 0) {
        while (start >= end) {
            array.push(start);
            start += step;
        }
    }
    return array;
};

const sum = function(nums) {
    let result = 0;    
    for(let num of nums) {
        result += num;
    }

    return result;
}

console.log(sum(range(5, 2, -1)));