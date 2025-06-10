import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import SmallBanner from './SmallBanner';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ mode }) => {
  const context = useContext(ProductContext);

  const {
    state: { cart },
    dispatch,
  } = context;

  console.log('Nav Cart: ', cart);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
        <SmallBanner
          title='Cart Items'
          mode={mode}
        />
        <div className='container px-5 py-5 text-center'>
          <div className='row'>
            <div className='col-md-2'>Image</div>
            <div className='col-md-2'>Title</div>
            <div className='col-md-3'>Description</div>
            <div className='col-md-2'>Price</div>
            <div className='col-md-2'>Quantity</div>
          </div>
        </div>
        <div className='container px-5 pe-5'>
          <div className='cartContainer'>
            <ul className='product-list'>
              {cart?.map((item) => (
                <li
                  key={item._id}
                  style={{ listStyle: 'none' }}
                >
                  <div className='row'>
                    <div className='col-md-2'>
                      <img
                        src='./apple.png'
                        alt='Product Image'
                        style={{ height: '64px', width: '64px' }}
                      />
                    </div>
                    <div className='col-md-2'>
                      <h6>{item.title}</h6>
                    </div>
                    <div className='col-md-3'>
                      <h6>{item.description}</h6>
                    </div>
                    <div className='col-md-2'>
                      <h6>{item.price}</h6>
                    </div>
                    <div className='col-md-2'>
                      <select
                        value={item.qty}
                        onChange={(e) => {
                          dispatch({
                            type: 'UPDATE_CART_ITEM',
                            payload: { _id: item._id, qty: e.target.value },
                          });
                        }}
                        className='form-control'
                      >
                        {[...Array(item.instock).keys()].map((x) => (
                          <option
                            value={x + 1}
                            key={x + 1}
                          >
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='col-md-1'>
                      <button
                        className={`mx-2 bg-transparent border-0  ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item,
                          })
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='summary d-flex flex-column align-items-end py-5'>
            <div>Total Items: {cart.length}</div>
            <h4>Sub-Total: {total}</h4>
            <button className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2`}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
