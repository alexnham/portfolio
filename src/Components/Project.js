const Project = ({ github, projManageLink, image, description, link }) => {
    return (
      <div className="flex flex-col gap-y-4 w-[300px] h-[540px] rounded-xl bg-[#30323d] pb-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
        <div className="w-[250px] h-[250px] m-auto mt-4 overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src={image} alt="Project" />
        </div>
        <div className="flex h-12 w-fit m-auto gap-4 justify-evenly">
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-blue-700"
            onClick={() => window.open(github)}
          >
            Code
          </button>
          <button
            className="bg-green-600 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-green-700"
            onClick={() => window.open(projManageLink)}
          >
            Demo
          </button>
          {link && (
            <button
              className="bg-red-600 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-red-700"
              onClick={() => window.open(link)}
            >
              Site
            </button>
          )}
        </div>
        <div className="flex-grow max-sm:text-xs text-sm p-4 bg-white  shadow-inner text-gray-800 break-words overflow-hidden">
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default Project;
  