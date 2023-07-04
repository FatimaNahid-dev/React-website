import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategoriePage() {
  const { categorieName } = useParams();
  const formattedCategoryName = categorieName ? categorieName.toUpperCase() : '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categorieName}`)
      .then((response) => setProducts(response.data));
  }, [categorieName]);

  return (
    <div className="container">
      <div className="my-5 py-5 text-center">
        <h1>{formattedCategoryName}</h1>
      </div>

      <div className="row">
        {products.map((product, key) => (
          <div className="col-md-6 my-4" key={key}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title} - {product.price}$</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
