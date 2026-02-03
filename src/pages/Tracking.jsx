import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getOrderById } from '../utils/storage';
import { Search, CheckCircle, Circle, Package, MapPin, Calendar, Truck } from 'lucide-react';
import '../styles/Tracking.css';

const Tracking = () => {
    const [searchParams] = useSearchParams();
    const [trackingId, setTrackingId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            setTrackingId(id);
            handleSearch(id);
        }
    }, [searchParams]);

    const handleSearch = (idToSearch) => {
        const id = idToSearch || trackingId;
        if (!id) return;

        setError('');
        const foundOrder = getOrderById(id);
        if (foundOrder) {
            setOrder(foundOrder);
        } else {
            setOrder(null);
            setError('Tracking ID not found. Please check and try again.');
        }
    };

    const steps = ['Pending', 'In Transit', 'Out for Delivery', 'Delivered'];

    const getStepStatus = (step) => {
        if (!order) return 'pending';
        const currentIndex = steps.indexOf(order.status);
        const stepIndex = steps.indexOf(step);

        if (stepIndex < currentIndex) return 'completed';
        if (stepIndex === currentIndex) return 'current';
        return 'pending';
    };

    return (
        <div className="container tracking-page">
            <div className="tracking-search-section">
                <h1>Track Your Shipment</h1>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Enter Tracking ID (e.g. TRK...)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                    />
                    <button onClick={() => handleSearch()} className="btn btn-primary">
                        <Search size={20} /> Track
                    </button>
                </div>
                {error && <p className="error-msg">{error}</p>}
            </div>

            {order && (
                <div className="tracking-result">
                    <div className="order-summary card">
                        <div className="summary-header">
                            <div>
                                <h3>Tracking ID: {order.id}</h3>
                                <span className={`status-badge ${order.status.toLowerCase().replace(/ /g, '-')}`}>
                                    {order.status}
                                </span>
                            </div>
                            <div className="date">Created: {new Date(order.createdAt).toLocaleDateString()}</div>
                        </div>

                        <div className="details-grid">
                            <div className="detail-item">
                                <span className="label">From</span>
                                <span className="value">{order.senderAddress}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">To</span>
                                <span className="value">{order.receiverAddress}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Package</span>
                                <span className="value">{order.description} ({order.weight} kg)</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-section card">
                        <h3>Shipment Progress</h3>
                        <div className="timeline">
                            {steps.map((step, index) => {
                                const status = getStepStatus(step);
                                return (
                                    <div key={step} className={`timeline-item ${status}`}>
                                        <div className="timeline-icon">
                                            {status === 'completed' ? <CheckCircle size={24} /> :
                                                status === 'current' ? <Truck size={24} /> : <Circle size={24} />}
                                        </div>
                                        <div className="timeline-content">
                                            <h4>{step}</h4>
                                            {/* Ideally we would map actual history timestamps here */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="history-log">
                            <h4>Detailed History</h4>
                            {order.history.map((h, i) => (
                                <div key={i} className="history-item">
                                    <div className="history-time">{new Date(h.timestamp).toLocaleString()}</div>
                                    <div className="history-status">{h.status}</div>
                                    <div className="history-note">{h.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tracking;
