function readFile(){
  const input = document.querySelector('#archive')
  const { files } = input


  if(files.lenght){
      const file = files[0]
      const reader = new FileReader()
      reader.onload = () => {
          console.log(reader)
}
      reader.readAsDataURL(file)
      }

}

