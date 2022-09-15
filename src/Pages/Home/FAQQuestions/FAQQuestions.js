import React from "react";
import "./FAQQuestions.css";
import img from "../../../assets/images/Group 20.png";
import img2 from "../../../assets/images/image 5,.png";

const FAQQuestions = () => {
  return (
    <div className="containers">
      <div className="mt-20 flex justify-between">
        <div>
          <p className="text-[#642DFF] text-exprince">FAQ Questions</p>
          <h2 className="title-exprience mt-3">Get Your General Answer </h2>
            <div class="collapse-plus">
              <p class="collapse-title degsin-pluse">Will I always see my own doctor?</p>
            </div>
            <div class="collapse-plus">
                <p class="collapse-title degsin-pluse">What is one Medical's care?</p>
            </div>
            <div class="collapse-plus collapse-plus:text-[#2D89FF]">
               <p class="collapse-title degsin-pluse">What is evidence based medicine?</p>
            </div>
            <div class="collapse-plus">
                <p class="collapse-title degsin-pluse">What is an academic medical center?</p>
            </div>
        </div>
        <div>
            <img src={img} alt="" />
            <div className="small-sec relative bottom-32 right-28">
                 <div className="flex mt-2">
                    <img className="mx-2 img-logo" src={img2} alt="" />
                    <p className="p-text">Get Solutions From Our Experts</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQQuestions;