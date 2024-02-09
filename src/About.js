import img1 from "./img1.png"
import img2 from "./img2.png"


const About = () => {
    return (
        <div className=" min-w-28 relative w-screen h-screen flex flex-wrap flex-row">
            <div className="whitespace-normal bg-green-700 w-3/6 h-screen  text-white flex flex-wrap flex-col justify-center items-center">
                <h1 className=" pt-10 text-5xl top-0">About Me</h1>
                <p className="overflow-scroll block text-wrap w-3/4 h-3/2 pt-10 ">Ever since I was little, I was always stuck to a computer screen whether it was playing games or watching funny videos. Now I'm stuck to a screen trying to debug code.
                    <br />As an aspiring Software Engineer, I always strive to do better than yesterday. With a solid foundation in Computer Science from the University of Western, where I currently attend, I bring a blend of academic excellence and practical experience to every project. Currently, I'm employed as a Website Coordinator at Gagnon Levesque Inc, where I leverage my skills to develop and enhance client web stores, optimizing workflow processes and delivering top-notch digital experiences.
                    <br />Outside of the digital realm, I love to find ways to better myself, whether it's going to the gym, or even just learning something new. Always finding a way to improve is something I live by.
                    <br /><br />Skills
                    <br />  - Languages: Java, Python, C, HTML, CSS (Tailwind), JavaScript (ReactJS, NodeJS, ExpressJS)
                    <br />  - Familiar with Databases (MongoDB, SQL)
                    <br />  - Proficient in Microsoft Office Suite
                    <br />  - Knowledge in Unix
                    <br />  - Project and Time Management Strategic-thinking and Problem-solving abilities
                </p>
            </div>
            <div className="bg-green-200 w-3/6 h-screen flex justify-center items-center">
                <div className="bg-green-500 w-4/6 h-5/6 flex justify-center items-center">
                    <img classname="w-full h-full" src={img2}></img>

                </div>
            </div>
            <a className="absolute top-0 text-5xl text-red-500" id="About"></a>
            <p className="absolute top-0 right-0 text-5xl text-black" ><a href="#Home">^</a></p>
            <p className="absolute bottom-0 right-0 text-5xl text-black" ><a href="#Projects">v</a></p>

        </div>
    );
}

export default About;