import React from "react";
import pose from "../../../assets/images/pose_2.png";
import vactor2 from "../../../assets/images/Frame 7.png";
import doctor1 from "../../../assets/images/Ellipse 6.png";
import "./Banner.css";

const backgroudImg = {
    backgroundImage: `url('https://i.ibb.co/zhfX9k3/Ellipse-5.png')`,
    backgroundRepeat: 'no-repeat',
};

const Banner = () => {
  return (
    <div class="hero">
       <div class="hero-content flex-col lg:flex-row-reverse">
          <div style={backgroudImg} className="pose-img">
            <img src={pose} alt="" />
            <div className="absolute">
                 <div className="btn-style relative bottom-32 right-10">
                    <img  src={vactor2} alt="" /> 
                 </div>
             </div>
             {/* our doctor */}
             <div className="doctor-cart px-4 absolute mx-80">
                  <h2 className="doctor-text mt-1">Meet Our Doctors</h2>
                  <div className="flex mt-2">
                    <img src={doctor1} alt="" />
                    <img src={doctor1} alt="" />
                    <img src={doctor1} alt="" />
                    <img src={doctor1} alt="" />
                     <p className="pluse mx-2 rounded-full">+</p>
                  </div>
                  <div className="gradint-border"></div> 
                  <div className="gradint-border2"></div> 
             </div>
          </div>
         <div>
            <div>
                <h1 class="text-5xl">
                  Your<span className="text-[#2D89FF]">Health</span>Is Our <br/> Top<span className="text-[#642DFF]">Priority</span>
                </h1>
                <p class="my-6 p">
                  There are many variations of passages of lpsum available, but the majority hae suffered.
                </p>
                <button class="btn-degsin bg-[#2D89FF] btn-text lowercase text-white">
                  Meet Our Specialist
                </button>
            </div>
             {/* price section */}
            <div className="price-cart mt-32 grid grid-cols-3 gap-28">
                <div>
                    <h3 className="text-degsins text-[#642DFF]">262k+</h3> 
                    <p className="p-degsin">Recovered Patients</p>
                </div>
                <div>
                    <h3 className="text-degsins text-[#642DFF]">96%</h3>
                    <p className="p-degsin">Satisfaction Rate</p>
                </div>
                <div>
                    <h3 className="text-degsins text-[#642DFF]">86+</h3>
                    <p className="p-degsin">Expert Doctors</p> 
                </div>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
