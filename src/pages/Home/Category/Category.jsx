// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>This category news: {categoryNews.length}</h2>
        </div>
    );
};

export default Category;