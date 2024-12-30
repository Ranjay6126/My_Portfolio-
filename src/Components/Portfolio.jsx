// import React from "react";
import git from "../assets/git and github.jpeg";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import tailwind from "../assets/tailwind.jpg";
import cpp from "../assets/cp.jpeg";
import docker from "../assets/docker.jpeg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "A NoSQL database for modern applications.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description: "A minimal and flexible Node.js web application framework.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description: "A JavaScript runtime built on Chrome's V8 engine.",
    },
    {
      id: 5,
      logo: git,
      name: "Git & GitHub",
      description: "Version control system and collaboration platform for developers.",
    },
    {
      id: 6,
      logo: cpp,
      name: "C++",
      description: "A powerful general-purpose programming language.",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for building custom designs.",
    },
    {
      id: 8,
      logo: docker,
      name: "Docker",
      description: "A platform for building, deploying, and managing containerized applications.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 underline">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] border-black rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[110px] h-[110px] p-1 rounded-full border-[2px] border-red-600 "
                alt={`${name} Logo`}
              />
              <div>
                <div className="px-2 font-bold text-xl underline mb-2">{name}</div>
                <p className="px-2 text-black ">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-sky-500 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500  hover:bg-teal-700 text-white font-bold px-4 py-2 rounded border-black">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-black" />

    
    </div>
  );
}

export default PortFolio;
