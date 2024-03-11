import Timeline from "../Components/TImeline";

const Experience = () => {
    return (
       <div className="bg-[#30323d] relative justify-center items-center flex flex-col pt-10 pb-30">
    <a className="absolute top-0" id="Projects"></a>
    <h1 className="text-[#fff] pt-10 text-5xl lg:text-6xl lg:pt-0 lg:pl-10">Experience</h1>
    <div className="h-full w-full flex justify-center items-center lg:pt-32">
        <Timeline className="w-full max-w-screen-lg" /> {/* Adjust width as needed */}
    </div>
</div>

    );
}

export default Experience;
