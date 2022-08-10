function showName() {

  if(localStorage.getItem('name')){
    document.querySelector('#boas-vindas').innerHTML = `Seja bem vindo ${localStorage.getItem('name')}`
  }
  
}





function lerArquivo() {
  const input = document.querySelector("#arquivo")
  console.log(input)
  const { files } = input
  console.log(files)

if (files.length){
    const file = files[0]
    const reader = new FileReader()
    reader.onload = () => {
        
        console.log(reader)
    }
    reader.readAsDataURL(file)


}



}

const getData = (evento) => {

  evento.preventDefault()

       const form = document.querySelector('form')
       
       
       const data = {};
 
       [...form.querySelectorAll('input')].forEach((tag) => {
         
         data[tag.name] = tag.value
         localStorage.setItem(tag.name, data[tag.name])
       })
       
       console.log(localStorage)



       

  }

  showName()











/*

let form2 = new FormData(form)

console.log(form2.get("name"))
console.log(form2.get("pass"))




*/