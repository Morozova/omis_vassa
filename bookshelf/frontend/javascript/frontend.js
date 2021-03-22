
let url = 'http://localhost'
let port = 3000

let btnEdit = undefined
let btnDelete = undefined

let btnEditClicked = false
let isbn = ''

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
        btnEdit.setAttribute('data-isbn', book.isbn)

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
          isbn = event.target.dataset.isbn
          fetch(getUrl('books/delete/' + isbn), { method: 'DELETE' })
            .then(response => response.text())
            .then(data => {
              console.log(data)
              getBooksData()
            })
        })
      })

      let buttonsEdit = document.getElementsByClassName('edit')
      Array.from(buttonsEdit).forEach(btn => {
        btn.addEventListener('click', (event) => {
          //console.log(event.target.dataset.isbn)

          btnEditClicked = true

          isbn = event.target.dataset.isbn
          $('#exampleModal').modal('show')
        })
      })
      console.log(data)
    });
}

getBooksData()



$('#exampleModal').on('show.bs.modal', function (event) {
  console.log('modal event is fired')

  fetch('../frontend/form.html')
    .then(response => response.text())
    .then(data => {
      console.log(data)

      let modal = document.getElementById('exampleModal')
      let body = modal.querySelector('div[class="modal-body"]')
      let title = modal.querySelector('h5[class="modal-title"]')
      body.innerHTML = data

      if (btnEditClicked == false) {
        title.innerText = 'Add new book'
    } else {
      title.innerText = 'Edit book: ' + isbn

    fetch(getUrl('books/' + isbn))
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let inputIsbn = document.getElementById('isbn')
      inputIsbn.value = data.isbn
      inputIsbn.setAttribute('disabled' , 'disabled')
      //TODO for esch input own data
    })
  }
})
})


let btnSaveChanges = document.getElementById('btnSaveChanges')
btnSaveChanges.addEventListener('click', (event) => {//ljamda

  let frm = document.getElementById('frm')
  let data = []
  for (let index = 0; index < frm.elements.length; index++) {
    data[frm.elements[index].name] = frm.elements[index].value
  }
  let frmData = Object.assign({}, data)


  fetch(getUrl('book/add'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(frmData)
  })
  .then(res => {
      res.text()
      console.log(res.status)
      if (res.status >= 400) {
        throw new Error("Error" + res.status)
      }
    })
    .then(res => {
      console.log(res)
      $('#exampleModal').modal('hide')
      getBooksData()
    })
    .catch(err => {
      console.log(err)
    })
})
