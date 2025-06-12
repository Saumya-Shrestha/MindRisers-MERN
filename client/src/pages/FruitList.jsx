import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { BsThreeDots } from 'react-icons/bs';
import EditProductModal from '../components/EditProductModal';
// import { useNavigate } from 'react-router-dom';

const FruitList = () => {
  const context = useContext(ProductContext);
  // const navigate = useNavigate();

  const {
    product,
    allProduct,
    state: { cart, products },
    dispatch,
  } = context;
  console.log('Cart: ', cart);
  console.log('Product: ', products);

  // const handleFruit = (fruit) => {
  //   console.log('You clicked on fruit: ', fruit.title);
  //   navigate(`${fruit._id}/${fruit.title}/${fruit.description}/${fruit.price}/${fruit.instock}`);
  // };

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    console.log('Fruit ID: ', id);
    setMenuVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    console.log('Edit item id: ', product._id);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = (updateData) => {
    console.log('Save Edit Product: ', updateData);
    // editProduct(selectedProduct._id, updateData);
  };

  const openDeleteModal = (id) => {
    console.log('Delete item id: ', id);
  };

  useEffect(() => {
    allProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                      <BsThreeDots onClick={() => toggleMenu(fruit._id)} />
                      {menuVisible[fruit._id] && (
                        <div className='menu-options'>
                          <button onClick={() => openEditModal(fruit)}>Edit</button>
                          <button onClick={() => openDeleteModal(fruit._id)}>Delete</button>
                        </div>
                      )}
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
                {modalVisible && selectedProduct && selectedProduct._id === fruit._id && (
                  <EditProductModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={saveEdit}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FruitList;
