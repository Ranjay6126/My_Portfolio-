import orange from "../assets/orange.jpg";
import profile from "../assets/git hub.gif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div  name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <span className="md:w-1/2 md:mt-2 space-y-4">
            <span className="text-[1.20rem] flex-wrap">Welcome to My Feed</span>
            <span>
              <img
                src={profile}
                className="rounded-full w-[55px] h-[30px]"
                alt="Profile"
              />
            </span>

            <div className="underline flex space-x-2 md:text-2xl items-center">
              <h1 className="italic">Hello🙋, I'm a</h1>
              <ReactTyped
                className="text-blue-700 italic font-bold"
                strings={["Developer", "Programmer", "Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify">
              I am Ranjay Prajapati, a Computer Science and Engineering student
              at Lovely Professional University, specializing in Full-Stack
              Development. With a solid foundation in HTML, CSS, JavaScript, and
              the MERN stack, I am well-versed in both frontend and backend
              technologies. I am proficient in tools such as Git, GitHub,
              Postman, MongoDB, and have familiarity with cybersecurity tools
              like Wireshark, Nmap, Linux, Burp Suite, and Metasploit.
              
              My academic journey has been marked by hands-on experience
              through various projects, including a comprehensive Book Store
              System and an interactive Weather Application, demonstrating my
              ability to design and develop full-stack solutions. I have also
              achieved certifications in Backend Development, Data Structures
              and Algorithms, and Red Hat System Administration, further
              enhancing my technical expertise.
              <br />
              <br />
              Beyond academics, I have honed my problem-solving skills by
              solving 300+ coding challenges on platforms like LeetCode and
              GeeksforGeeks, earning a 5-star rating on HackerRank. These
              experiences reflect my commitment to continuous learning and my
              ability to tackle complex challenges.
              I am eager to leverage my skills in a professional setting,
              contribute to impactful projects, and grow as a versatile
              developer.
            </p>

            {/* Social Media Icons */}
            <div className="space-y-2">
              <h1 className="font-bold underline">Available On</h1>
              <ul className="flex justify-center md:justify-start space-x-5">
                <li>
                  <a
                    href="https://www.facebook.com/mrranjay.prajapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ranjay-pandit-prajapati-2b2455227/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ranjay.prajapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <SiTelegram className="text-2xl cursor-pointe rounded-full border-[2px] border-blackr" />
                </li>
              </ul>
            </div>
          </span>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
            <img
              src={orange}
              className="rounded-full w-[150px] h-[150px] md:w-[250px] md:h-[250px] mb-6"
              alt="Orange"
            />
            
            {/* Name Below Image with Curly Underline */}
            <div className="mt-4">
              <h2 className="text-xl font-bold underline text-center">Mr. Ranjay Prajapati</h2>
              <div className="w-1/3 mx-auto mt-4"></div>
            </div>

            {/* Currently Working On Section */}
            <div className="mt-16">
              <h1 className="font-bold underline text-center">Currently Working On</h1>
              <ul className="flex flex-wrap  justify-center space-x-4 mt-2">
                <li>
                  <DiMongodb className="text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-black" />
                </li>
                <li>
                  <SiExpress className="text-3xl hover:scale-110 duration-200  rounded-full border-[2px] border-black" />
                </li>
                <li>
                  <FaReact className="text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-black "/>
                </li>
                <li>
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-black"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black" />
    </>
  );
}

export default Home;
