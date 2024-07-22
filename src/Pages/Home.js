import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#30323d] to-[#97989e]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-0 w-1/2 h-full bg-[#ffffff] opacity-10 transform -rotate-45 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#ffffff] opacity-10 transform -rotate-45 origin-bottom-left"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#ffffff] opacity-10 transform rotate-45 origin-bottom-right"></div>
        <div className="absolute bottom-[-27%] right-[55%] w-1/3 h-1/3 bg-[#ffffff] -rotate-45 opacity-10 "></div>
        <div className="absolute bottom-[-20%] right-1/4 w-1/4 h-1/4 bg-[#ffffff] rotate-45 opacity-10 origin-bottom-right"></div>
      </div>

      <a className="top-0" id="Home"></a>
      <div className="relative z-20 text-white flex flex-col pt-64 md:ml-32 text-5xl gap-5 p-10">
        <h1 className="text-6xl font-bold">Hi, I'm Alex Nham</h1>
        <TypeAnimation
          sequence={[
            'Software Engineer',
            1000, 
            'Full-Stack Developer',
            1000,
            'Fitness Enthusiast',
            1000,
          ]}
          wrapper="span"
          className='text-4xl font-light italic'
          speed={20}
          repeat={Infinity}
        />
        <a 
          className='text-base w-32 text-center bg-[#30323d] hover:bg-[#97989e] text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out'
          href="#About"
        >
          About Me
        </a>        
      </div>
    </div>
  );
}

export default Home;
