import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    instock: '',
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      console.log('Uploaded File: ', e.target.files[0]);
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The product has been added.');
  };

  return (
    <>
      <div className='container py-5'>
        <div>
          <h5>Add Product</h5>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label
                htmlFor='image'
                className='form-label'
              >
                Image
              </label>
              <input
                type='file'
                multiple
                onChange={handleChange}
                className='form-control'
                id='image'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='title'
                className='form-label'
              >
                Title
              </label>
              <input
                type='text'
                name='title'
                value={product.title}
                onChange={handleChange}
                className='form-control'
                id='title'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='description'
                className='form-label'
              >
                Description
              </label>
              <input
                type='text'
                name='description'
                value={product.description}
                onChange={handleChange}
                className='form-control'
                id='description'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='price'
                className='form-label'
              >
                Price
              </label>
              <input
                type='number'
                name='price'
                value={product.price}
                onChange={handleChange}
                className='form-control'
                id='price'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='instock'
                className='form-label'
              >
                Instock
              </label>
              <input
                type='number'
                name='instock'
                value={product.instock}
                onChange={handleChange}
                className='form-control'
                id='instock'
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
