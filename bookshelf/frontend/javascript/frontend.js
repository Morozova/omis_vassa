
let url = 'http://localhost'
let port = 3000

let btnEdit = undefined
let btnDelete = undefined

function getUrl(urlEnd = '') {
  if (urlEnd.toString().length > 0) {
    return url + ':' + port + '/' + urlEnd
  }
  return url + ':' + port
}

function generateCard(book) {

  // if (typeof book != 'object') throw 'No object selected'
  return `
  <div class="card text-center m-1" style="width: 18rem;">
  <div class="card-header">
    ${book.title}
  </div>
  <div class="card-body">
    <h5 class="card-title">${book.isbn}</h5>
    <p class="card-text">${book.description + ' ' + book.author}</p>
    ${btnEdit.outerHTML + ' ' + btnDelete.outerHTML}
  </div>
  <div class="card-footer text-muted">
    ${book.publish_date}
  </div>
</div> `
}

function generateButton(title) {
  let btn = document.createElement('a')
  btn.classList.add('btn')
  btn.href = '#'
  btn.innerText = title

  return btn
}

const getBooksData = () => {

  fetch(getUrl('books'))
    .then(response => response.json())
    .then(data => {

      let cards = ''

      data.forEach(book => {

        btnEdit = generateButton('Edit')
        btnEdit.classList.add('btn-primary')
        btnEdit.classList.add('edit')

        btnDelete = generateButton('Delete')
        btnDelete.classList.add('btn-danger')
        btnDelete.classList.add('delete')
        btnDelete.setAttribute('data-isbn', book.isbn)

        cards += generateCard(book)
      })
      
      document.getElementById('books').innerHTML = cards

      let buttonsDelete = document.getElementsByClassName('delete')
      Array.from(buttonsDelete).forEach(btn => {
        btn.addEventListener('click', (event) => {
          console.log(event.target.dataset.isbn)
          let isbn = event.target.dataset.isbn
          fetch(getUrl('books/delete/' + isbn), {method:'DELETE'})
          .then(response => response.text())
          .then(data => {
            console.log(data)
            getBooksData()
          })
        })
      })
      console.log(data)
    });
}

getBooksData()