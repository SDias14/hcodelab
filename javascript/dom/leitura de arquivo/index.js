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