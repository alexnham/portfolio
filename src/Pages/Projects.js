import ProjManage from "../Images/Logo.png";
import Project from "../Components/Project";
import aim from "../Images/aim.png";
import ai from "../Images/ainspire.jpeg";
import booking from "../Images/booking.png";
import coinflip from "../Images/coinflip.png";
import ef from "../Images/ef.png"


const Projects = () => {
    return (
        <div class="bg-[#ddd] min-h-screen flex flex-col justify-center items-center pb-10">
        <a class="absolute top-0" id="Projects"></a>
        <h1 class="text-[#333] pt-10 text-3xl md:text-5xl">Projects</h1>
        <section class="overflow-hidden grid gap-5 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 pt-5 md:pt-10">
            <div class="max-w-[calc(50%-1rem)] md:max-w-none">
                <Project image={ProjManage} link="https://project-6olz.onrender.com/user/AlexNham" github="https://github.com/alexnham/ProjManage-back" projManageLink="https://project-6olz.onrender.com/" description="ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations!"/>
            </div>
            <div class="max-w-[calc(50%-1rem)] md:max-w-none">
                <Project image={aim} description="PrecisionPro: Your Ultimate Aim Trainer! Refine your aiming skills with PrecisionPro, With increasingly difficult exercises, score counter, and a high score chart, hitting your targets has never been easier." github="https://github.com/alexnham/AimTrainer" projManageLink="https://project-6olz.onrender.com/projects/65c5d0c757f20d868d4c2857"/>
            </div>
            <div class="max-w-[calc(50%-1rem)] md:max-w-none">
                <Project image={coinflip} link="https://alexnham.github.io/coinflip" description="CoinFlip Simulator: The project is an interactive coin flip game with captivating animations and a win streak challenge. Players experience the thrill of tossing a virtual coin and can track their success with a built-in win streak feature." github="https://github.com/alexnham/coinflip" projManageLink="https://project-6olz.onrender.com/projects/65b3c3af10470b3e58afe524"/>
            </div>
            <div class="max-w-[calc(50%-1rem)]  md:max-w-none">
                <Project image={ai} link="https://projainspire.onrender.com/" description="AInspire, my project idea generator utilizes advanced AI technology to provide a diverse range of creative concepts, seamlessly integrating React and Tailwind CSS. It guides users through technical details, catering to both experienced developers and newcomers, enabling them to bring their dream projects to life with the latest tools and features." projManageLink="https://project-6olz.onrender.com/projects/65c5d16757f20d868d4c2864" github="https://github.com/alexnham/projainspire"/>
            </div>
            <div class="max-w-[calc(50%-1rem)]  md:max-w-none">
                <Project image={booking} description="BookManage, my in-house booking system simplifies the booking process by providing an intuitive interface powered by JavaFX and robust data management with MySQL Workbench. Users can effortlessly navigate through the booking process, and an integrated calendar feature helps them stay organized with upcoming appointments." projManageLink="https://project-6olz.onrender.com/projects/65c5d13a57f20d868d4c285c" github="https://github.com/alexnham/bookingsystem"/>
            </div>
            <div class="max-w-[calc(50%-1rem)]  md:max-w-none">
                <Project image={ef} link="https://ashtonfranklin04.itch.io/elemental-flip" description="Elemental Flip, in a world, barred with pain and suffering, a small village has created an unknown potion recipe, that grants an endless source of joy to withstand this cruel world. a large group of evil raiders hated the sound of this, and wanted to put an end to the village. unexpectedly, the village fought back, defending their recipe and taking down the raiders. Now, you are tasked with a significant operation finish the job. take down the village." projManageLink="https://project-6olz.onrender.com/projects/66086193f9a8b4a57e3d45ba" github="https://github.com/alexnham/elemental_flip"/>
            </div>
        </section>
    </div>
    

    );
}
export default Projects;
