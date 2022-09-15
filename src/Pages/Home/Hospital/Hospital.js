import React from "react";
import "./Hospital.css";
import group20 from "../../../assets/images/Group 20.png";
import image from "../../../assets/images/image 5.png";
import HospitalCart from "./HospitalCart/HospitalCart";

const Hospital = () => {
    const Ourservices = [
        {name: '24 Hours Doctor Support', id: 1, pragrap:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', logo: image},
        {name: '24 Hours Doctor Support', id: 2, pragrap:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', logo: image},
        {name: '24 Hours Doctor Support', id: 3, pragrap:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', logo: image},
        {name: '24 Hours Doctor Support', id: 4, pragrap:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', logo: image},
       
    ]
  return (
    <div className="containers">
      <div className="mt-20 flex justify-between">
        <div>
          <img src={group20} alt="" />
        </div>
        <div>
            <div>
                    <p className="text-[#642DFF] text-exprince">Our Hospital Feature</p>
                    <h2 className="title-exprience mt-4">
                    Make An Appointment Easy And Fast Services
                    </h2>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    Ourservices.map(singleCart => <HospitalCart
                     key={singleCart.id}
                     singleCart={singleCart}
                    ></HospitalCart>)  
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
