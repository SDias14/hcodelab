let ranking = [9,0,6,4,8,7,3,2,1,5];

ranking.sort().reverse();



// pop


let removed = ranking.pop();


// push
console.log(ranking);
console.log(removed);


let method = ranking.push(900); // final do array.

console.log(ranking);

ranking.sort(function(a, b){
    console.log(a, b);
    return b - a;

})

console.log(method)









