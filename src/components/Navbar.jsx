import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Truck size={28} color="var(--primary)" />
                    Logistic<span>Pro</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
                    <Link to="/tracking" className={`nav-link ${isActive('/tracking')}`}>Track Order</Link>
                    <Link to="/place-order" className="btn btn-accent">Place Order</Link>
                </div>

                {/* Mobile menu button placeholder */}
                <button className="mobile-menu-btn">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
