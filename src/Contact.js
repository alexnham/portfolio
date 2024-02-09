import { useState } from "react";
import Form from "./Form";

const Contact = () => {
   

    return (
        <div className="relative bg-green-500 w-screen h-screen text-center flex justify-evenly">
            <h1 className="absolute pt-10 text-5xl left-0 right-0 m-auto text-white">Contact Me</h1>
            <a className="absolute top-0" id="Contact"></a>
            <div className="whitespace-normal bg-green-900 w-1/3 h-3/4 m-auto  text-white flex flex-wrap  justify-center">
                <Form/>
            </div>
            <div className="whitespace-normal bg-green-900 w-1/3 h-3/4 m-auto  text-white flex flex-wrap flex-col justify-center items-center">
x            </div>

        </div>
    );
}

export default Contact;