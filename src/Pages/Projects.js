import { useState } from 'react';
import ProjManage from "../Images/Logo.png";
import Project from "../Components/Project";
import aim from "../Images/aim.png";
import ai from "../Images/ainspire.jpeg";
import booking from "../Images/booking.png";
import coinflip from "../Images/coinflip.png";
import ef from "../Images/ef.png";

const projectsData = [
    {
        image: ProjManage,
        link: "https://project-6olz.onrender.com/user/AlexNham",
        github: "https://github.com/alexnham/ProjManage-back",
        projManageLink: "https://project-6olz.onrender.com/",
        description: "ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations!"
    },
    {
        image: aim,
        description: "PrecisionPro: Your Ultimate Aim Trainer! Refine your aiming skills with PrecisionPro. With increasingly difficult exercises, score counter, and a high score chart, hitting your targets has never been easier.",
        github: "https://github.com/alexnham/AimTrainer",
        projManageLink: "https://project-6olz.onrender.com/projects/6648680074cf5f2ac7406a12"
    },
    {
        image: coinflip,
        link: "https://alexnham.github.io/coinflip",
        description: "CoinFlip Simulator: The project is an interactive coin flip game with captivating animations and a win streak challenge. Players experience the thrill of tossing a virtual coin and can track their success with a built-in win streak feature.",
        github: "https://github.com/alexnham/coinflip",
        projManageLink: "https://project-6olz.onrender.com/projects/6648672474cf5f2ac7406a06"
    },
    {
        image: ai,
        link: "https://projainspire.onrender.com/",
        description: "AInspire, my project idea generator, utilizes advanced AI technology to provide a diverse range of creative concepts, seamlessly integrating React and Tailwind CSS. It guides users through technical details, catering to both experienced developers and newcomers, enabling them to bring their dream projects to life with the latest tools and features.",
        projManageLink: "https://project-6olz.onrender.com/projects/6648683074cf5f2ac7406a15",
        github: "https://github.com/alexnham/projainspire"
    },
    {
        image: booking,
        description: "BookManage, my in-house booking system, simplifies the booking process by providing an intuitive interface powered by JavaFX and robust data management with MySQL Workbench. Users can effortlessly navigate through the booking process, and an integrated calendar feature helps them stay organized with upcoming appointments.",
        projManageLink: "https://project-6olz.onrender.com/projects/664867c274cf5f2ac7406a0d",
        github: "https://github.com/alexnham/bookingsystem"
    },
    {
        image: ef,
        link: "https://ashtonfranklin04.itch.io/elemental-flip",
        description: "Elemental Flip, in a world, barred with pain and suffering, a small village has created an unknown potion recipe that grants an endless source of joy to withstand this cruel world. Unexpectedly, the village fought back, defending their recipe and taking down the raiders. Now, you are tasked with a significant operation: finish the job and take down the village.",
        projManageLink: "https://project-6olz.onrender.com/projects/6648678174cf5f2ac7406a09",
        github: "https://github.com/alexnham/elemental_flip"
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const handleNavClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-[#ddd] min-h-screen flex flex-col justify-center items-center pb-10">
            <a className="absolute top-0" id="Projects"></a>
            <h1 className="text-[#333] pt-10 text-3xl md:text-5xl">Projects</h1>
            <section className="overflow-hidden grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 md:pt-10 px-5">
                {projectsData.map((project, index) => (
                    <div key={index} className={`flex justify-center ${index === currentIndex ? 'block' : 'hidden'} sm:block`}>
                        <Project 
                            image={project.image}
                            link={project.link}
                            github={project.github}
                            projManageLink={project.projManageLink}
                            description={project.description}
                        />
                    </div>
                ))}
            </section>
            <div className="mt-5 flex justify-center gap-2 sm:hidden">
                {projectsData.map((_, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 rounded-full ${index === currentIndex ? 'bg-[#30323d]' : 'bg-gray-300'}`}
                        onClick={() => handleNavClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button className="mt-5 px-4 py-2 bg-[#30323d] text-white rounded-md sm:hidden" onClick={handleNext}>
                Next
            </button>
        </div>
    );
}

export default Projects;
