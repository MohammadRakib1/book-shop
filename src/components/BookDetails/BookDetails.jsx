import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image } = book;

    const handleRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className='max-w-6xl mx-auto my-12'>
            <h2>This is a book details {bookId}</h2>
            <img className='w-36' src={image} alt="" /><br />
            <button onClick={() => handleRead(bookId)} className='btn btn-outline btn-accent mr-4'>Read</button>
            <button className='btn btn-accent'>Wishlist</button>
        </div>
    );
};

export default BookDetails;