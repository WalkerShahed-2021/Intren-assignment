import React from "react";
import "./Exprience.css";
import Group from "../../../assets/images/Group 12.png";



const Expriences = () => {
  return (
    <div className="containers">
      <div className="mt-14 flex flex-col-3 justify-between">
        <div className="flex-col-3">
          <p className="text-[#642DFF] text-exprince">16+ Years Experiences </p>
          <p className="title-exprience mt-4">
            We Are Always ensure Best Medical Treatment For Your Health
          </p>
          <p className="pragrap-title  mt-4">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look lik
          </p>
        </div>
             <div>
                  <img  src={Group} alt="" />
             </div>
      </div>
    </div>
  );
};

export default Expriences;
