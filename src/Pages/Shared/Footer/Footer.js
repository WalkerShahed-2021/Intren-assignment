import React from "react";
import "./Footer.css";
import fb from "../../../assets/images/Vectorfb.png";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="containers">
        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="mt-10">
            <p className="text-[#2D89FF] text-2xl font-bold">
              Doc<span className="text-[#642DFF]">mic</span>
            </p>
            <p className="footer-pragrap mt-4">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has bee
            </p>
            <div className="mt-10 flex gap-6">
              <img className="img-logo rounded-lg" src={fb} alt="" />
              <img className="img-logo rounded-lg" src={fb} alt="" />
              <img className="img-logo rounded-lg" src={fb} alt="" />
              <img className="img-logo rounded-lg" src={fb} alt="" />
              <img className="img-logo rounded-lg" src={fb} alt="" />
            </div>
            <p className="mt-10 copyrigth">Copyright @222 Medicom All Rights Reserved</p>
          </div>
          <div className="mt-10">
            <p className="footer-p">Quick Linls</p>
            <p className="mt-2">About Us</p>
            <p className="mt-2">Our Pricing</p>
            <p className="mt-2">Our Gallery</p>
            <p className="mt-2">Appointment</p>
            <p className="mt-2">Privacy Policy</p>
          </div>
          <div className="mt-14">
            <p>Services</p>
            <p className="mt-2">Our Doctors</p>
            <p className="mt-2">Our Latest News</p>
            <p className="mt-2">Careers</p>
            <p className="mt-2">Contact Us</p>
          </div>
          <div className="mt-10">
            <p className="footer-p">Opening Hours</p>
            <div className="flex gap-6">
                 <div className="text-[#2D89FF] mt-1">
                    <p className="mt-2">Mon- Tue</p>
                    <p className="mt-2">Wed- Thu</p>
                    <p className="mt-2">Fri- Sat</p>
                    <p className="mt-2">Sunday</p>
                    <p className="mt-2">Personal</p>
                 </div>
                 <div className="mt-1">
                    <p className="mt-2">08:00 AM- 05:00 PM</p>
                    <p className="mt-2">09:00 AM- 06:00 PM</p>
                    <p className="mt-2">10:00 AM- 07:00 PM</p>
                    <p className="mt-2">Emergency Only</p>
                    <p className="mt-2">Mon- 05:00 PM</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* 
                       <div className="mt-10 flex gap-6">
                            <img className="img-logo rounded-lg" src={fb} alt="" />
                            <img className="img-logo rounded-lg" src={fb} alt="" />
                            <img className="img-logo rounded-lg" src={fb} alt="" />
                            <img className="img-logo rounded-lg" src={fb} alt="" />
                            <img className="img-logo rounded-lg" src={fb} alt="" />
                        </div>
                        <p className="mt-10">Copyright @222 Medicom All Rights Reserved</p>
*/
