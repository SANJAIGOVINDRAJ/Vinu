import React from "react";
import image from "../image/payment.png"
const Course = () => {
  return (
    <div className=" bg-slate-100 relative grid grid-cols-10">
      <div className=" col-span-7"></div>
      <div className=" p-4 sticky col-span-3">
        <div className="  bg-white shadow-xl p-10">
          <p className=" text-center text-3xl font-bold">Full Course Payment</p>
          <p className=" text-center text-2xl font-bold text-violet-700">$499</p>
          <div className=" flex flex-col gap-y-5 px-14 mt-10">
            <div className=" text-xl flex items-center justify-between">
              <p>Level</p>
              <p>Beginer</p>
            </div>
            <div className=" text-xl flex items-center justify-between">
              <p>Level</p>
              <p>Beginer</p>
            </div>
            <div className=" text-xl flex items-center justify-between">
              <p>Level</p>
              <p>Beginer</p>
            </div>
            <div className=" text-xl flex items-center justify-between">
              <p>Level</p>
              <p>Beginer</p>
            </div>
            <div className=" text-xl flex items-center justify-between">
              <p>Level</p>
              <p>Beginer</p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-y-4 flex-col">
            <p className=" font-medium text-2xl text-center">Payment Details</p>
          <img src={image} alt="image"  className="px-10 " />
          <button className="  px-10 rounded-full  bg-amber-600 p-2 ">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
