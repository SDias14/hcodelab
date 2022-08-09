function getData (evento) {

    evento.preventDefault() // retorna o formulario e previne de retornar na url 


    let form = document.querySelector('form')

/*
let data = {};
   
[...form.querySelectorAll('input')].forEach((tag) => {
    
    data[tag.name] = tag.value
})

console.log(data)

*/

let form2 = new FormData(form)

console.log(form2.get("name"))
console.log(form2.get("pass"))

}






