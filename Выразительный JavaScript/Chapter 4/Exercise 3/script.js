// Список

const arrayToList = array => {
    let listLastItem;
    for (let item of array.reverse()) {
        let newListItem = prepand(item, listLastItem);

        listLastItem = newListItem;
    }

    return listLastItem;
};

const listToArray = listItem => {
    let result = [];
    while (listItem != null) {
        result.push(listItem.value);
        listItem = listItem.rest;
    }

    return result;
}

const prepand = (item, list) => {
    let newListItem = {
        value: item,
        rest: list
    }

    return newListItem;
};

const nth = (index, list) => {
    if (index == 0)
        return list;

    if (list.rest == null)
        return undefined;

    return nth(--index, list.rest);
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arrayToList(arr);

console.log(result);

let arrayFromList = listToArray(result);

console.log(arrayFromList);

console.log(nth(10, result));