import img2 from "../Images/img2.png"


const About = () => {
    return (
        <div class="min-w-28 relative w-screen h-screen flex max-md:h-[200%] flex-wrap flex-row">
            <div class="whitespace-normal bg-[#ddd] max-md:px-10 w-full md:w-3/6  h-screen  flex flex-wrap flex-col justify-center items-center">
                <h1 class="pt-10 text-5xl top-0">About Me</h1>
                <p class="max-sm:px-10 max-sm:text-sm block text-wrap w-full md:w-3/4 h-3/2 pt-10">
                    Ever since I was little, I was always stuck to a computer screen whether it was playing games or watching funny videos. Now I'm stuck to a screen trying to debug code.
                    <br />As an aspiring Software Engineer, I always strive to do better than yesterday. With a solid foundation in Computer Science from the University of Western, where I currently attend, I bring a blend of academic excellence and practical experience to every project. Currently, I'm employed as a Website Coordinator at Gagnon Levesque Inc, where I leverage my skills to develop and enhance client web stores, optimizing workflow processes and delivering top-notch digital experiences.
                    <br />Outside of the digital realm, I love to find ways to better myself, whether it's going to the gym, or even just learning something new. Always finding a way to improve is something I live by.

                </p>
            </div>
            <div class="bg-[#18191e] w-full md:w-3/6 h-screen flex justify-center items-center">
                <img class="w-7/9 h-7/8" src={img2} alt="Profile Picture" />
            </div>
            <a class="absolute top-0 text-5xl text-red-500" id="About"></a>
        </div>

    );
}

export default About;