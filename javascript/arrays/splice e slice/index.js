
/*let countries = ['USA', 'Germany', 'UK', 'France', 'Italy', 'Russia', 'Latvia'];

let division = countries.slice(1, 5);

console.log(division);

//nao altera os valores na sua referencia

*/

//splice - modifica o array

let countries = ['USA', 'Germany', 'UK', 'France', 'Italy', 'Russia', 'Latvia'];



//let division = countries.splice(1, 2) // no indice 1 começa a remover 2 elementos

let add = countries.splice(1, 0, 'jamaica', 'japan'); // no indice 1 começa a adicionar 2 elementos

console.log(add);

console.log(countries);

//nesse caso o splice nao altera o array original

