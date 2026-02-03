import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveOrder } from '../utils/storage';
import { Package, User, MapPin, Scale } from 'lucide-react';
import '../styles/PlaceOrder.css';

const PlaceOrder = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        senderName: '',
        senderAddress: '',
        receiverName: '',
        receiverAddress: '',
        weight: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.senderName || !formData.receiverName) return;

        const newOrder = saveOrder(formData);
        // Navigate to tracking page with the new ID pre-filled or show success
        // For now, let's go to a success view or tracking
        navigate(`/tracking?id=${newOrder.id}`);
    };

    return (
        <div className="container place-order-page">
            <div className="form-card">
                <div className="form-header">
                    <h2>Place a New Order</h2>
                    <p>Fill in the details below to schedule a shipment.</p>
                </div>

                <form onSubmit={handleSubmit} className="order-form">
                    <div className="form-section">
                        <h3><User size={20} /> Sender Details</h3>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="senderName"
                                value={formData.senderName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="senderAddress"
                                value={formData.senderAddress}
                                onChange={handleChange}
                                required
                                placeholder="123 Sender St"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><MapPin size={20} /> Receiver Details</h3>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="receiverName"
                                value={formData.receiverName}
                                onChange={handleChange}
                                required
                                placeholder="Jane Smith"
                            />
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="receiverAddress"
                                value={formData.receiverAddress}
                                onChange={handleChange}
                                required
                                placeholder="456 Receiver Ave"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><Package size={20} /> Package Details</h3>
                        <div className="form-row">
                            <div className="input-group">
                                <label>Weight (kg)</label>
                                <div className="icon-input">
                                    <Scale size={18} className="input-icon" />
                                    <input
                                        type="number"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        required
                                        placeholder="2.5"
                                        step="0.1"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Electronics, Documents, etc."
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Create Shipment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;
