import Book from "./books"

class Library {
    getLocationTypes = () => {
        return ['Cafe', 'Street Library', 'Home']
    }

    addBook = () => {
        let book = new Book()
        return book
    }

    collectionSize = () => {
        return 1
    }
}

export default Library
