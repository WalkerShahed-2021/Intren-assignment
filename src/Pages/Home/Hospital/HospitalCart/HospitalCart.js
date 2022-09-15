import React from 'react';
import './HospitalCart.css';

const HospitalCart = ({singleCart}) => {
    const {name, pragrap, logo} = singleCart;
    return (
            <div className='cart1'>
                <div className="mx-6 my-4">
                   <div className="flex justify-between">
                      <h6 className="catagory1 my-1">{name}</h6>
                      <img src={logo} alt="" />
                     </div>
                    <p className="catagory2 my-4">{pragrap}</p>
                 </div>
            </div>
    );
};

export default HospitalCart;