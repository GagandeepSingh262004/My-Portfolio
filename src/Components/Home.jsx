import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Database, Server, Zap, Smartphone, Mail } from "lucide-react";

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Form Data:", userData);
    emailjs
      .sendForm("service_brt3zmz", "template_mqfudfq", form.current, {
        publicKey: "BXM76kOadmlu2TuwO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // alert("Message sent successfully! (Demo mode)");
          setEmailData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  useGSAP(() => {
    mm.add("(min-width: 768px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".home",
          start: "5% top",
          end: "bottom bottom",
          scrub: 2,
          markers: false,
        },
      });

      t1.fromTo(
        ".card1",
        {
          x: -280,
          y: 25,
          rotate: "-10deg",
          // transform: translateX(-280px) translateY(25px) rotate(-10deg);
          ease: "back.out",
          duration: 0.4,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "back.inOut",
          duration: 0.8,
        }
      );
      t1.fromTo(
        ".card2",
        {
          x: -50,
          rotate: "-5deg",
          ease: "back.out",
          duration: 0.4,
          // transform: translateX(-50px) rotate(-5deg);
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "back.inOut",
          duration: 0.8,
        }
      );

      t1.fromTo(
        ".card3",
        {
          x: 180,
          rotate: "3deg",
          ease: "back.out",
          duration: 0.4,
          // transform: translateX(180px) rotate(3deg);
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "back.inOut",
          duration: 0.8,
        }
      );

      t1.fromTo(
        ".card4",
        {
          x: 370,
          y: 20,
          rotate: "7deg",
          ease: "back.out",
          duration: 0.4,
          // transform: translateX(370px) translateY(20px) rotate(7deg);
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "back.inOut",
          duration: 0.8,
        }
      );
    });
    mm.add("(max-width: 765px)", () => {
      const tMobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards", // or ".home" if you want to trigger earlier
          start: "top 80%", // adjust based on layout
          end: "bottom bottom",
          scrub: false,
          markers: false,
        },
      });

      // Animate each card with opacity and stagger
      tMobile.from([".card1", ".card2", ".card3", ".card4"], {
        opacity: 0,
        // y: 40,
        ease: "power2.out",
        duration: 0.8,
        stagger: 0.2,
      });
    });
  }, []);

  useGSAP(() => {
    mm.add("(min-width: 868px)", () => {
      console.log("Executed");
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 20%",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });

      t2.fromTo(
        ".card-down",
        { y: 0, x: 0, opacity: 1 },
        { y: 450, x: 150, opacity: 0, ease: "power2.inOut", duration: 1 }
      );

      // Animate zoom cards
      t2.fromTo(
        ".card-zoom1",
        { scale: 1, x: 0, y: 0, opacity: 0 },
        {
          scale: 1.1,
          x: 525,
          y: 80,
          opacity: 1,
          ease: "power3.in",
          duration: 1,
        },
        "<"
      );

      t2.fromTo(
        ".card-zoom2",
        { scale: 1, x: 0, y: 0, opacity: 0 },
        {
          scale: 1.2,
          x: 425,
          y: 50,
          opacity: 1,
          ease: "power3.in",
          duration: 1,
        },
        "<0.2"
      );

      t2.fromTo(
        ".card-zoom3",
        { scale: 1, x: 0, y: 0, opacity: 0 },
        {
          scale: 1.3,
          x: 285,
          y: 30,
          opacity: 1,
          ease: "power3.in",
          duration: 1,
        },
        "<0.2"
      );

      t2.fromTo(
        ".card-zoom4",
        { scale: 1, x: 0, y: 0, opacity: 0 },
        {
          scale: 1.4,
          x: 130,
          y: 10,
          opacity: 1,
          ease: "power3.in",
          duration: 1,
        },
        "<0.2"
      );
    });
    mm.add("(max-width: 768px)", () => {
      console.log("Mobile");
      // const t2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".about",
      //     start: "top 20%",
      //     end: "bottom bottom",
      //     scrub: true,
      //     markers: false,
      //   },
      // });
      // t2.to(".about", {
      //   display: "flex",
      //   flexDirection: "column",
      // });
    });
  }, []);

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full h-screen  home ">
        <div className="w-full px-4 md:px-10 lg:px-20 flex flex-col items-center text-center pt-10 font-ital">
          <p className="fade-in text-sm sm:text-base md:text-lg font-semibold italic">
            New Delhi, India
          </p>

          <a
            href="mailto:gagandeepsingh262004@gmail.com"
            className="fade-in text-sm sm:text-base md:text-lg font-medium italic text-[#9CA3AF] mt-1"
          >
            gagandeepsingh262004@gmail.com
          </a>

          <div className="pt-8 md:pt-12 lg:pt-3">
            <h1 className="fade-in text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase tracking-wider leading-tight">
              GaganDeep <br />
              Singh
            </h1>

            <p className="fade-in text-sm sm:text-base md:text-lg font-medium italic text-[#9CA3AF] pt-4 max-w-xl mx-auto px-2">
              Building modern web apps with MongoDB, Express, React, and
              Node.js.
            </p>
          </div>
        </div>

        <div className="w-full pt-3 flex justify-center items-center">
          <div className="cards flex flex-row flex-wrap justify-center items-center gap-6 card-down card-stack w-full max-w-5xl">
            <div className="card1 card flex flex-col items-center justify-center bg-[#353C45]">
              <DiMongodb className="text-6xl md:text-8xl text-[#549332]" />
              <p className="font-semibold font-ital text-white">MongoDb</p>
            </div>
            <div className="card2 card flex flex-col items-center justify-center bg-[#3178c6]">
              <SiExpress className="text-6xl md:text-8xl text-[#F7F7F7]" />
              <p className="font-semibold font-ital text-[#F7F7F7]">
                Express Js
              </p>
            </div>
            <div className="card3 card flex flex-col items-center justify-center bg-[#E1FFDE]">
              <FaReact className="text-6xl md:text-8xl text-[#5AC6E1]" />
              <p className="font-semibold font-ital text-black">React Js</p>
            </div>
            <div className="card4 card flex flex-col items-center justify-center bg-[#2D2D2D]">
              <FaNodeJs className="text-6xl md:text-8xl text-white" />
              <p className="font-semibold font-ital text-white">Node Js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full about px-4 sm:px-6 md:px-8 pt-4  flex flex-col">
        <h2 className="uppercase font-medium font-ital text-4xl sm:text-5xl md:text-6xl">
          About Me
        </h2>

        <div className="pt-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Turning Vision into{" "}
            <span className="text-[#990900]">Interactive</span>,<br />
            <span>Dynamic</span>, and <br />
            <span className="text-[#990900]">Scalable</span> Websites.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-start gap-10 pt-10">
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold font-ital">
              Hi, I&rsquo;m GaganDeep Singh, a MERN Stack Developer.
            </h2>
            <p className="pt-4 text-[#9CA3AF] text-base sm:text-lg md:text-xl">
              I&rsquo;ve developed several practice projects that showcase my
              skills in building modern, responsive web applications. I&rsquo;m
              passionate about creating dynamic, scalable solutions with
              MongoDB, Express.js, React, and Node.js that deliver seamless and
              engaging user experiences. In my portfolio, you&rsquo;ll find
              examples of my work that highlight my commitment to writing clean,
              efficient code and crafting intuitive designs. I&rsquo;m excited
              to continue growing as a developer and contribute innovative ideas
              to every project I take on.
            </p>
          </div>

          {/* Right Cards (animation only visible on lg+) */}
          <div className="w-full lg:w-1/2 relative h-[400px] hidden lg:flex card-conatiner">
            {/* MongoDB Card */}
            <div className="card-zoom1 absolute w-[250px] h-[250px] flex justify-center items-center rounded-[20px] bg-[#353C45] z-40">
              <div className="flex flex-col justify-center items-center">
                <DiMongodb className="text-8xl text-[#549332]" />
                <p className="font-semibold font-ital text-white">MongoDb</p>
              </div>
            </div>

            {/* Express Card */}
            <div className="card-zoom2 absolute w-[250px] h-[250px] flex justify-center items-center rounded-[20px] bg-[#3178C6] z-30">
              <div className="flex flex-col justify-center items-center">
                <SiExpress className="text-8xl text-white" />
                <p className="font-semibold font-ital text-white">Express Js</p>
              </div>
            </div>

            {/* React Card */}
            <div className="card-zoom3 absolute w-[250px] h-[250px] flex justify-center items-center rounded-[20px] bg-[#E1FFDE] z-20">
              <div className="flex flex-col justify-center items-center">
                <FaReact className="text-8xl text-[#5AC6E1]" />
                <p className="font-semibold font-ital text-black">React JS</p>
              </div>
            </div>

            {/* Node Card */}
            <div className="card-zoom4 absolute w-[250px] h-[250px] flex justify-center items-center rounded-[20px] bg-[#2D2D2D] z-10">
              <div className="flex flex-col justify-center items-center">
                <FaNodeJs className="text-8xl text-white" />
                <p className="font-semibold font-ital text-white">Node Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="min-h-screen px-4 sm:px-6 md:px-8 pt-20 flex flex-col">
        <h2 className="text-black uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-16">
          My Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-64 bg-gray-100 rounded-t-lg flex items-center justify-center">
              <div className="text-gray-500 p-4">
                <img
                  src="/Omdb.png"
                  alt="OMDB Movie Search App"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-2xl font-bold text-gray-900">
                OMDB Movie Search App
              </h5>
              <p className="mb-4 text-gray-700 leading-relaxed">
                A responsive movie search application built with React and OMDb
                API. Users can search for any movie and view detailed info
                including title, genre, plot, and poster. Implemented using
                modern React Hooks for dynamic data rendering.
              </p>
              <a
                href="https://omdbmovsea.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Live Preview
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-64 bg-gray-100 rounded-t-lg flex items-center justify-center">
              <div className="text-gray-500 p-4">
                <img src="/LMS.png" className="rounded-lg" alt="LMS System" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-2xl font-bold text-gray-900">
                Learning Management System (LMS)
              </h5>
              <p className="mb-4 text-gray-700 leading-relaxed">
                A comprehensive LMS platform where the admin can register
                students by filling in their personal, academic, and guardian
                details. The system auto-generates unique student IDs and
                calculates dynamic fee structures with EMI breakdown.
              </p>
              <a
                href="https://lms-1-lzu6.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Live Preview
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-64 bg-gray-100 rounded-t-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-gray-500 p-4">
                  <img
                    src="/Feninso.png"
                    className="rounded-lg"
                    alt="Feninso Fashion"
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-2xl font-bold text-gray-900">Feninso</h5>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Feninso is a visually engaging, fully static fashion brand
                website built to highlight bespoke couture through elegant
                visuals and modern UI interactions. Developed using HTML, CSS,
                and JavaScript with GSAP animations.
              </p>
              <a
                href="https://feninso.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Live Preview
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen px-4 py-25">
        <h1 className="text-center mb-12 font-bold text-4xl sm:text-5xl text-zinc-700 leading-snug">
          Contact Me
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="tel:+919266848530"
            className="dark:bg-gray-800 p-4 rounded-xl flex items-center space-x-1 shadow-md w-full max-w-xs justify-center"
          >
            <Smartphone className="text-2xl text-white" />
            <span className="font-semibold text-sm sm:text-base text-white">
              +91 9266848530
            </span>
          </a>

          <a
            href="mailto:gagandeepsingh262004@gmail.com"
            className="bg-white p-6 rounded-xl flex items-center space-x-4 shadow-md w-full max-w-sm justify-center"
          >
            <Mail className="text-2xl text-black" />
            <span className="font-semibold text-sm sm:text-base">
              gagandeepsingh262004@gmail.com
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="w-full max-w-3xl mx-auto space-y-6 px-2"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={emailData.name}
            required
            className="w-full p-4 rounded-md bg-[#f1f5f9] border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={emailData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-md bg-[#f1f5f9] border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={emailData.message}
            required
            onChange={handleChange}
            rows="6"
            className="w-full p-4 rounded-md bg-[#f1f5f9] border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          ></textarea>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="dark:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl hover:dark:bg-gray-600 cursor-pointer transition duration-300"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Home;
