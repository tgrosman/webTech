function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(array) {
    let res = 0;
    for (let entry of array) {
        res += entry
    }
    return res;
}

function mRange(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step < 0)
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    else {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    return array;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(mRange(5, 2, -1));
console.log(mRange(1, 10, 1));
console.log(mRange(1, 10));
console.log(mRange(1, 10, 2));

function reverseArray(array) {
    let rev = [];
    for (let i = array.length - 1; i >= 0; i--) {
        rev.push(array[i]);
    }
    return rev;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let entry = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = entry;

    }
    //return array;


}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    let pList = { value: element, rest: list }
    return pList;
}

function nth(list, number) {
    if (!list)
        return undefined
    else if (number == 0) {
        return list.value
    } else {
        return nth(list.rest, number - 1);
    }

}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

function deepEqual(m, n) {
    if (m === n) {
        return true;
    }
    if (m == null || typeof m != "object" || n == null || typeof n != "object") {
        return false;
    }
    let keym = Object.keys(m);
    let keyn = Object.keys(n);
    console.log(keym);
    for (let key of keym) {
        if (!keyn.includes(key) || !deepEqual(m[key], n[key])) {
            return false;
        }
    }
    return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));