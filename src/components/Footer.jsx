import React from 'react';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <Truck size={24} color="var(--accent)" />
                            Logistic<span>Pro</span>
                        </Link>
                        <p>
                            Leading the way in global logistics solutions. We deliver your promises with speed and reliability.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/tracking">Track Order</Link></li>
                            <li><Link to="/place-order">Place Order</Link></li>
                            <li><Link to="/admin">Admin Login</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><MapPin size={16} /> 123 Logistics Ave, New York, NY</li>
                            <li><Phone size={16} /> +1 (555) 123-4567</li>
                            <li><Mail size={16} /> support@logisticpro.com</li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LogisticPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
