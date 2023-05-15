import React , {useRef, useState }from 'react';
import '../styles/booking-detail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import {useParams} from 'react-router-dom'
import bookingData from '../assets/data/booking'
import calculateAvgRating from '../rating/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

const BookingDetail = () => {
  const {id} = useParams();
  const reviewMsgRef = useRef('')
  const [bookingRating, setBookingRating]=useState(null)

  // ini statik data setelah kita memanggil semua API dan menyimpan data dari database
  const booking = bookingData.find(booking=> booking.id === id)

  // properti distruktur dari objek booking
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = booking
  
  const {totalRating, avgRating} = calculateAvgRating(reviews);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" }; 

  // submit request to the server 
  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    
    alert(`${reviewText}, ${bookingRating}`);
    
    // setelah akan memanggil api kita
  }

  return <>

  <section>
    <Container>
      <Row>
        <Col lg="8">
          <div className="booking__content">
            <img src={photo} alt="" />

            <div className="booking__info">
              <h2>{title}</h2>

              <div className="d-flex align-items-cemter gap-5">
              <span className="booking__rating d-flex align-items-center gap-1">
                    <i 
                      class="ri-star-fill"
                      style={{ color: "var(--secondary-color" }}  
                    ></i> 
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        "Not rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                </span>

                <span>
                  <i class="ri-map-pin-fill"></i> {address}
                </span>
              </div>

              <div className="booking__extra-details">
                <span>
                  <i class="ri-map-pin-2-line"></i> {city}
                </span>
                <span>
                  <i class="ri-money-dollar-circle-line"></i> Rp.{price} / per person
                </span>
                <span>
                  <i class="ri-money-dollar-circle-line"></i> {distance} k/m
                </span>
                <span>
                  <i class="ri-group-line"></i> {maxGroupSize}
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>

            {/* booking review */}
            <div className="booking__reviews mt-4">
              <h4>Reviews ({reviews?.length} reviews)</h4>

              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-3 rating__group">
                  <span onClick={()=> setBookingRating(1)}>
                    1 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=> setBookingRating(2)}>
                    2 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=> setBookingRating(3)}>
                    3 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=> setBookingRating(4)}>
                    4 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=> setBookingRating(5)}>
                    5 <i class="ri-star-s-fill"></i>
                  </span>
                </div>

                <div className="review__input">
                  <input 
                    type="text" 
                    ref={reviewMsgRef} 
                    placeholder="share your thoughts" 
                    required
                  />
                  <button
                    className="btn primary__btn text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>

              <ListGroup className="user__reviews">
                {
                  reviews?.map(revies=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>Bambang</h5>
                            <p>
                              {new Date("01-18-2023").toLocaleDateString(
                                "en-US", 
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-itens-center">
                            5 <i class="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>Tempatnya Bagus</h6>
                      </div>
                    </div>
                  ))}
              </ListGroup>
            </div>
            {/* booking reviews end */}
          </div>
        </Col>

        <Col lg='4'>
          <Booking booking={booking} />
        </Col>
      </Row>
    </Container>
  </section>
  </>
};

export default BookingDetail;