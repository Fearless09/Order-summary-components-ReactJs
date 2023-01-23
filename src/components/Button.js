import React from 'react';

const Button = ({ title, bgColor, color }) => {
    return (
        <div className='px-4'>
            <a className="btn btn-lg w-100 mt-4 fs-4 py-3 text-white | proceedBtn" href="#">Proceed to Payment</a>
            <a className="btn btn-lg w-100 mt-4 fs-4 py-3 | cancelBtn" href="#">Cancel Order</a>
        </div>
    );
}


export default Button;
