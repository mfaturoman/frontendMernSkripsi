import React from 'react';
import BookingCard from '../../shared/BookingCard';
import bookingData from '../../assets/data/booking';
import { Col } from 'reactstrap';

const FeaturedBookingList = () => {
  return (
    <>
        {bookingData?.map(booking => (
            <Col lg="3" className="mb-4" key={bookingData.id}>
                <BookingCard booking={booking} />
            </Col>
        ))}
    </>
  )
}

export default FeaturedBookingList;