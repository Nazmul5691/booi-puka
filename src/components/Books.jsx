import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center py-10">Books</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;