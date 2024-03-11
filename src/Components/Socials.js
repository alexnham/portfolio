import { SocialIcon } from 'react-social-icons'


const Socials = () => {
    return ( 
        <div className='flex justify-evenly right-0 items-center p-10 w-screen scale-[1.5]'>
            <SocialIcon className='cursor-pointer' bgColor='black' target='_blank' url="https://linkedin.com/in/alex-nham" />
            <SocialIcon  className='cursor-pointer' bgColor='black'target='_blank' url="https://github.com/alexnham" />
            <SocialIcon className='cursor-pointer' bgColor='black' target='_blank' url="https://instagram.com/in/alexnham_" />
            <SocialIcon className='cursor-pointer' bgColor='black' target='_blank' network="email" url="mailto:alexnham11@gmail.com" />


        </div>
        
     );
}
 
export default Socials;