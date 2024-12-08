const addABook=document.getElementById('add-newbook')
const okbtn=document.getElementById('okbtn')
const clsbtn=document.getElementById('close-button')
const formData=document.getElementById('book-details')
let dialog=document.getElementById('hidden')
const container=document.getElementById('container')

const library=[]
//obj constructor
function book(title, author, pages, status) {
    this.title=title;
    this.pages=pages;
    this.author=author;
    this.status=status;
    this.info=function() {
      return `${title} by ${author}, ${pages} pages, ${status}`
    }
  }
//add books to library here
  function addBooks() {
    let title=document.getElementById('title').value
    let author=document.getElementById('author').value
    let pages=document.getElementById('pages').value
    let status=document.getElementById('status').value
    let Book= new book(title, author, pages,status)
    library.push(Book)
    console.log(library);
    populateDisplay({title,author,pages,status})
    formData.reset()
  }

  addABook.addEventListener('click', ()=>{
    
    dialog.showModal();

  })

  okbtn.addEventListener('click', ()=>{addBooks();
    
  })
clsbtn.addEventListener('click', ()=>dialog.close())

function populateDisplay({title,author,pages,status}) {

  container.innerHTML=""
  library.forEach(({title,author,pages,status})=>{
    let card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`<p>Title:${title}</p>
    <p>Author:${author}</p>
    <p>Pages:${pages}</p>
    `
    container.append(card) 
  })
  
}