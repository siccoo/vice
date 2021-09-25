import React from 'react';

import PayviceSuccess from "../../images/payvice-success.png";

import "./style.css";

const Success = ({onClick}) => {
    
    return (
        <>
            <section className="payvice__body__box text-center"> 
                <img src={PayviceSuccess} alt="payvice__image" className="payvice__image" />
                <p>Details successfully submitted</p>
                <span onClick={onClick} className="button">Return to home page</span>
            </section>
        </>
    )
}

export default Success;
