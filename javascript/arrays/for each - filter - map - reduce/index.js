/*

let countries = ['USA', 'Germany', 'UK', 'France', 'Italy', 'Russia', 'Latvia'];


//for each

countries.forEach(function(value, index ) {
    countries[index] = (" The " + value + ' is a country')
})


console.log(countries) // alteração do array


*/

//metodo map 

/*let countries = ['USA', 'Germany', 'UK', 'France', 'Italy', 'Russia', 'Latvia'];

console.log(countries)
console.log(countries.map(function(value, index) {
    return 'Country: ' + value;
 }))// map pode retornar um novo array
*/
//metodo filter

/*

let countries = ['USA', 'Germany', 'UK', 'France', 'Italy', 'Russia', 'Latvia'];

console.log(countries)

newCountries = countries.filter(function(value, index) {
   
    return value.length > 6;
})

console.log( newCountries)

*/


//reduce

let grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

let sum = grades.reduce(function(total, notaAtual) {   
    return total + notaAtual;
}, 0)// inicializa o total com 0


approved = Math.ceil(sum / grades.length) //arredonda para cima

if (approved >= 4) {
    console.log('Approved')
} else {
    console.log('Not approved')
} // assistir o blog da hcode para entender melhor o reduce








