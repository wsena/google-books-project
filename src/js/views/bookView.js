import icons from 'url:../../img/icons.svg';
import View from './View.js';

class bookView extends View {
  addHandlerRender(handler) {
    var events = ['hashchange', 'load'];
    events.forEach(event => window.addEventListener(event, handler));
  };
  _generateMarkup() {
    return `
        <figure class="">
        <img src="${this._data.imageLink}" alt="${this._data.title}" class="" />
        <h1 class="">
          <span>${this._data.title.toUpperCase()}</span>
        </h1>
        <h2>${this._data.subtitle}</h2>
      </figure>
      <div class="book__details">
        <div class="book__info">
          <svg class="book__info-icon">
            <use href="${icons}#icon-bookmark"></use>
          </svg>
          <span class="book__info-data book__info-data--minutes">${this._data.pageCount}</span>
          <span class="book__info-text">pages</span>
        </div>
        <div class="book__info">
          <svg class="book__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="book__info-text">${this._data.authors.toString()}</span>
        </div>
        <div class="book__info">
        <svg class="book__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
        
            <span class="book__info-data book__info-data--people">${this._data.publishedDate}</span>
        </div>
        <button class="btn--round">
            <span>${this._data.language}</span>
        </button>
      </div> 
      <div class="book__ingredients">
        <h2 class="heading--2">Description</h2>
        <div>
            <p><span class="book__info-text">${this._data.description}</span></p>
        </div>
      </div>
      <div class="book__directions">
        <h2 class="heading--2">PUBLISHER</h2>
        <div>
          <p><span class="book__directions-text">${this._data.publisher}</span></p>
        </div>
      </div>
    
      <div class="book__ingredients">
        <h2 class="heading--2">Category</h2>
        <p class="book__directions-text">
          ${this._data.categories.toString()}
        </p>
        <a
          class="btn--small book__btn"
          href="${this._data.pdfLink}"
          target="_blank"
        >
          <span>Download BOOK</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
  };
};

export default new bookView();