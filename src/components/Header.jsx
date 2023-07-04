import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function Header() {
  return (
    <>
    <div >
     <Carousel className="container-fluid my-5 py-5  p-2" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1300011868/vector/various-products-on-computer-screen-marketplace-online-shop-e-commerce-concept.jpg?s=1024x1024&w=is&k=20&c=4l_5zs8ryGeoLQryo6TDUl1wR-F5Gr3d78DWHB2uP7s="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Limited time offer: Save big on select items.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1405760376/vector/online-shopping-design-graphic-elements-signs-symbols-mobile-marketing-and-digital-marketing.jpg?s=612x612&w=0&k=20&c=2DSpkY9ktsAfzBOcZUMkZThW3B6kvGYG1cHQ3yeaPJg="
          alt="Second slide"
          style={{ height: '520px' }}
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Shop with confidence: 100% satisfaction guaranteed</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.jpg?s=612x612&w=0&k=20&c=l2uK4zXLwopGjxP3L5Fxn0GFQ129U_qvVLqXvqlcwwM="
          alt="Third slide"
          style={{ height: '520px' }}
        />

        <Carousel.Caption>
          <h3>Shop now and enjoy free shipping!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container-fluid">
    </div>
      <div className="bg-secondary bg-opacity-75">   
        <div  className="d-flex justify-content-center align-items-center">
          <div>
            <img className="featurette-image img-fluid mx-auto" width="600px" src="https://media.istockphoto.com/id/139704755/photo/buy-spelled-in-keys-on-a-laptop.jpg?s=612x612&w=0&k=20&c=1cpX_tllU_-mDkZM4JN-V0sOumt-IFy4-C48vAa9sF0=" alt="" />
          </div>
          <div className="container-fluid ">
            <h1 className="text-dark">About Us</h1>
            <p className="text-light d-flex justify-content-center align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas!</p>
          </div>
          <br />
          <br />
<br />
      </div>
      </div>
      <div className="pt-3 bg-secondary opacity-75">   
        <div  className="d-flex justify-content-center align-items-center">
          <div>
            <img className="featurette-image img-fluid mx-auto" width="600px" src="https://img.freepik.com/premium-vector/mobile-online-shopping-people-buy-dresses-shirts-pants-online-shops-shoppers-buying-internet-sale-flat-illustration-online-clothing-store-discount-total-sale-concept_229548-60.jpg?size=626&ext=jpg&ga=GA1.2.1096207984.1679757788&semt=ais" alt="" />
          </div>
          <div className="container-fluid ">
            <h1 className="text-dark">Our Services</h1>
            <p className="text-light d-flex justify-content-center align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas!</p>
          </div>
          <br />
      </div>
      </div>
      </div>
    </>
  );
}
