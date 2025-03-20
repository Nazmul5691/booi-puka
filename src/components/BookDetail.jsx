import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const {bookId} = useParams();

    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    const {image} = book;

    

    return (
        <div className="py-20">
            <h1>book details of : {bookId}</h1>
            <img src={image} className="w-52" alt="" />
            <div className="py-4 gap-4 flex">
                <button className="btn btn-active">Read</button>
                <button className="btn btn-active btn-primary">WishList</button>
            </div>
        </div>
    );
};

export default BookDetail;


// const data = useLoaderData();
    // const id = parseInt(bookId);

    // const book = data.find(book => book.bookId === id)

    // const { bookId: currentBookId, image } = book;