import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <Navbar style={{ zIndex: 1 }} className="bg-primary w-100 position-fixed">
            <Container className="d-flex align-items-center">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand style={{ color: '#ffffff' }} className="fs-5 fw-bolder">
                        <i className="fa-solid fa-calendar-days me-3"></i>
                        Eventify
                    </Navbar.Brand>
                </Link>
                <div className="d-flex ms-auto align-items-center">
                    <ul className="d-flex flex-row align-items-center mb-0">
                        <li className="list-unstyled ms-3">
                            <Link to="/" className="text-white font-semibold px-2 text-decoration-none">Home</Link>
                        </li>
                        <li className="list-unstyled ms-3">
                            <Link to="/home" className="text-white font-semibold px-2 text-decoration-none">Events</Link>
                        </li>
                    </ul>
                    <button type="button" className="btn bg-light rounded ms-3">Book Now</button>
                </div>
            </Container>
        </Navbar>
    </div>
    
    

    )
}

export default Header
