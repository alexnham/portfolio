import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#30323d] to-[#97989e] h-screen w-screen">
          <a className="top-0" id="Home"> </a>
    <div className="relative text-white flex flex-col pt-64 md:ml-32 text-5xl gap-5 p-10">
      <h1>Hi I'm Alex Nham</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Software Engineer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Full-Stack Developer',
            1000,
            'Fitness Enthusiast',
            1000,
          ]}
          wrapper="span"
          className='text-base italic'
          speed={20}
          repeat={Infinity}
        />
        <a className='text-base w-20 text-center bg-slate-400 rounded-lg' href="#About">About Me</a>        
    </div>
    </div>

  );
}

export default Home;