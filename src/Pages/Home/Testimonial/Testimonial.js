import React from "react";
import "./Testimonial.css";
import conponnent from "../../../assets/images/Component 3.png";
import conponnent2 from "../../../assets/images/Component 4.png";
import Ikbal from "../../../assets/images/Ikbal 1.png";
import Ornament from "../../../assets/images/Ornament 57.jpg";
// import x from '../../../assets/images/x.jpg'

const Testimonial = () => {
  return (
    <>
    <div className="flex justify-center">
        <div>
            <p className="p-tasti">Testimonial</p>
            <h2 className="h2-testi">What they say?</h2>
        </div>
    </div>
    <div className="flex justify-center">
      <div className="flex mt-10">
        <div className="mt-14">
          <img src={conponnent} alt="" />
        </div>

        <div className="tastimonial-cart mx-6">
          <div className="grid grid-cols-2 gap-32">
            <div className="cart-iqbal">
              <p className="p-iqbal">David Jeams</p>
              <p className="p-iqbal2">Pratient</p>
              <p className="p-iqbal3">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it is a long established fact that a reader will
                be distracted by the readable content{" "}
              </p>
              <img className="img-pluse" src={Ornament} alt="" />
            </div>
            <div>
              <img className="img-iqbal" src={Ikbal} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <img src={conponnent2} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
