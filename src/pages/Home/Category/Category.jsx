// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is a category: {id}</h2>
        </div>
    );
};

export default Category;