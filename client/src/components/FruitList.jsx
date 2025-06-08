import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { BsThreeDots } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

const FruitList = () => {
  const context = useContext(ProductContext);
  // const navigate = useNavigate();

  const {
    product,
    state: { cart, products },
    dispatch,
  } = context;
  console.log('Cart: ', cart);
  console.log('Product: ', products);

  // const handleFruit = (fruit) => {
  //   console.log('You clicked on fruit: ', fruit.title);
  //   navigate(`${fruit._id}/${fruit.title}/${fruit.description}/${fruit.price}/${fruit.instock}`);
  // };

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          {product.map((fruit) => {
            return (
              <div
                key={fruit._id}
                className='col-md-3'
              >
                <div className='card'>
                  <img
                    src='/apple.png'
                    className='card-img-top'
                    alt='Fruit Image'
                  />
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <h5 className='card-title'>{fruit.title}</h5>
                      <BsThreeDots />
                    </div>
                    <p className='card-text'>{fruit.description}</p>
                    <p className='card-text'>Rs. {fruit.price}</p>

                    {cart && cart.some((p) => p._id === fruit._id) ? (
                      <button
                        className='btn btn-danger'
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: fruit,
                          })
                        }
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className='btn btn-primary'
                        onClick={() =>
                          dispatch({
                            type: 'ADD_TO_CART',
                            payload: fruit,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FruitList;
