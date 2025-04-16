import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookName, author, image, tags, category, rating, bookId } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card p-4 border-2">
                <figure className='bg-[#F3F3F3] rounded-xl py-6'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-actions mt-8">
                    {
                        tags.map((tag, index) => <div key={index} className="badge badge-outline bg-[#23BE0A0D] border-none text-[#23BE0A] p-4 font-medium">{tag}</div>)
                    }
                </div>
                <div className="mt-4">
                    <h2 className="card-title">
                        {bookName.slice(0, 32)}
                    </h2>
                    <p className='mt-1'>by: {author}</p>
                </div>
                <div className="border-t-2 border-dashed my-4"></div>
                <div className='flex justify-between'>
                    <p>{category}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;