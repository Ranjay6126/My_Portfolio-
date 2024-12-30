// import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import express from "../assets/expressjs.png";
import mongoDB from "../assets/mongodb.jpg";
import sql from "../assets/sql.jpeg";
import postman from "../assets/post man.jpeg";
import linux from "../assets/linux.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "Html" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "Javascript" },
    { id: 4, logo: react, name: "React" },
    { id: 5, logo: nodejs, name: "NodeJs" },
    { id: 6, logo: express, name: "Express" },
    { id: 7, logo: mongoDB, name: "MongoDB" },
    { id: 8, logo: sql, name: "SQL" },
    { id: 9, logo: postman, name: "Postman" },
    { id: 10, logo: linux, name: "Linux" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 underline">Experience</h1>
        <p className="underline">
          I have more than 1.5 years of experience in the following Tools &
          Technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[175px] md:h-[175px] shadow-md p-1 cursor-pointer border-black bg-slate-200 hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] rounded-full"
                alt={`${name} logo`}
              />
              <div className="mt-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-black" />
    </div>
  );
}

export default Experience;
