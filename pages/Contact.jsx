import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {



    return (
      <>
        <div className="container my-5 py-5  p-2" >
          <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Control type="title" placeholder="Title" />
                  </Form.Group>
                  <FloatingLabel controlId="floatingTextarea" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                  <Button variant="dark">Submit</Button>
                </Form>
                <br /><br />
<div>
  <h3><FontAwesomeIcon icon={faPhone} /> Call to Us </h3> 
  <p className='text-secondary'>We're available from 10 am - 10 pm EST,7 days a week.</p>
  <h5>Customer Service:</h5>
  <p className='text-secondary'>3-376-798-567</p>
  <h5>Careers:</h5>
  <p className='text-secondary'>3-376-798-568</p>
</div>



<hr />
<div>
  <h3><FontAwesomeIcon icon={faEnvelope} />Write to Us </h3> 
  <p className='text-secondary'>Fill out form and we will contact you within 24 hours.</p>
  <h5>Customer Service:</h5>
  <p className='text-secondary'>umartzz@Limited.com</p>
  <h5>Careers:</h5>
  <p className='text-secondary'>umatzzcareer@Limited.com</p>
</div>
<hr />
<div>
  <h3><FontAwesomeIcon icon={faHandPointRight} />Find Us </h3> 
  <p className='text-secondary'>Want to visit our help center.  <FontAwesomeIcon icon={faArrowRight} /></p></div>
          </div>
        </div>
      </>
    );
  }
