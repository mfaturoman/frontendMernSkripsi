import React from 'react'
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "react-router-dom";
import '../styles/thank-you.css'

const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12" className="pt-5 text-center">
                    <div className="thank__you">
                        <span>
                            <i class="ri-checkbox-circle-line"></i>
                        </span>
                        <h1 className="mb-3 fw-semibold">Terima Kasih</h1>
                        <h3 className="mb-4">Pesanan Kamu sudah di booking</h3>

                        <Button className="btn primary__btn w-25">
                            <Link to="/home">Kembali Kehalaman sebelumnya</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou