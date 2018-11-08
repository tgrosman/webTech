function min(m, n) {
    if (m < n)
        return m
    else
        return n
}
console.log(min(0, 10));
console.log(min(0, -10));

function isEven(m) {
    if (m < 0)
        return "Negative number not allowed!"

    if (m % 2 == 0)
        return true
    else if (m % 2 == 1)
        return false
    else
        isEven(m - 2)
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function countBs(string) {
    let counter = 0;
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] == "B")
            counter++;
    }
    return counter;
}

function countChar(string, ch) {
    let counter = 0;
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] == ch)
            counter++;
    }
    return counter;
}
function countBs2(string) {
	return countChar(string,"B")
	// body...
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countBs2("BBC"));