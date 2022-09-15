import React from "react";
import "./Service";

const Service = ({ cart }) => {
  const { name, pragrap, logo, btn } = cart;
  return (
    <div className="containers cart hover:border hover:border-[#2D89FF]">
      <div className="mx-6 my-4">
        <div className="flex justify-between">
          <h6 className="catagory my-1">{name}</h6>
          <img src={logo} alt="" />
        </div>
        <p className="catagory2 my-4">{pragrap}</p>
        <h2 className="text-btn text-2xl my-4 hover:text-[#2D89FF]">{btn}</h2>
      </div>
    </div>
  );
};

export default Service;
