const persons = [
    ['Max', 1967, 2, 'm'],
    ['Maria', 1990, 1, 'f'],
    ['Meik', 1982, 2, 'm'],
    ['Mareike', 1985, 3, 'f'],
    ['Mervin', 1971, 1, 'm'],
    ['Magdalena', 1979, 1, 'f'],
];
const test = [
    ['Max', 1990, 1, ],
    ['Maria', 1990, 1, ],
    ['Meik', 1990, 1, ],
    ['Mareike', 1990, 1, ],
    ['Mervin', 1990, 1, ],
    ['Magdalena', 1990, 1, ],
];
// Diese Funktion filtert das übergebene Array nach dem Geschlecht
// Rückgabe: ein Array, das alle Personen des ursprünglichen Arrays enthält, bei denen das // Geschlecht dem übergebenen Parameter entspricht; Wenn kein Eintrag vorhanden ist,
// dann wird ein leeres Array zurückgegeben
// Zum Beispiel: filterSex(persons, 'f')
// Bsp-Rückgabe:
// [ [ 'Maria', 1990, 1, 'f' ], [ 'Mareike', 1995, 3, 'f' ],
// [ 'Magdalena', 1979, 1, 'f' ] ]
function filterSex(personsArray, sex) {
    if (personsArray[3] === null)
        return [];
    return personsArray.filter((array => array[3] === sex));
}
console.log(filterSex(persons, 'f'));
console.log(filterSex(test, 'f'));

// Diese Funktion berechnet das Alter jeder Person
// Zum Beispiel: getAge(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 50 ], [ 'Maria', 27 ], [ 'Meik', 35 ], [ 'Mareike', 32 ], // [ 'Mervin', 46 ], [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
    return personsArray.map(array => [array[0], new Date().getFullYear() - array[1]]);
}
console.log(getAge(persons));

// Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person 
// und sortiert das Array (höchster Status zuerst, bei
// gleichem Status: nach Namen alphabetisch)
// für String-Vergleiche in der     nachschauen
// Zum Beispiel: getSortedStatus(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 100 ], [ 'Mareike', 96 ], [ 'Meik', 70 ],
// [ 'Mervin', 46 ], [ 'Magdalena', 38 ], [ 'Maria', 27 ] ] 
function getSortedStatus(personsArray) {
    return personsArray.map(array => [array[0], (new Date().getFullYear() - array[1]) * array[2]]).sort(function(a, b) {
        if (a[1] === b[1])
            return a[0].toString().localeCompare(b[0].toString());
        else {
            return b[1] - a[1];
        }
    });


}
// console.log(getSortedStatus(persons));
console.log(getSortedStatus(test));

// Diese Funktion gibt ein Array mit den Namen aller Personen zurück
// Zum Beispiel:getNames(persons)
// Bsp-Rückgabe:
//['Max', 'Maria', 'Meik', 'Mareike', 'Mervin', 'Magdalena']
function getNames(personsArray){
    return personsArray.map(array => array[0]); 
}
console.log(getNames(persons));

// Diese Funktion gibt das addierte Alter aller Personen zurück
// Zum Beispiel:getAggregatedAge(persons)
// Bsp-Rückgabe:
// 228
function getAggregatedAge(personsArray){
    return getAge(personsArray).reduce(function(acc, array){
        return acc + array[1];
     
},0);
}
console.log(getAggregatedAge(persons));


// Diese Funktion zählt die Geschlechter der Personen und gruppiert diese in einer Map.
// (siehe http:eloquentjavascript.net/06_object.html#h_gAcc11EHzV).
// Achtung: Man kann nicht davon ausgehen, dass nur 'f' und 'm' vorkommen!
// Bsp-Rückgabe für persons:
// Map { 'f'=> 3, 'm'=> 3 }
function getAmount(personsArray) {
    return personsArray.map(function(array){
        if((array))
    })
}