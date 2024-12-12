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
     console.log(`${title} by ${author}, ${pages} pages, ${status}`)
   
  }
}
// toggle method to change status 
// book.prototype.toggleRead = function () {
// this.status=!this.status
// return this.status
// }
   
//add books to library here
  function addBooks(title,author,pages,status) {
   
    let Book= new book(title, author, pages,status)
    library.push(Book)
    console.log(library)
    populateDisplay({title,author,pages,status})
    
  }

  addABook.addEventListener('click', ()=>{
    
    dialog.showModal();

  })

  okbtn.addEventListener('click', ()=>{
    let title=document.getElementById('title').value
    let author=document.getElementById('author').value
    let pages=document.getElementById('pages').value
    let status=document.getElementById('status').checked;
    
    addBooks(title,author,pages,status);
    formData.reset()
  })
clsbtn.addEventListener('click', ()=>dialog.close())

function populateDisplay(book) {

  container.innerHTML=""
  library.forEach((book, index)=>{
    
    let card=document.createElement('div')
  //  let index = library.findIndex((element) => element.title == book.title)
  //   card.setAttribute("data-index", index);
    card.classList.add('card')
    card.innerHTML=`<p>Title:${book.title}</p>
    <p>Author:${book.author}</p>
    <p>Pages:${book.pages}</p>
    <p>Status:${book.status? 'Read':"Not-Read"}</p> 
    `
    const statusbtn=document.createElement('button');
    card.appendChild(statusbtn)
    statusbtn.textContent='change status';
    statusbtn.dataset.index = index;
    statusbtn.addEventListener("click", (e) => {
      
        const index =e.target.dataset.index
        
       library[index].status=!library[index].status
      populateDisplay()
      });
      
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.dataset.index = index;
    remove.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      library.splice(index, 1);
      populateDisplay();
    });
    
    card.appendChild(remove)
    container.append(card) 
  })
  
}