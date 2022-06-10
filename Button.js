import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='bg-indigo-600 text-white font-semibold py-2 px-4 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
            {children}
        </button>
    );
};

export default Button;