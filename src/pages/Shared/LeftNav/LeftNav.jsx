// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editors from '../../Home/Editors/Editors';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(err=>console.log(err))
    },[])
    return (
      <>
        <h4 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          All Category
        </h4>
        <div className="ps-4">
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                to={`/category/${category.id}`}
                className="text-black text-decoration-none"
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
        <div>
          <Editors></Editors>
        </div>
      </>
    );
};

export default LeftNav;