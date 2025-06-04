// import React, { useContext, useEffect } from 'react';
import b1 from '../assets/blog/blog-1.jpg';
import b2 from '../assets/blog/blog-2.jpg';
import SmallBanner from '../components/SmallBanner';
import AboutCard from '../components/AboutCard';
import ProductContext from '../context/ProductContext';
import { UserContext } from '../context/UserContext';

const About = ({ mode }) => {
  // const context = useContext(ProductContext);
  // const { product, count, news, fetchData } = context;
  // console.log('Product: ', product);
  // console.log('Count: ', count);
  // console.log('News:', news);

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const userContext = useContext(UserContext);
  // const { user } = userContext;
  // console.log('User: ', user);

  return (
    <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
      <SmallBanner
        title='About Us'
        mode={mode}
      />

      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8'>
            <h2 className='display-5 mb-4'>Our journey began with a passion for creating extraordinary hospitality experiences.</h2>
            <button
              type='button'
              className={`btn ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-3 mb-4`}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row pb-5'>
          <AboutCard
            title='Our Vision'
            text='From elegant suites to immersive dining experiences, we infuse every moment with a touch of luxury and care. We believe that exceptional hospitality can create unforgettable memories and build connections that last a lifetime.'
            mode={mode}
            image={b1}
          />
          <AboutCard
            title='Our Mission'
            text='We strive to exceed expectations through personalized service and attention to detail. Our dedicated team works tirelessly to ensure that every guest experiences the perfect blend of comfort, luxury, and authentic local culture.'
            mode={mode}
            image={b2}
          />
        </div>
      </div>

      {/* <div className='container py-5'>
        <h4>Product Details:</h4>
        <h5>Product ID: {product.id} </h5>
        <h5>Product Name: {product.name} </h5>
        <h5>Product Description: {product.description} </h5>
        <h5>Product Price: {product.price} </h5>
      </div> */}

      {/* <div className='container py-5'>
        <h4>User Details:</h4>
        <h5>User Name: {user.name} </h5>
        <h5>User ID: {user.id} </h5>
        <h5>User Gender: {user.gender} </h5>
        <h5>User Age: {user.age} </h5>
      </div> */}
    </div>
  );
};

export default About;
