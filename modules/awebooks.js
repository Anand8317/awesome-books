export class AwesomeBooks {
  booksList = [];

  addToBooksList = (title, author) => {
    const book = {
      tit: title,
      aut: author,
    };
    this.booksList.push(book);
  };

  removeBook = (ix) => {
    this.booksList.splice(ix, 1);
  };

  displayBooks = () => {
    const bookSection = document.querySelector('.books-list');
    bookSection.innerHTML = '';

    for (let i = 0; i < this.booksList.length; i += 1) {
      bookSection.innerHTML += `
        <div class="bookWrapper">
        <p>${this.booksList[i].tit} by ${this.booksList[i].aut}</p>
        <button id="${i}" class="rmv" type='button'>Remove</button>
        </div>
      `;
    }
  };
}