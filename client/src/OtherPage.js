import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1 style={{color:'orange'}}>Welcome to Kashi</h1>
            <h4 style={{color:'grey'}}>Hara Hara Mahadeva!</h4>
            <Link to="/">Go back to Kailash</Link>
        </div>
    );
};