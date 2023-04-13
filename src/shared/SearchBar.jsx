import React, {useRef} from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    
    const searchHandler = () => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value

        if (location === "" || distance === "") {
            return alert("Semua bidang wajib diisi!");
        }
    }


    return (
        <Col lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>lokasi</h6>
                            <input type="text" placeholder="daerah mana kamu mau pesan ?" ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i class="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Jarak Tempuh</h6>
                            <input type="number" placeholder="k/m" ref={distanceRef}/>
                        </div>
                    </FormGroup>

                    <span className="search__icon" type="submit" onClick={searchHandler}>
                        <i class="ri-search-line"></i>
                    </span>
                </Form>
            </div>            
        </Col>
    )
}

export default SearchBar;