import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import calculateAvgRating from '../rating/avgRating';

import "./booking-card.css";

const BookingCard = ({ booking }) => {
    const { id, title, city, photo, price, featured, reviews } = booking;

    const {totalRating, avgRating} = calculateAvgRating(reviews)


    return (
    <div className="booking__card">
        <Card>
            <div className="booking__img">
                <img src={photo} alt="booking-img" />
                { featured && <span>Featured</span>}
            </div>

            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="booking__location d-flex align-items-center gap-1">
                    <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className="booking__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        "Not rated"
                        ) : (
                            <span>({reviews.length})</span>
                        )}
                </span>
            </div>

            <h5 className="booking__title">
                <Link to={`/booking/${id}`}>{title}</Link>
            </h5>

            <div className="card__bootom d-flex align-items-center justify-content-between mt-3">
                <h5>
                    Rp.{price} <span> / Per 1 Jam</span>
                </h5>

                <button className="btn booking__btn">
                    <Link to={`/booking/${id}`}>Pesan Sekarang</Link>
                </button>
            </div>
        </CardBody>
        </Card>

        
    </div>
  );
};

export default BookingCard;