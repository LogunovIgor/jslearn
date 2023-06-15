// Массив в обратном порядке

const reverseArray = arr => {
    let newArray = [];

    for(let item of arr) {
        newArray.unshift(item);
    }

    return newArray;
};

const reverseArrayInPlace = arr => {
    for(let start = 0, end = arr.length - 1; start < end; start++, end--) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
};

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Выводим новый массив
console.log(reverseArray(test));

// выводим исходный массив (проверяем что ничего не поменялось)
console.log(test);

// Делаем перестановку в исходном массиве
reverseArrayInPlace(test);

// Выводим исходный массив
console.log(test);