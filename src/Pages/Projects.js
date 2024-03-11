import ProjManage from "../Images/Logo.png";
import Project from "../Components/Project";
import aim from "../Images/aim.png";
import ai from "../Images/ainspire.jpeg";
import booking from "../Images/booking.png";
import coinflip from "../Images/coinflip.png";


const Projects = () => {
    return (
        <div className="bg-[#ddd] relative min-h-screen justify-center items-center md:w-6/6 max-sm:h-screen max-sm:w-screen h-full flex flex-col lg:flex-row pb-10">
            <a className="absolute top-0" id="Projects"></a>
            <h1 className="text-[#333] pt-10 text-5xl top-0 absolute">Projects</h1>
            <section class="overflow-scroll grid gap-4 max-sm:gap-[100%] max-sm:ml-16 max-sm:mr-16 max-sm:grid-rows-1 max-sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-32 relative">
                <Project image={ProjManage} link="https://project-6olz.onrender.com/user/AlexNham" github="https://github.com/alexnham/ProjManage-back" projManageLink="https://project-6olz.onrender.com/" description="ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations!"/>
                <Project image={aim} description="PrecisionPro: Your Ultimate Aim Trainer! Refine your aiming skills with PrecisionPro, With increasingly difficult exercises, score counter, and a high score chart, hitting your targets has never been easier." github="https://github.com/alexnham/AimTrainer" projManageLink="https://project-6olz.onrender.com/projects/65c5d0c757f20d868d4c2857"/>
                <Project image={coinflip} link="https://alexnham.github.io/coinflip" description="CoinFlip Simulator: The project is an interactive coin flip game with captivating animations and a win streak challenge. Players experience the thrill of tossing a virtual coin and can track their success with a built-in win streak feature." github="https://github.com/alexnham/coinflip" projManageLink="https://project-6olz.onrender.com/projects/65b3c3af10470b3e58afe524"/>
                <Project image={ai} link="https://projainspire.onrender.com/" description="AInspire, my project idea generator utilizes advanced AI technology to provide a diverse range of creative concepts, seamlessly integrating React and Tailwind CSS. It guides users through technical details, catering to both experienced developers and newcomers, enabling them to bring their dream projects to life with the latest tools and features." projManageLink="https://project-6olz.onrender.com/projects/65c5d16757f20d868d4c2864" github="https://github.com/alexnham/projainspire"/>
                <Project image={booking} description="BookManage, my in-house booking system simplifies the booking process by providing an intuitive interface powered by JavaFX and robust data management with MySQL Workbench. Users can effortlessly navigate through the booking process, and an integrated calendar feature helps them stay organized with upcoming appointments." projManageLink="https://project-6olz.onrender.com/projects/65c5d13a57f20d868d4c285c" github="https://github.com/alexnham/bookingsystem"/>
            </section>
        </div>
    );
}
export default Projects;
