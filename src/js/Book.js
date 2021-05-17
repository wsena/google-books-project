module.exports = class Book{
    constructor(id, title, subtitle = '', authors = [], description = 'No description associated', averageRating, publishedDate, publisher, 
                categories = [], language, pageCount, imageLink, isPdfAvailable, pdfLink, isEpubAvailable){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.description = description;
        this.averageRating = averageRating;
        this.publishedDate = publishedDate;
        this.publisher = publisher;
        this.categories = categories;
        this.language = language;
        this.pageCount = pageCount;
        this.imageLink = imageLink;
        this.isPdfAvailable = isPdfAvailable;
        this.pdfLink = pdfLink;
        this.isEpubAvailable = isEpubAvailable;
    }
}