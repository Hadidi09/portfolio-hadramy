import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () =>
{
    const [toggle, setToggle] = useState(false)
    const [ largeur, setLargeur]= useState( 768)
    const menuToggle = () =>
    {
        setToggle(!toggle)
        console.log(toggle);
}
    useEffect(() =>
    {
        const setWidthChange = () =>
        {
            setLargeur(window.innerWidth)
            if (window.innerWidth > 769 )
            {
                setToggle(false)
                console.log("resized");
          }
      }

      window && window.addEventListener("resize", setWidthChange)
        
        return () =>
        {
            window && window.removeEventListener("resize", setWidthChange)
        }
       
    })
    return (
        <nav className=" bg-gray-500 p-4 ">
            <div className="flex items-center justify-between flex-wrap ">
                <div className="logo p-4 text-3xl rounded-3xl text-white bg-gray-900 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={largeur <= 768 ? "block" : "hidden"}>
                    
                        <button onClick={menuToggle} className="  to-red-800 rounded-3xl text-white bg-gray-900   ">
                            
                            {!toggle ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </> :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                            </>}
                        

                        </button>
               
                        
                   
                    
                    </div>
                
        
                    <div className={largeur >= 769 ? "inline-grid grid-cols-3 gap-x-10 p-4 " : "hidden"}>
            
                        <Link href="/">
                            <button className="px-2 rounded-3xl bg-gray-900 text-white">Projets</button>
                        </Link>
                
                        <Link href="/">
                            <button className="px-2 rounded-3xl bg-gray-900 text-white">Formations</button>
                        </Link>
                
                        <Link href="/">
                            <button className="px-2 rounded-3xl bg-gray-900 text-white">Expériences</button>
                        </Link>
                        
                    </div>
            </div>
            <>
            <Transition
        show={toggle}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-50"
        enterTo="opacity-100"
        leave="transition-opacity ease-out duration-1500"
        leaveFrom="opacity-100"
        leaveTo="opacity-50"
      >
        <div className=" flex justify-center">
               
                        <div className="navigation flex justify-center flex-col ">
                            <Link href="/">
                                <button className="my-2 p-2 rounded-3xl bg-gray-900 text-white">Description</button>
                            </Link>
                    
                            <Link href="/">
                                <button className="my-2 p-2 rounded-3xl bg-gray-900 text-white">Projets</button>
                            </Link>
                    
                            <Link href="/">
                                <button className="my-2 p-2 rounded-3xl bg-gray-900 text-white">Expériences</button>
                            </Link>
                        </div>
                
            </div>
      </Transition>
            </>
            
            
            
           
            
        </nav>
    );
};

export default Navbar;