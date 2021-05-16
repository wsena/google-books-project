import * as model from './model.js';
import bookView from './views/bookView.js';
import Book from './Book.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

function renderBook() {
    bookView.render(model.state.books[0]);
};

const controlBooks = async function () {
    try {

        const id = window.location.hash.slice(1);
        
        if(!id) return;
        
        bookView.renderSpinner();

        await model.loadBook(id);

        renderBook();
    } catch (err) {
        bookView.renderError();
    }
}

const getBookByNameAndAuthor = async function(bookName, bookAuthor){
  try{
    bookView.renderSpinner();

    await model.loadBookByTitleAndAuthor(bookName, bookAuthor);

    renderBook();

  }catch(err){
    bookView.renderError();
    }
}

const getAllBooks = async function () {
    try {
        bookView.renderSpinner();
        
        await model.loadAllBooks();

        renderBook();
    } catch (err) {
      bookView.renderError();
    }
};

const init = function(){
    bookView.addHandlerRender(controlBooks);
}

//controlBooks("Mw8LEAAAQBAJ");
//getAllBooks();
//getBookByNameAndAuthor('A Little Life', 'Hanya');
init();