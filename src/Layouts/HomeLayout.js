import React from "react";
import image from "../image/Profile.png";
import dummy from "../image/dummy.png";
import ButtonField from "../Components/ButtonField";
import { Top } from "../utils/Top";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className=" font-dmsans pb-20  max-w-screen text-slate-600 min-h-screen bg-slate-100">
      <div className=" pl-40 flex flex-col gap-y-5 mt-10 relative p-20">
        <p className="  text-slate-800 leading-relaxed  font-bold text-5xl font-unbonded">
          Learn Without
            Limits
          <br></br>
          With platformname
        </p>
        <p className=" text-2xl  font-medium w-1/2">
          Every teaching and learning journey is unique Following We'll help
          guide your way.
        </p>
        <ButtonField
          name={"Start Trail"}
          styles={" w-80 bg-gradient-to-r from-violet-950 via-violet-600 to-violet-950 rounded-full "}
        />
        <img
          src={image}
          alt="image"
          className=" object-cover absolute  h-96 right-40 top-20"
        />
      </div>

      <div className=" relative">
      <div className=" blur-3xl absolute top-24 items-center justify-between flex w-full">
            <div className=" bg-fuchsia-600/50 p-40 opacity-20 w-1/2 rounded-full  blur-3xl"></div>
            <div className=" bg-purple-600/50 p-40 opacity-50 rounded-full  blur-3xl"></div>
            <div className=" bg-orange-600/50 p-40 opacity-20 w-1/2 rounded-full  blur-3xl"></div>
        </div>
        <p className=" relative font-unbonded text-center text-4xl pt-10 text-slate-800 font-bold">
          Top Categories
        </p>
        <div className=" px-40 py-20 text-center relative grid grid-cols-3 gap-4">
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">Graphic Design</p>
            </div>
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">Artificial Intelligence</p>
            </div>
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">Data Science</p>
            </div>
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">UI UX Design</p>
            </div>
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">Marketting</p>
            </div>
            <div className=" bg-white p-10 rounded-xl ">
                <p className=" font-medium  text-2xl">Full Stack</p>
            </div>
        </div>
      </div>
      <div className=" pl-[700px] flex flex-col gap-y-5 mt-10 relative p-20">
        <p className="  text-slate-800 leading-relaxed  font-bold text-4xl font-unbonded">
          Thousand Of Top Course
          <br></br>
          Now in One Place{" "}
        </p>
        <ul className=" text-xl font-medium">
          <li>Flexible Course Plan</li>
          <li>Access Your Class anywhere</li>
          <li>Flexible Course Plan</li>
        </ul>
        <img
          src={dummy}
          alt="image"
          className=" object-cover absolute  h-96 left-40 top-0"
        />
      </div>

      <div className=" px-28 text-white relative">
        <div className=" my-28  bg-gradient-to-tr from-violet-950 via-violet-600 to-violet-950 rounded-xl p-10  divide-x-2  divide-white/20 text-center relative grid grid-cols-4 gap-4">
            <div className=" flex flex-col gap-y-2  p-10  ">
                <p className=" font-medium  text-6xl">42K+</p>
                <p className=" text-2xl">Active Students</p>
            </div>
            <div className=" flex flex-col gap-y-2  p-10  ">
                <p className=" font-medium  text-6xl">42K+</p>
                <p className=" text-2xl">Active Students</p>
            </div>
            <div className=" flex flex-col gap-y-2  p-10 ">
                <p className=" font-medium  text-6xl">42K+</p>
                <p className=" text-2xl">Active Students</p>
            </div>
            <div className=" flex flex-col gap-y-2  p-10 ">
                <p className=" font-medium  text-6xl">42K+</p>
                <p className=" text-2xl">Active Students</p>
            </div>
        </div>
      </div>
      <div className=" relative">
        <div className=" blur-3xl absolute top-44 items-center justify-between flex w-full">
            <div className=" bg-fuchsia-600/50 p-40 opacity-20 w-1/2 rounded-full  blur-3xl"></div>
            <div className=" bg-purple-600/50 p-40 opacity-50 rounded-full  blur-3xl"></div>
            <div className=" bg-orange-600/50 p-40 opacity-20 w-1/2 rounded-full  blur-3xl"></div>
        </div>
        <p className=" relative font-unbonded text-center text-4xl py-20 text-slate-800 font-bold">
          Explore Our Top Courses
        </p>
        <div className=" h-full relative grid grid-cols-4 gap-x-5 px-40">
          {Top &&
            Top?.map((course) => (
              <Link to={course.id} className=" bg-white p-2 rounded-md">
                <img
                  src={course.image}
                  alt="imaeg"
                  className=" rounded-md  w-full"
                />
                <div className="  flex flex-col gap-y-2 py-2">
                  <div className=" text-xs flex items-center justify-between">
                    <p className=" bg-slate-100 px-4 p-1 rounded-full">
                      {course.type}
                    </p>
                    <p className=" font-bold">{course.review} likes</p>
                  </div>
                  <p className="  px-1 h-14 font-bold text-xl">{course.name}</p>
                  <p className=" px-1 text-sm" >by {course.by}</p>
                  <div className=" realtive w-full bottom-0 flex items-center justify-between">
                    <button className=" bg-gradient-to-br from-amber-700 via-amber-500 to-amber-700  px-4 p-1 rounded-full text-white">
                      Enroll now
                    </button>
                    <p className=" mr-4 font-bold">${course.price}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
