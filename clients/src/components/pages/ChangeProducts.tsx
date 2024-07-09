import React from 'react';
import './ChangeProdcuts.css';

export default function ChangeProducts() {
  return (
    <div className="change-products-container">
      <form className="change-products-form">
        <h2>Change Products Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="New Name" />
        </div>
        <div className="form-group">
          <label htmlFor="image">New Image</label>
          <input type="text" id="image" name="image" placeholder="New Image" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">New Quantity</label>
          <input type="number" id="quantity" name="quantity" placeholder="New Quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="type">New Type</label>
          <input type="text" id="type" name="type" placeholder="New Type" />
        </div>
        <div className="form-group">
          <label htmlFor="state">New State</label>
          <input type="text" id="state" name="state" placeholder="New State" />
        </div>
        <div className="form-group">
          <label htmlFor="price">New Price</label>
          <input type="number" id="price" name="price" placeholder="New Price" />
        </div>
        <div className="form-group">
          <label htmlFor="description">New Description</label>
          <input type="text" id="description" name="description" placeholder="New Description" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}
