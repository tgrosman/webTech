var array = [1, 2, 3, 4, 5];
var cArray = [5,1,7,4,6,2,8,11,100];
var charArray = ['a','z', 'f','y','j'];

// array.forEach(array[i] = "hallo");
array.forEach(function(item, index, array, und, noch, weitere, parameter, die, völlig, sinnlos, sind) {
    console.log(item, index);
});
console.log(array.reduce(function(total, currentValue) {
    return total + currentValue;


}));

var mappedarray = array.map(function(currentValue){
	return currentValue*2;
});
console.log(mappedarray);

console.log(array.filter(a => a<4));
console.log(array.filter(function(a){
	return a<4;
}));

console.log(array.every(x => x<10));
console.log(array.every(x => x>5));
console.log(array.find(x => x>3));
console.log(cArray.sort());
console.log(charArray.sort());
console.log(cArray.sort(function(a,b){
	return a-b;
}));