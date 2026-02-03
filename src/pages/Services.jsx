import React from 'react';
import { Package, Clock, Shield, Globe, Anchor, Truck } from 'lucide-react';
import '../styles/Home.css'; // Reusing Home styles for consistency

const Services = () => {
    const services = [
        {
            icon: <Truck size={32} />,
            title: 'Road Freight',
            description: 'Reliable ground transportation for domestic and cross-border shipments.'
        },
        {
            icon: <Globe size={32} />,
            title: 'Ocean Freight',
            description: 'Cost-effective solutions for large cargo across international waters.'
        },
        {
            icon: <Package size={32} />,
            title: 'Air Freight',
            description: 'Fastest delivery option for time-sensitive packages worldwide.'
        },
        {
            icon: <Clock size={32} />,
            title: 'Express Delivery',
            description: 'Same-day or next-day delivery services for urgent needs.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Cargo Insurance',
            description: 'Comprehensive coverage to protect your goods during transit.'
        },
        {
            icon: <Anchor size={32} />,
            title: 'Warehousing',
            description: 'Secure storage solutions with inventory management systems.'
        }
    ];

    return (
        <div className="services-page" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Our Logistics Services</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                        We offer a wide range of logistics and supply chain solutions to help your business grow.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
