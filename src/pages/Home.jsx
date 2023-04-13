import React from 'react';
import '../styles/home.css';

import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/futsal1.jpg';
import heroImg02 from '../assets/images/futsal2.jpg';
import heroImg03 from '../assets/images/futsal3.jpg';
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedBookingList from '../components/Featured-booking/FeaturedBookingList';

import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  
  {/* hero section start */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'pesanan ada di tanganmu'}/>
            </div>
            <h1>
              Temukan dan rasakan kemudahan dalam memesan Tempat Futsal untuk menciptakan kenangan bermain{" "}
              <span className="highlight">Futsalmu</span> 
            </h1>
            <p>
              WFutsal adalah aplikasi yang menyediakan layanan booking secara detail yang akan memberikan anda pengalaman dalam menemukan tempat futsal secara mudah di sekitar anda.
            </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg03} alt="" />
          </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* hero section start*/}
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h5 className="services__subtitle">Apa yang kami tawarkan</h5>
          <h2 className="services__title">Kami Menawarkan Layanan Terbaik kami</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/* booking start */}
  <section>
    <Container>
      <Row>
        <Col lg="12" className="mb-5">
          <Subtitle subtitle={"Jelajahi"} />
          <h2 className="featured__booking-title">Berbagai Macam Tempat Futsal</h2>
        </Col>
        <FeaturedBookingList />
      </Row>
    </Container>
  </section>

  {/* Testimonial start */}
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <Subtitle subtitle={'Komentar'} />
          <h2 className="testimonial__title">Pendapat Teman-Teman terkait Aplikasi Kami</h2>
        </Col>
        <Col lg='12'>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter/>
  </>
};

export default Home;