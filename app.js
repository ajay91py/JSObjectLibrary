const addABook=document.getElementById('add-newbook')
const okbtn=document.getElementById('okbtn')
const clsbtn=document.getElementById('close-button')
let dialog=document.getElementById('hidden')
const container=document.getElementById('container')

const library=[]

function book(name, author, pages, status) {
    this.name=name;
    this.pages=pages;
    this.author=author;
    this.status=status;
    this.info=function() {
      return `${name} by ${author}, ${pages} pages, ${status}`
    }
  }

  function addBooks() {
    let title=document.getElementById('title').value
    let author=document.getElementById('author').value
    let pages=document.getElementById('pages').value
    let status=document.getElementById('status').value
    let Book= new book(title, author, pages,status)
    library.push(Book)
    console.log(library);
    container.innerHTML=populateDisplay()

  }

  addABook.addEventListener('click', ()=>{
    dialog.showModal();

  })

  okbtn.addEventListener('click', ()=>{addBooks()})
clsbtn.addEventListener('click', ()=>dialog.close())

function populateDisplay() {
  library.forEach()
  return ``
}