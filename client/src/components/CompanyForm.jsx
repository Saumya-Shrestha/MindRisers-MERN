import React, { useState } from 'react';
import SmallBanner from './SmallBanner';

const CompanyForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The form has been submitted.');
  };

  return (
    <>
      <SmallBanner title='Company Registration' />
      <div className={`container-fluid py-5 bg-${mode} ${mode === 'dark' ? 'text-light' : ''}`}>
        <h3 className='fs-2 fw-bold text-center'>Let's Register Your Company!</h3>
      </div>
      <div className={`container-fluid pb-5 bg-${mode}`}>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-5'>
            <div className={`card ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label
                      htmlFor='companyName'
                      className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                    >
                      Company Name
                    </label>
                    <input
                      type='text'
                      className={`form-control ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                      id='companyName'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter company name'
                    />
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='companyAddress'
                      className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                    >
                      Address
                    </label>
                    <input
                      type='text'
                      className={`form-control ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                      id='companyAddress'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      placeholder='Enter address'
                    />
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='companyPhone'
                      className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                    >
                      Phone
                    </label>
                    <input
                      type='tel'
                      className={`form-control ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                      id='companyPhone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter phone number'
                    />
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='companyEmail'
                      className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      className={`form-control ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                      id='companyEmail'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter email address'
                    />
                  </div>
                  <button className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2 mt-2`}>Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-md-5 d-flex align-items-center'>
            <div className={`w-100 p-4 border rounded ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-white'}`}>
              <h5 className='mb-3'>Live Preview</h5>
              <ul className='list-group list-group-flush ps-0'>
                <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}>
                  <strong>Company Name:</strong> {formData.name || 'N/A'}
                </li>
                <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}>
                  <strong>Address:</strong> {formData.address || 'N/A'}
                </li>
                <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}>
                  <strong>Phone:</strong> {formData.phone || 'N/A'}
                </li>
                <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}>
                  <strong>Email:</strong> {formData.email || 'N/A'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyForm;
