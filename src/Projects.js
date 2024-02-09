import ProjManage from "./Logo.png"

const Projects = () => {
    return (  
        <div className="relative h-screen w-screen bg-white flex justify-center items-center">
        <a className="absolute top-0" id="Projects"></a>
        
        <div className="relative bg-black w-5/6 h-5/6 flex justify-center">
        <h1 className="text-white pt-10 text-5xl top-0  absolute">Projects</h1>

        <div className="w-1/2">
                <a className="w-full h-full flex justify-center items-center pt-" href="https://project-6olz.onrender.com">
                    <img className="p-10 max-h-full" src={ProjManage} alt="Project Management"></img>
                </a>
            </div>
            <div className="w-1/2 flex flex-col">
                <p className="text-white text-4xl pt-36 px-11 flex-1">ProjManage is a website I developed where users are able to display their projects. The web application utilizes React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the backend. Users are able to create their accounts securely and exhibit their creations! To view my projects <a className="underline text-blue-300 hover:text-blue-800" href="https://project-6olz.onrender.com/user/AlexNham">click here</a></p>
            </div>
           
        </div>
        <p className="absolute top-0 right-0 text-5xl text-black" ><a href="#About">^</a></p>
            <p className="absolute bottom-0 right-0 text-5xl text-black" ><a  href="#Projects">v</a></p>
    </div>
    
    );
}
 
export default Projects;