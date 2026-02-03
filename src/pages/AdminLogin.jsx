import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import '../styles/Admin.css';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') { // Mock password
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="container admin-login-page">
            <div className="login-card">
                <div className="icon-circle">
                    <Lock size={32} />
                </div>
                <h2>Admin Portal</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Enter Password (admin123)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-text">{error}</p>}
                    <button type="submit" className="btn btn-primary full-width">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
