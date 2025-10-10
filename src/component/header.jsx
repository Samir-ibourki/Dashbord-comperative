import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// export default function Header() {
//     return (
//         <section className='bg-[#cdd95f] mb-[1rem]'>

//            <header className='max-w-[90vw] mx-auto flex justify-between items-center py-[1rem] '>

//             <div className='italic text-[1rem] tracking-[0.2rem] font-extrabold'>
//                 <span className="text-[#e3e0b8]">ElGHOUSNI</span> Comperative
//                 </div>

// <marquee className='w-[25rem]' behavior="" direction="left">Sign up and GET 25% OFF for your first order</marquee>
//             <div className="flex gap-[1rem] ">

//               <a className='text-black hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF color="#000000"/>
//               </a>

//               <a className='hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter color="#000000"/>
//               </a>

//               <a className='hover:translate-y-[-10%] hover:ease-in-out hover:duration-400' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram color="#000000" />
//               </a>

//             </div>
//            </header>
//            </section>
//     )
// }

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="py-2 bg-[#f8f8f8] shadow mb-6">
      <header className="max-w-[90vw] mx-auto flex justify-between items-center py-[1rem]">
        <div className="italic text-[1rem] tracking-[0.2rem] font-extrabold">
          <span className="text-[#e3e0b8]">ElGHOUSNI</span> Comperative
        </div>

        <nav className="flex justify-center gap-6">
          <Link to="/" className="hover:text-[#088178] font-semibold">
            Produits
          </Link>

          <Link to="/checkout" className="hover:text-[#088178] font-semibold">
            Commander
          </Link>

          <Link to="/orders" className="hover:text-[#088178] font-semibold">
            Commandes
          </Link>
        </nav>

        <div className="flex gap-[1rem] ">
          <a
            className="text-black hover:translate-y-[-10%] hover:ease-in-out hover:duration-400"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF color="#000000" />
          </a>

          <a
            className="hover:translate-y-[-10%] hover:ease-in-out hover:duration-400"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="#000000" />
          </a>

          <a
            className="hover:translate-y-[-10%] hover:ease-in-out hover:duration-400"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="#000000" />
          </a>
        </div>
      </header>
    </section>
  );
}
