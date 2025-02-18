import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import env from "react-dotenv";

import {
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
  FaTwitter
} from 'react-icons/fa';


const Contacts = () => {
  const url = env.url;
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    console.log("click");
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thanks for Equiring we will shortly contact you :)");
        setData({
          name: "",
          email: "",
          message: "",
        });
      });
  }
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-1000 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="lg:w-1/2 md:w-2/3  mx-auto mb-8">
            <div className="flex justify-center  md:space-x-12 lg:space-x-14 xl:space-x-20 space-x-6">
            <div className="w-12 h-10 flex flex-col items-center">
              <a href="https://discord.com/invite/4xruwjjU9B" target="discord" > <FaDiscord className= " hover:fill-current hover:text-[#0DFF1C] hover:w-12 " size={40} /> </a>
            </div>
              <div className="w-12 h-10 flex flex-col items-center">
              <a href="Mailto:fosscu@gmail.com" target="mail" ><FaEnvelope className= " hover:fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} /></a>
               </div>
                <div className="w-12 h-10 flex flex-col items-center">
              <a href="https://www.linkedin.com/company/fosscu/" target="linkedin" ><FaLinkedin className= " fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} /></a>
               </div>
                <div className="w-12 h-10 flex flex-col items-center">
              <a href="https://twitter.com/fosscuk" target="twitter" ><FaTwitter className= " fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10 " size={35} /></a>
               </div>

            </div>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form class="flex flex-wrap -m-2" onSubmit={(e) => submit(e)}>
              <div class="p-2 w-1/2">
                <div class="">
                  <label for="name" class="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => handle(e)}
                    value={data.name}
                    class="w-full bg-gray-800 hover:outline-2 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="">
                  <label for="email" class="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => handle(e)}
                    value={data.email}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="">
                  <label for="message" class="leading-7 text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => handle(e)}
                    value={data.message}
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2  w-full">
                <button class="flex mx-auto tracking-tight font-semibold text-black bg-[#00ff11c4] border-0 py-2 px-8 focus:outline-none hover:bg-[#0dff1c] rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
