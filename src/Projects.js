import ProjManage from "./Logo.png";
import Project from "./Project";


const Projects = () => {
    return (
        <div className="bg-[#ddd] relative min-h-screen justify-center items-center md:w-6/6 max-sm:h-screen max-sm:w-screen h-full flex flex-col lg:flex-row">
            <a className="absolute top-0" id="Projects"></a>
            <h1 className="text-white pt-10 text-5xl top-0 absolute">Projects</h1>
            <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-32 xl:pt-10 ">
            <Project image={ProjManage} github={"https://github.com/alexnham/ProjManage-back"} ProjManage="https://project-6olz.onrender.com/" description={"ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations!"}/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>

            </section>
        </div>

    );
}

export default Projects;
