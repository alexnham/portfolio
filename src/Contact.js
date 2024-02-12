import { useState } from "react";
import Form from "./Form";
import img from "./img2.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import instagram from "./Instagram_logo.png"

const Contact = () => {


    return (
        <div class="max-lg:overflow-auto relative lg:h-screen bg-gradient-to-b from-green-400 to-green-700 w-screen text-center flex justify-evenly max-lg:flex-col">
            <h1 class="absolute pt-10 max-lg:-top-6 max-sm:top-1  text-5xl left-0 right-0 m-auto text-white z-10">Contact Me</h1>
            <a class="absolute top-0" id="Contact"></a>
            <div class="whitespace-normal max-md:bg-inherit bg-green-900 max-lg:w-full h-3/4 max-sm:pt-10 lg:w-1/3 m-auto text-white flex flex-wrap justify-center">
                <Form />
            </div>
            <div class="relative max-lg:text-s max-md:bg-inherit whitespace-normal bg-green-900 w-full max-md:pt-10 max-lg:flex-col lg:w-1/3 h-3/4 m-auto text-white flex flex-wrap flex-col justify-evenly items-start">

                <h1 className="absolute top-4 left-0 right-0 mx-auto">Social Media</h1>
                <div className="flex flex-col">
                    <a target="_blank" href="https://www.github.com/alexnham">
                    <span className="cursor-pointer flex text-xl ml-6 items-center">
                            <img className="h-32" src={github}></img>
                            <label className="cursor-pointer m-10">github.com/alexnham</label>
                    </span>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/alex-nham">
                    <span className="cursor-pointer flex text-xl ml-11 ">
                        <img className="h-20" src={linkedin}></img>
                        <label className="cursor-pointer m-10 ml-16">linkedin.com/in/alex-nham</label>
                    </span>
                    </a>

                    <a target="_blank" href="https://www.instagram.com/alexnham_">
                    <span className="text-pretty cursor-pointer flex text-xl ml-11 mb-10">
                        <img className="h-20" src={instagram}></img>
                        <label className="cursor-pointer m-10 ml-16">instagram.com/alexnham_</label>
                    </span>
                    </a>



                </div>
            </div>
        </div>

    );
}

export default Contact;