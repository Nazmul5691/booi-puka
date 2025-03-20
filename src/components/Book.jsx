import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookName, author, image, tags, bookId } = book;

    return (
        <Link to={`book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-lg p-6">
                <figure className="bg-gray-300 ">
                    <img
                        src={image}
                        className="h-[180px] py-6"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-8 items-center justify-center">
                       {
                        tags.map(tag =>(
                            <div className="badge badge-outline">{tag}</div>
                        ))
                       }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    
                </div>
            </div>
        </Link>
    );
};

export default Book;