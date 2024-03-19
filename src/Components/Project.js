const Project = ({github,projManageLink, image, description,link}) => {
    return ( 
        <div className="max-sm:scale-75 flex flex-col gap-y-2 w-[300px] h-[540px] rounded-xl bg-[#30323d] pb-5  ">
            
            <div className='w-[200px] 0 h-[300px]  m-auto mt-3'>
            <img className="w-[100%] h-[100%] object-contain" src={image}></img>
            </div>
            
            <div className="flex h-10 w-fit m-auto gap-10 justify-evenly overflow-hidden">
            <button className='bg-white h-[100%]  px-1 rounded-md' onClick={() => window.open(github)}>Code</button>
            <button className='bg-white h-[100%] px-1 text-center rounded-md' onClick={() => window.open(projManageLink)}>Demo</button>
            {link && <button className='bg-white h-[100%] px-1 text-center rounded-md' onClick={() => window.open(link)}>Site</button>}
            </div>
            <div className=" h-2/3 max-sm:text-xs max-sm:h-1/3 text-base p-1 relative w-[90%] m-auto  rounded-lg bg-white break-words">
            <p>{description}</p>
            </div>
        </div>
     );
}
 
export default Project;