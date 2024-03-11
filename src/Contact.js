import { useState } from "react";
import Form from "./Form";
import img from "./img2.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import instagram from "./Instagram_logo.png"
import Socials from "./Socials";

const Contact = () => {


    return (
        <div class="bg-[#30323d] relative h-3/4 max-lg:h-[7/8] w-screen flex max-lg:flex-col overflow-hidden">
        <h1 class="absolute top-0 pt-5 max-lg:-top-6 max-sm:top-1 text-2xl left-0 px-10 right-0 text-white z-10">Contact Me</h1>
        <a class="absolute top-0" id="Contact"></a>
        <div class="whitespace-normal  max-md:bg-inherit max-lg:w-full h-full lg:w-1/3 text-white pt-20 pb-10 pl-10 flex flex-wrap overflow-auto">
            <Form />
        </div>
        <Socials/>
    </div>
    );
}

export default Contact;