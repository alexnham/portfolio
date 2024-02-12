import ProjManage from "./Logo.png";

const Projects = () => {
    return (  
        <div className="relative min-h-screen bg-gradient-to-b from-green-700 to-green-400 justify-center items-center md:w-6/6 max-sm:h-screen max-sm:w-screen h-full flex flex-col lg:flex-row">
    <a className="absolute top-0" id="Projects"></a>
    <h1 className="text-white pt-10 text-5xl top-0 absolute">Projects</h1>

    <div className="w-full md:w-1/2 flex justify-center items-center pt-16">
        <a className="w-3/4 flex justify-center items-center" href="https://project-6olz.onrender.com" target="_blank">
            <img className="p-10 max-h-full" src={ProjManage} alt="Project Management"></img>
        </a>
    </div>

    <div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-10 px-4">
        <p className="text-white text-wrap text-2xl text-center">ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations! To view my projects <a className="underline text-blue-300 hover:text-blue-800" href="https://project-6olz.onrender.com/user/AlexNham" target="_blank">click here</a></p>
    </div>
</div>

    );
}
 
export default Projects;
