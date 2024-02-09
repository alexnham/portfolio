const About = () => {
    return (
        <div className="relative w-screen h-screen flex flex-row">
            <div className="bg-black w-3/6 h-screen text-white flex justify-center items-center">
                <h1 className="absolute pt-10 text-5xl top-10">About Me</h1>
                <p className="p-32">Ever since I was little, I was always stuck to a computer screen whether it was playing games or watching funny videos. Now I'm stuck to a screen trying to debug code.
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
            <div className="bg-white w-3/6 h-screen flex justify-center items-center">
                <div className="bg-blue-100 w-4/6 h-5/6">

                </div>
            </div>
            <a className="absolute top-0 text-5xl text-red-500" id="About"></a>
            <p className="absolute top-0 right-0 text-5xl text-black" ><a href="#Home">^</a></p>
            <p className="absolute bottom-0 right-0 text-5xl text-black" ><a href="#Home">v</a></p>

        </div>
    );
}

export default About;