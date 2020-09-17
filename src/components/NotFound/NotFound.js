import { faDivide } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const NotFound = () => {
    const style={
        color: 'orangered',
        textAlign: "center",
        fontSize: "80px",
        fontWeight: '800',
        marginTop:"20vh"
    }
    return (
        <div>
            <h1 style={style}>404</h1>
            <h1 >Sorry, Page Not Found</h1>
        </div>
    );
};

export default NotFound;