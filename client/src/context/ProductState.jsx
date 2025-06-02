import React from 'react';
import ProductContext from './ProductContext';
import { useState } from 'react';

const ProductState = (props) => {
  const product = {
    id: 1,
    name: 'Apple',
    description: 'This is a local product of mustang',
    price: 200,
  };

  const [count, setCount] = useState(10);

  const [news, setnews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e09d9f7d5a38417fac4d41c193572a25');
      const data = await response.json();
      setnews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      setnews({ articles: [] });
    }
  };

  return (
    <>
      <ProductContext.Provider value={{ product, count, setCount, news, fetchData }}>{props.children}</ProductContext.Provider>
    </>
  );
};

export default ProductState;
