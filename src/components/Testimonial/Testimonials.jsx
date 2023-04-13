import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }


  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Tampilan website ini gak ngebosenin dan punya pelayanan hingga malam serta ada detail harga dan jam operasional yang membantu saya dalam booking tempat futsal.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-circle" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Wfutsal merupakan platform booking yang penting untuk masa depan apalagi remaja sekarang gak bisa jauh dari kata bermain futsal.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-circle" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Lia Franklin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Pengalaman yang menarik dapat mencoba dan mengakses website sebagus ini apalagi pandemi kemaren membuat sebagian tempat futsal turun pendapatan.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-circle" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Abraham Bobby</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            Sebelum mengetahui wfutsal , saya kesulitan dalam mengakses lokasi-lokasi tempat futsal yang ada di sekitar saya, alhamdulillah sekarang saya lebih mudah dalam booking tempat futsal.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-circle" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Muhammad Fathur Rochman</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            Dengan adanya wfutsal memudahkan saya untuk membantu adik saya untuk memesan tempat futsal.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-circle" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Angelina</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  );   
};

export default Testimonials;