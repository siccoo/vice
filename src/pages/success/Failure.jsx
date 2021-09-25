import React from 'react';

import PayviceFailure from "../../images/payvice-fail.png";

import "./style.css";

const Failure = ({onClick}) => {
    
    return (
        <>
            <section className="payvice__body__box text-center"> 
                <img src={PayviceFailure} alt="payvice__fail__image" className="payvice__fail__image" />
                <p className="failure">There seems to be an error submitting your details, please try again in a few minutes</p>
                <span onClick={onClick} className="button">Return to home page</span>
            </section>
        </>
    )
}

export default Failure;