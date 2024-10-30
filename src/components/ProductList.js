// ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 20 },
  { id: 2, name: 'Snake Plant', category: 'Air Purifier', price: 15 },
  { id: 3, name: 'Spider Plant', category: 'Small', price: 10 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {plants.map((plant) => (
        <div key={plant.id} className="product-item">
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
