import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleCustomer from '../assets/images/futsalan.png'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Gabung Sekarang untuk mengakses penuh pengalaman bookingmu.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn newsletter__btn">Gabung</button>
                        </div>

                        <p>dengan bergabung membuat aplikasi ini lebih baik lagi kedepannya.
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={maleCustomer} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Newsletter;