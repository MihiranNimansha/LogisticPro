import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders, updateOrderStatus } from '../utils/storage';
import { LogOut, Package, Search } from 'lucide-react';
import '../styles/Admin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
            return;
        }
        loadOrders();
    }, [navigate]);

    const loadOrders = () => {
        const allOrders = getOrders();
        setOrders(allOrders.reverse()); // Newest first
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    const handleStatusUpdate = (id, newStatus) => {
        updateOrderStatus(id, newStatus);
        loadOrders();
        setSelectedOrder(null);
    };

    const filteredOrders = orders.filter(order =>
        order.id.toLowerCase().includes(filter.toLowerCase()) ||
        order.senderName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="container header-content">
                    <h2>Admin Dashboard</h2>
                    <button onClick={handleLogout} className="btn btn-outline btn-sm">
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </header>

            <div className="container dashboard-content">
                <div className="dashboard-controls">
                    <div className="search-bar">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search by ID or Sender..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <div className="stats">
                        <span>Total Orders: {orders.length}</span>
                    </div>
                </div>

                <div className="orders-table-container">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sender</th>
                                <th>Receiver</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="no-data">No orders found</td>
                                </tr>
                            ) : (
                                filteredOrders.map(order => (
                                    <tr key={order.id}>
                                        <td className="font-mono">{order.id}</td>
                                        <td>{order.senderName}</td>
                                        <td>{order.receiverName}</td>
                                        <td>
                                            <span className={`status-pill ${order.status.toLowerCase().replace(/ /g, '-')}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <div className="action-buttons">
                                                {order.status !== 'Delivered' && (
                                                    <select
                                                        value=""
                                                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                                                        className="status-select"
                                                    >
                                                        <option value="" disabled>Update Status</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="In Transit">In Transit</option>
                                                        <option value="Out for Delivery">Out for Delivery</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select>
                                                )}
                                                <button
                                                    onClick={() => window.open(`/tracking?id=${order.id}`, '_blank')}
                                                    className="btn-icon"
                                                    title="View Details"
                                                >
                                                    <Package size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
