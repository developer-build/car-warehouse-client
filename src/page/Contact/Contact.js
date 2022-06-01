import React, {Fragment} from 'react';
import phone from '../../image/logo/phone.png'
import email from '../../image/logo/eamil.png'
import location from '../../image/logo/location.png'
import website from '../../image/logo/website.png'
import contact from '../../image/banner/contact.png'
import './Contact.css'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <Fragment>
      <section> 
        <div className="row mx-auto text-center py-5 px-3">
          <div className="col-md-3">
            <img src={phone} alt="" />
             <p>Phone: <span className='text-primary'>+123456789</span></p>
          </div>
          <div className="col-md-3">
            <img src={email} alt="" />
            <p>Email: <span className='text-primary'>windsorcarwarehouse@gmail.com</span></p>
          </div>
          <div className="col-md-3">
            <img src={location} alt="" />
            <p>Location: <span className='text-primary'>198 West 21th Street, New York</span></p>
          </div>
          <div className="col-md-3">
            <img src={website} alt="" />
            <p>Website: <span className='text-primary'>www.windsorcarwarehouse.com</span></p>
          </div>
        </div>
        <div className="row mx-auto py-5 align-items-center">
          <div className="col-md-6">
             <div className='form_container'>
             <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='ms-1' >Full Name</Form.Label>
                  <Form.Control className='w-100 lg-w-0' type="email" required placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='ms-1' >Subject</Form.Label>
                  <Form.Control className='w-100 lg-w-0' type="email" required placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='ms-1' >Email</Form.Label>
                  <Form.Control className='w-100 lg-w-0' type="email" required placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='ms-1' >Message</Form.Label>
                  <Form.Control className='message w-100 lg-w-0' rows={3} />
                </Form.Group>
                <Button className='btn_style'>Send Message</Button>
              </Form>
             </div>
          </div>
          <div className="col-md-6 contact-img ">
            <img src={contact} alt="" />
          </div>
        </div>


      </section>
    </Fragment>
  );
};

export default Contact;