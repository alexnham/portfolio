import resume from './resume.pdf'
const Navbar = () => {

    return ( 
        <nav className="text-white relative left-0 right-0 top-5  text-xs m-auto w-3/4 z-10 flex justify-evenly border-b-white border-solid border-b ">
            <h1 ><a href="#Home">Home</a></h1>
            <h1 ><a href="#About">About</a></h1>
            <h1 ><a href="#Projects">Projects</a></h1>
            <h1 ><a href="#Contact">Contact</a></h1>
            <h1 ><a href={resume} target='_blank'>Resume</a></h1>

               </nav>
      

     );
}
 
export default Navbar;
    
