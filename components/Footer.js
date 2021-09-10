import React from 'react';

const Footer = () => {
    return (
        <div className="flex bg-gray-500 justify-center flex-col items-center">
            <div className=" flex bg-white m-2 rounded-2xl cursor-pointer ">
                <img className="to-gray-900" src="https://img.icons8.com/material-outlined/60/111827/linkedin--v1.png"/>
                <img  src="https://img.icons8.com/material-outlined/60/111827/github.png"/>
            </div>
            <div className=" bg-gray-900 text-white rounded-3xl p-1 m-1">
                @2021 All rights reserved
            </div>
            
        </div>
    );
};

export default Footer;