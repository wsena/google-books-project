import icons from 'url:../../img/icons.svg';

class bookView{
    #parentElement = document.querySelector('.book');
    #data;
    #errorMessage = "We could not find the book you're looking for. Please try another one!";
    #message = '';

    render(data){
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderSpinner(){
        const markup = `<div class="spinner">
        <svg>
            <use href="${icons}#icon-loader"></use>
        </svg>
        </div>`;
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this.#errorMessage){
      const markup = `<div class='error'>
                      <div>
                        <svg>
                          <use href='${icons}#icon-alert-triangle'></use>
                        </svg>
                      </div>
                      <p>${message}</p>
                    </div>`;
      this.#clear();
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderMessage(message = this.#message){
      const markup = `<div class='message'>
                      <div>
                        <svg>
                          <use href='${icons}#icon-smile'></use>
                        </svg>
                      </div>
                      <p>${message}</p>
                    </div>`;
      this.#clear();
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    addHandlerRender(handler){
      var events = ['hashchange', 'load'];
      events.forEach(event => window.addEventListener(event, handler));
    }

    #clear(){
        this.#parentElement.innerHTML = "";
    };

    #generateMarkup(){
        return `
        <figure class="">
        <img src="${this.#data.imageLink}" alt="${this.#data.title}" class="" />
        <h1 class="">
          <span>${this.#data.title.toUpperCase()}</span>
        </h1>
        <h2>${this.#data.subtitle}</h2>
      </figure>
      <div class="book__details">
        <div class="book__info">
          <svg class="book__info-icon">
            <use href="${icons}#icon-bookmark"></use>
          </svg>
          <span class="book__info-data book__info-data--minutes">${this.#data.pageCount}</span>
          <span class="book__info-text">pages</span>
        </div>
        <div class="book__info">
          <svg class="book__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="book__info-text">${this.#data.authors.toString()}</span>
        </div>
        <div class="book__info">
        <svg class="book__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
        
            <span class="book__info-data book__info-data--people">${this.#data.publishedDate}</span>
        </div>
        <button class="btn--round">
            <span>${this.#data.language}</span>
        </button>
      </div> 
      <div class="book__ingredients">
        <h2 class="heading--2">Description</h2>
        <div>
            <p><span class="book__info-text">${this.#data.description}</span></p>
        </div>
      </div>
      <div class="book__directions">
        <h2 class="heading--2">PUBLISHER</h2>
        <div>
          <p><span class="book__directions-text">${this.#data.publisher}</span></p>
        </div>
      </div>
    
      <div class="book__ingredients">
        <h2 class="heading--2">Category</h2>
        <p class="book__directions-text">
          ${this.#data.categories.toString()}
        </p>
        <a
          class="btn--small book__btn"
          href="${this.#data.pdfLink}"
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