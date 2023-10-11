const bookCatalog = [];
function addBook(title, author, genre) {
    const book = {
        title: title,
        author: author,
        genre: genre
    };
    bookCatalog.push(book);
    return "Book added";
} 


function showBooks() {
    bookCatalog.forEach((book, index) => {
        console.log(`${index}: ${book.title}`)
    });
    return('[end]')
}

function showBook(index) {
    if (index >= 0 && index < bookCatalog.length) {
        const book = bookCatalog[index];
        console.log('Book Details:');
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Genre: ${book.genre}`);
        return('[end]')
    }
}
