const Project = ({github,projManageLink, image, description}) => {
    return ( 
        <div className="flex flex-col gap-y-2 w-[240px] h-[340px] rounded-xl bg-[#30323d] pb-5  ">
            
            <div className='w-[200px] h-[300px] m-auto mt-3'>
            <img className="w-[100%] h-[100%] object-scale-down" src={image}></img>
            </div>
            
            <div className="flex h-10 w-fit m-auto gap-10 justify-evenly overflow-hidden">
            <button className='bg-white h-[100%]  px-1 rounded-md' onClick={() => window.open({github})}>Code</button>
            <button className='bg-white h-[100%] px-1 text-center rounded-md'onClick={() => window.open({projManageLink})}>Demo</button>
            </div>
            <div className="text-[10px] p-1 relative h-2/3 w-[90%] m-auto  rounded-lg bg-white break-words">
            <p>{description}</p>
            </div>
        </div>
     );
}
 
export default Project;