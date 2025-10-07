
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Header() {
    return (
        <header className='bg-[#9c9] '>
        
           <header className='max-w-[90vw] mx-auto flex justify-between items-center py-[1rem] '>

            <div className='italic tracking-[0.2rem]'>
                <span>ElGHOUSNI</span> Comperative
                </div>

<marquee className='w-[20rem]' behavior="" direction="left">Sign up and GET 25% OFF for your first order</marquee>
            <div className="flex gap-[1rem] ">

              <a className='text-black hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF color="#000000"/>
              </a>

              <a className='hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter color="#000000"/>
              </a>

              <a className='hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram color="#000000" />
              </a>

            </div>
           </header>
           </header>
    )
}



