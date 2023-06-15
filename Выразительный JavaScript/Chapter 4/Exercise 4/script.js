// Глубокое сравнивание
const deepEqual = (firstObj, secondObj) => {
    if (firstObj === secondObj)
        return true;

    if (typeof firstObj == 'function' && typeof secondObj == 'function')
        return true;

    if (typeof firstObj != 'object' || typeof secondObj != 'object')
        return false;

    if (firstObj == null || secondObj == null)
        return false;

    let firstObjKeys = Object.keys(firstObj);
    let secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length != secondObjKeys.length)
        return false;

    for(let property of firstObjKeys) {
        if (!secondObjKeys.includes(property))
            return false;

        if (typeof firstObj[property] != typeof secondObj[property])
            return false;

        if (!deepEqual(firstObj[property], secondObj[property]))
            return false;
    }

    return true;
};

let obj1 = {
    a: 1,
    e: 1,
    c: {
        test: 12
    },
    d: function() {

    }
}

let obj2 = {
    a: 1,
    b: undefined,
    c: {
        test: 12
    },
    d: function() {

    }
}

console.log(deepEqual(obj1, obj2));