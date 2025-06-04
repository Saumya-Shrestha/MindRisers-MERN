import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const FruitList = () => {
  const context = useContext(ProductContext);
  const navigate = useNavigate();

  const { product } = context;
  console.log('Product: ', product);

  const handleFruit = (fruit) => {
    console.log('You clicked on fruit: ', fruit.title);
    navigate(`${fruit._id}/${fruit.title}/${fruit.description}/${fruit.price}/${fruit.instock}`);
  };

  return (
    <div>
      {product.map((fruit) => (
        <div
          className='container py-5'
          key={fruit._id}
        >
          <h4>Fruit Details:</h4>
          <h5>Fruit Name: {fruit.title} </h5>
          <h5>Fruit Description: {fruit.description} </h5>
          <h5>Fruit Price: {fruit.price} </h5>
          <h5>Fruit In Stock: {fruit.instock} </h5>
          <button
            className='btn btn-primary'
            onClick={() => handleFruit(fruit)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default FruitList;
