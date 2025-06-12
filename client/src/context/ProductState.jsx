import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import { useState } from 'react';
import { cartReducer } from './Reducer';

const ProductState = (props) => {
  const products = [
    {
      _id: 1,
      title: 'Apple',
      description: 'This is a local product of mustang',
      price: 200,
      instock: 5,
    },
    {
      _id: 2,
      title: 'Mango',
      description: 'This is a local product of terai',
      price: 300,
      instock: 2,
    },
    {
      _id: 3,
      title: 'Banana',
      description: 'This is a local product of gorkha',
      price: 150,
      instock: 3,
    },
    {
      _id: 4,
      title: 'Grapes',
      description: 'This is a local product of ilam',
      price: 400,
      instock: 4,
    },
  ];

  const [product, setProduct] = useState(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

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

  const allProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/produt/getproduct', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'sdhgaskbgkasdasd2312',
        },
      });
      const data = await response.json();
      setProduct(data);
      console.log('Data From Backend: ', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <ProductContext.Provider value={{ state, dispatch, product, allProduct, setProduct, count, setCount, news, fetchData }}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductState;
