import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ProductPage from '../../pages/ProductPage';
import Electronics from '../../src/assets/Electronics.jpg';
import Jwellery from '../../src/assets/Jwellery.jpg';
import Men from '../../src/assets/Men.jpg';
import Womens from '../../src/assets/Womens.jpg';

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  const images = [Electronics, Jwellery, Men, Womens];

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>PRODUCT CATEGORIES</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus!
        </p>
      </div>
      <div className="p-5 card-deck">
        {categories.map((val, key) => (
          <div className="col-md-6 my-3" key={key}>
            <Link className="text-decoration-none" to={`/products/category/${val}`}>
              <Card style={{ height: '100%' }}>
                <Card.Body>
                  <Card.Img variant="top" src={images[key]} alt={`category ${val}`} className="" />
                  <Card.Title>{val.toUpperCase()}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
