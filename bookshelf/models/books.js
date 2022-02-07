class Book {

    addDetails(){
        return 'add book details'
    }

    updateBookLocation(){
        return 'update the location of the book'
    }

    getDetails(){
        return this.bookDetails
    }

    setBookStatus(){
        return 'set the book status'
    }

    getBookStatus(){
        return this.bookStatus
    }
}

export default Book