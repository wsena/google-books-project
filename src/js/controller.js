import * as model from './model.js';
import bookView from './views/bookView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot){
    module.hot.accept();
}

const controlBooks = async function() {
    try {

        const id = window.location.hash.slice(1);
        
        if(!id) return;
        
        bookView.renderSpinner();

        await model.loadBook(id);

        bookView.render(model.state.book);
    } catch (err) {
        bookView.renderError();
    }
};

const controlSearchResults = async function(){
    try{
        bookView._clear();
        resultsView.renderSpinner();

        const query = searchView.getQuery();

        if(!query) return;

        await model.loadSearchResults(query);
        resultsView.render(model.state.search.results);
    } catch(err){
        bookView.renderError();
    }
};

const getBookByNameAndAuthor = async function(bookName, bookAuthor){
  try{
    bookView.renderSpinner();

    await model.loadBookByTitleAndAuthor(bookName, bookAuthor);

    bookView.render(model.state.books[0]);

  }catch(err){
    bookView.renderError();
    }
}

const getAllBooks = async function () {
    try {
        bookView.renderSpinner();
        
        await model.loadAllBooks();

        bookView.render(model.state.books[0]);
    } catch (err) {
      bookView.renderError();
    }
};

const init = function(){
    bookView.addHandlerRender(controlBooks);
    searchView.addHandlerSearch(controlSearchResults);
}

init();