import React from 'react';
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import timeImg from '../assets/images/time.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: timeImg,
        title: "Layanan 24 Jam",
        desc: "Membantu anda membuat pesanan hingga 24 jam"
    },
    {
        imgUrl: guideImg,
        title: "Info Terkait Lokasi",
        desc: "Memberikan detail harga dan juga tempat"
    },
    {
        imgUrl: customizationImg,
        title: "Custom  pesanan",
        desc: "Menyediakan layanan sesuai dengan keinginan Anda"
    },
] 

const ServiceList = () => {
  return (
    <>
        {servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList;