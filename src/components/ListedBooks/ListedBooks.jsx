import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();

        const storedReadListInt = storedReadList.map(id => parseInt(id))

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='my-8'>This is Listed Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content {readList.length}</h2>
                    <div>
                        {
                            readList.map(book => <Book book={book} key={book.bookId}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;