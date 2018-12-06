const persons = [
    ['Max', 1967, 2, 'm'],
    ['Maria', 1990, 1, 'f'],
    ['Meik', 1982, 2, 'm'],
    ['Mareike', 1985, 3, 'f'],
    ['Mervin', 1971, 1, 'm'],
    ['Magdalena', 1979, 1, 'f'],
];
const test = [
    ['Max', 1967, 2, ],
    ['Maria', 1990, 1, ],
    ['Meik', 1982, 2, ],
    ['Mareike', 1985, 3, ],
    ['Mervin', 1971, 1, ],
    ['Magdalena', 1979, 1, ],
];
// Diese Funktion filtert das übergebene Array nach dem Geschlecht
// Rückgabe: ein Array, das alle Personen des ursprünglichen Arrays enthält, bei denen das // Geschlecht dem übergebenen Parameter entspricht; Wenn kein Eintrag vorhanden ist,
// dann wird ein leeres Array zurückgegeben
// Zum Beispiel: filterSex(persons, 'f')
// Bsp-Rückgabe:
// [ [ 'Maria', 1990, 1, 'f' ], [ 'Mareike', 1995, 3, 'f' ],
// [ 'Magdalena', 1979, 1, 'f' ] ]
function filterSex(personsArray, sex) {
		if(personsArray[3] === null)
			return [];
	return personsArray.filter((array => array[3] === sex)); 
}
console.log(filterSex(persons,'f'));
console.log(filterSex(test,'f'));

// Diese Funktion berechnet das Alter jeder Person
// Zum Beispiel: getAge(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 50 ], [ 'Maria', 27 ], [ 'Meik', 35 ], [ 'Mareike', 32 ], // [ 'Mervin', 46 ], [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
    return personsArray.map(array => [array[0],new Date().getFullYear()-array[1]]);
}
console.log(getAge(persons));

// Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person 
// und sortiert das Array (höchster Status zuerst, bei
// gleichem Status: nach Namen alphabetisch)
// für String-Vergleiche in der 	 nachschauen
// Zum Beispiel: getSortedStatus(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 100 ], [ 'Mareike', 96 ], [ 'Meik', 70 ],
// [ 'Mervin', 46 ], [ 'Magdalena', 38 ], [ 'Maria', 27 ] ] 
function getSortedStatus(personsArray) {
	return personsArray.map((array, personsArray.getAge) => array[1]*array[2]).sort(function(a,b){

		b-a;
	});
}
console.log(getSortedStatus(persons));