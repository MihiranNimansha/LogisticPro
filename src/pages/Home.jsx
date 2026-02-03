import React from 'react';
import { ArrowRight, Package, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Reliable Logistics <br />
                            <span className="highlight">Delivered On Time</span>
                        </h1>
                        <p className="hero-subtitle">
                            Global shipping solutions for businesses of all sizes.
                            Track your packages in real-time and experience seamless delivery.
                        </p>
                        <div className="hero-actions">
                            <Link to="/place-order" className="btn btn-primary">
                                Place Order <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/tracking" className="btn btn-outline">
                                Track Shipment
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-shape"></div>
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Logistics Delivery"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Services</h2>
                        <p>We provide comprehensive logistic solutions tailored to your needs.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon-box"><Package size={32} /></div>
                            <h3>Fast Delivery</h3>
                            <p>Express shipping options for your urgent deliveries worldwide.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Clock size={32} /></div>
                            <h3>Real-Time Tracking</h3>
                            <p>Keep track of your cargo 24/7 with our advanced tracking system.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Secure Cargo</h3>
                            <p>Your goods are insured and handled with utmost care and security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about section-padding">
                <div className="container about-container">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1494412574643-35d324698428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Warehouse Team"
                        />
                    </div>
                    <div className="about-content">
                        <h2>About LogisticPro</h2>
                        <p>
                            Founded with a mission to streamline global trade, LogisticPro has emerged as a leader in supply chain management.
                            We combine technology with expertise to deliver efficiency.
                        </p>
                        <ul className="about-list">
                            <li>Global Network covering 100+ countries</li>
                            <li>24/7 Customer Support</li>
                            <li>Sustainable Shipping Practices</li>
                        </ul>
                        <Link to="/services" className="btn btn-link">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
