import {async} from 'regenerator-runtime';
import Book from './Book.js';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    book: {},
    books:[],
};

const createArrayBooksObjects = function (data){
    var books = [];
          data.items.forEach(book => {
              var bookObj = new Book(book.id,
                  book.volumeInfo.title, 
                  book.volumeInfo.subtitle,
                  book.volumeInfo.authors,
                  book.volumeInfo.description,
                  book.volumeInfo.averageRating,
                  book.volumeInfo.publishedDate,
                  book.volumeInfo.publisher,
                  book.volumeInfo.categories,
                  book.volumeInfo.language,
                  book.volumeInfo.pageCount,
                  book.volumeInfo.imageLinks.thumbnail,
                  book.accessInfo.pdf.isAvailable,
                  book.accessInfo.pdf.acsTokenLink,
                  book.accessInfo.epub.isAvailable);
  
              books.push(bookObj);
          });
  
    return books;
}

export const loadBook = async function(id){
    try{
        const data = await getJSON(`${API_URL}/${id}?key=${process.env.REACT_APP_API_KEY}`);
        
        state.book = new Book(data.id,
                            data.volumeInfo.title,
                            data.volumeInfo.subtitle,
                            data.volumeInfo.authors,
                            data.volumeInfo.description,
                            data.volumeInfo.averageRating,
                            data.volumeInfo.publishedDate,
                            data.volumeInfo.publisher,
                            data.volumeInfo.categories,
                            data.volumeInfo.language,
                            data.volumeInfo.pageCount,
                            data.volumeInfo.imageLinks.thumbnail,
                            data.accessInfo.pdf.isAvailable,
                            data.accessInfo.pdf.acsTokenLink,
                            data.accessInfo.epub.isAvailable);
        
        state.books = [];
        state.books.push(state.book);
    } catch(err){
        throw err;
    }
};

export const loadAllBooks = async function(){
    try{
        const data = await getJSON(`${API_URL}?q=search-terms&printType=books&maxResults=10&orderBy=relevance&key=${process.env.REACT_APP_API_KEY}`);

        state.books = createArrayBooksObjects(data);
    } catch(err){
        throw err;
    }
};

export const loadBookByTitleAndAuthor = async function(title, author){
    try{
    const data = await getJSON(`${API_URL}?q=+intitle:${title}+inauthor:${author}&maxResults=1&printType=books&key=${process.env.REACT_APP_API_KEY}`);

    state.books = createArrayBooksObjects(data);
    } catch(err){
        throw err;
    }
};