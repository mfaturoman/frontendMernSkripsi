import React, {useState}from 'react';
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"

import { useNavigate } from 'react-router-dom';

const Booking = ({ booking, avgRating }) => {
    const {price, reviews} = booking;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:'1',
        bookAt:''
    })

    const handleChange = e => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 20.000
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    //mengirim data ke server
    const handleClick = e=>{
        e.preventDefault()

        navigate("/thank-you");
    };

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>
                Rp{price} <span>/Per person</span>
            </h3>
            <span className="booking__rating d-flex align-items-center ">
                <i class="ri-star-s-fill"></i>
                {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        {/* Booking form */}
        <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        id="fullname" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        id="phone" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup className="d-flex align-items-center gap-3">
                    <input 
                        type="date" 
                        placeholder="" 
                        id="Bookat" 
                        required 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="guest" 
                        id="guestSize" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
            </Form>
        </div>

        {/* booking botton */}
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5>Rp{price} <i class="ri-close-line"></i> 1 Team</h5>
                    <span> Rp{price}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Service</h5>
                    <span>Rp{serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Total</h5>
                    <span>Rp{totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Pesan Sekarang</Button>
        </div>
    </div>
  );
};

export default Booking;