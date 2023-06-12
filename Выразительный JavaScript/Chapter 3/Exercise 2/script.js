// Рекурсия (определение четного числа) по правилам:
// - ноль четный
// - единица нечетная
// - четность любого другого числа N совпадает с четностью N - 2

const isEvent = function(num) {
    if ((typeof num).toLowerCase() != 'number')
        return false;

    if (num < 0)
        num = -num;

    if (num === 0)
        return true;

    if (num === 1)
        return false;

    return isEvent(num - 2);
};

console.log(isEvent(-10));



