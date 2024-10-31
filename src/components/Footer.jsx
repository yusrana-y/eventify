import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
  <div className="bg-primary">
    <div style={{ height: '300px' }} className="container pt-5 w-100 text-light">
        <div className="d-flex flex-wrap">
            <div className="intro pe-3">
                <h2>
                    <i className="fa-solid fa-calendar-days me-3"></i> Eventify
                </h2>
                <p>Designed and built with all the love in the world.</p>
                <p>Code licensed, docs CC BY DO</p>
                <p>Currently v5.3.2</p>
            </div>
            <div className="links px-5">
                <h2>Links</h2>
                <p><Link to="/" className="text-white text-decoration-none">Landing Page</Link></p>
                <p><Link to="/home" className="text-white text-decoration-none">Home</Link></p>
                <p><Link to="/event/1" className="text-white text-decoration-none">Event</Link></p>
            </div>
            <div className="guides px-5">
                <h2>Guides</h2>
                <p><Link to="/" className="text-white text-decoration-none">Event Partners</Link></p>
                <p><Link to="/" className="text-white text-decoration-none">Sponsors</Link></p>
                <p><Link to="/" className="text-white text-decoration-none">Organizers</Link></p>
            </div>
            <div className="contact ps-5">
                <h2>Contact Us</h2>
                <div className="d-flex gap-3">
                    <input type="text" className="form-control p-3 rounded" placeholder="Enter your email address" />
                    <button type="button" className="btn bg-info rounded"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <a href="#" className="text-white text-decoration-none" aria-label="Instagram" target="_blank">
                        <i className="fa-brands fa-instagram fa-xl"></i>
                    </a>
                    <a href="#" className="text-white text-decoration-none" aria-label="LinkedIn" target="_blank">
                        <i className="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                    <a href="#" className="text-white text-decoration-none" aria-label="Facebook" target="_blank">
                        <i className="fa-brands fa-facebook fa-xl"></i>
                    </a>
                    <a href="#" className="text-white text-decoration-none" aria-label="WhatsApp" target="_blank">
                        <i className="fa-brands fa-whatsapp fa-xl"></i>
                    </a>
                </div>
            </div>
        </div>
        <p className="text-center mt-4">Copyright &copy; Eventify. Built with React & Bootstrap</p>
    </div>
</div>

  )
}

export default Footer
