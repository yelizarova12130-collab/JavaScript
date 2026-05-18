// створити масив книжок (назва, кількість сторінок, автори , жанри).
//

let books = [
    {title: 'Harry Potter and the Sorcerers Stone',
    pages: 309,
    authors: ['J.K. Rowling'],
    genres: ['fantasy', 'adventure']
    },

    {title: 'The Lord of the Rings: The Fellowship of the Ring',
    pages: 423,
    authors: ['J.R.R. Tolkien'],
    genres: ['High Fantasy', 'Adventure', 'Epic Fantasy']
    },

    {title: 'Good Omens',
    pages: 288,
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    genres: ['fantasy', 'comedy']
    },

    {title: 'A Game of Thrones',
    pages: 694,
    authors: ['George R.R. Martin'],
    genres: ['fantasy', 'epic', 'Historical fantasy']
    },

    {title: 'The Hitchhikers Guide to the Galaxy',
    pages: 193,
    authors: ['Douglas Adams'],
    genres: ['satire', 'comedy', 'adventure']
    }
]

// – знайти найбільшу книжку.
let maxPages = books[0];
for (let book of books) {
    if (book.pages > maxPages.pages ) {
        maxPages = book;
    }
}
console.log('Найбільша книжка:', maxPages.title);

//– знайти книжку/ки з найбільшою кількістю жанрів

let maxGenres = 0;
for (let book of books) {
    if (book.genres.length > maxGenres) {
        maxGenres = book.genres.length;
    }
}
for (let book of books) {
    if (book.genres.length === maxGenres) {
        console.log( 'Найбільша кількість жанрів:',book.title);
    }
}

// – знайти книжку/ки з найдовшою назвою

let longestName = 0;
for (let book of books) {
    if (book.title.length > longestName) {
        longestName = book.title.length;
    }
}
    for (let book of books) {
        if (book.title.length === longestName) {
            console.log('Найдовша назва книги:', book.title)
        }
    }

//– знайти книжку/ки, які писали 2 автори

for (let book of books) {
    if ( book.authors.length === 2){
    console.log ('Написали 2 автори:',book.title);
    } else if (book.authors.length === 1){
        console.log ('Написав 1 автор:',book.title);
    }
}


