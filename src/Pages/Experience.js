import Timeline from "../Components/TImeline";

const Experience = () => {
    return (
        <div className="bg-[#30323d] relative min-h-screen justify-center items-center md:w-6/6 max-sm:h-screen max-sm:w-screen h-full flex flex-col lg:flex-row pb-10">
            <a className="absolute top-0" id="Projects"></a>
            <h1 className="text-[#fff] pt-10 text-5xl top-0 absolute">Experience</h1>
            <div className="h-full w-full flex justify-center items-center pt-32 ">
                <Timeline/>
            </div>
        </div>

    );
}

export default Experience;
