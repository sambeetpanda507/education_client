import React from "react";
import "../scss/services.scss";
import school10 from "../images/school 10.jpeg";
import collegestudents from "../images/collegestudents.jpeg";
import certificate from "../images/certificate.png";
import masters from "../images/masters.jpg";
import phd from "../images/phd.jpg";
import CollegeCards from "./CollegeCards";

const cardData = [
  {
    _id: Math.random(),
    img: school10,
    title: "After 10 th Courses",
  },
  {
    _id: Math.random(),
    img: collegestudents,
    title: "After 10+2 Courses",
  },
  {
    _id: Math.random(),
    img: certificate,
    title: "Diploma Courses",
  },
  {
    _id: Math.random(),
    img: masters,
    title: "Masters Degree",
  },
  {
    _id: Math.random(),
    img: phd,
    title: "PhD Research Courses",
  },
];

function Services() {
  return (
    <div className="container services my-5">
      <div className="services__heading text-center font-weight-bold p-2">
        <h1>Our Services</h1>
      </div>
      <div className="row courses__colleges__card border p-2 my-4">
        {cardData.map((value) => {
          return (
            <CollegeCards
              key={Math.random()}
              _id={value._id}
              img={value.img}
              title={value.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
