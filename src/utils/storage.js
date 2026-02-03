const STORAGE_KEY = 'logistic_orders';

export const getOrders = () => {
    const orders = localStorage.getItem(STORAGE_KEY);
    return orders ? JSON.parse(orders) : [];
};

export const saveOrder = (order) => {
    const orders = getOrders();
    const newOrder = {
        ...order,
        id: generateTrackingId(),
        createdAt: new Date().toISOString(),
        status: 'Pending', // Pending, In Transit, Delivered, Cancelled
        history: [
            { status: 'Pending', timestamp: new Date().toISOString(), note: 'Order placed successfully' }
        ]
    };
    orders.push(newOrder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    return newOrder;
};

export const getOrderById = (id) => {
    const orders = getOrders();
    return orders.find(o => o.id === id);
};

export const updateOrderStatus = (id, status, note = '') => {
    const orders = getOrders();
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
        const order = orders[index];
        order.status = status;
        order.history.push({
            status,
            timestamp: new Date().toISOString(),
            note: note || `Status updated to ${status}`
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
        return order;
    }
    return null;
};

const generateTrackingId = () => {
    return 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase();
};
