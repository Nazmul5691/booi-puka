

const Book = ({book}) => {

    const {bookName, author, image} = book;

    return (
        <div className="card bg-base-100 w-96 shadow-lg p-6">
            <figure className="bg-gray-300 ">
                <img
                    src={image}
                    className="h-[180px] py-6"
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;