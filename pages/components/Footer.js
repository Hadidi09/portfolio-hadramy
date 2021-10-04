import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className="flex bg-gray-500 justify-center flex-col items-center">
      <div className=" flex bg-white m-2 p-3 rounded-2xl cursor-pointer ">
        <div>
          <Link href="https://www.linkedin.com/in/cheikh-el-hadramy-n-diaye/"  >
           
             <FontAwesomeIcon icon={["fab", "linkedin"]} size="4x" className="hover:text-blue-800  text-blue-600 " target="_blank" rel="noopener"  />
            
            
          </Link>
          
        </div>
        
        <div>
          <Link href="https://github.com/Hadidi09">
           
            <FontAwesomeIcon icon={["fab", "github"]} size="4x" className="hover:text-black  text-gray-700 " target="_blank" rel="noopener"/>
           
          </Link>
        </div> 
      </div>
      <div className=" bg-gray-900 text-white rounded-3xl p-1 m-1 hover:bg-white hover:text-gray-900 cursor-pointer">
        @2021 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
