import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className="content-footer bg-gray-500 flex flex-col justify-center items-center ">
      <h4 className=" headtwo w-64 font-pacifico bg-gray-800 text-white text-2xl rounded-3xl my-8  px-4 py-2 cursor-pointer transition duration-300 ease-in transform hover:bg-gray-700 hover:text-white hover:scale-90 uppercase">Contact </h4>
      <div className="flex  justify-center flex-row items-center mx-2  ">
        <div className="contact flex flex-col  ">
          
          <div className="flex flex-col text-white bg-gray-800 rounded-3xl p-3  ">
            <div className="">
              <h5 className="text-xl">Email :</h5>
              <p className="underline text-xl cursor-pointer transition delay-25 duration-200 ease-out transform hover:scale-105">cheikhhadramy@yahoo.fr</p>
            </div>
            <div className="">
              <h5 className="text-xl">Tel :</h5>
              <p className="underline text-xl cursor-pointer transition delay-25 duration-200 ease-out transform hover:scale-105">07.82.58.01.50</p>
            </div>
            
          </div>
            
        </div>
        <div className=" flex bg-white m-2 p-3 rounded-2xl cursor-pointer ">
          <div>
            <Link href="https://www.linkedin.com/in/cheikh-el-hadramy-n-diaye/"   >
              <a target="_blank" rel="noopener" >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="7x" className="transition duration-300 ease-in  hover:text-blue-800  text-blue-600 "   />
              </a>
            </Link>
          </div>
          
          <div>
            <Link href="https://github.com/Hadidi09" target="_blank" rel="noopener">
              <a target="_blank" rel="noopener">
                <FontAwesomeIcon icon={["fab", "github"]} size="7x" className="transition duration-300 ease-in hover:text-black  text-gray-700 " />
              </a>
            </Link>
          </div> 
        </div>
        
      </div>
      
      <div className=" flex justify-center items-center w-max bg-gray-900 text-white rounded-3xl p-3 mb-5 transition duration-300 ease-in hover:bg-white hover:text-gray-900 cursor-pointer">
        Portfolio N'DIAYE Cheikh El Hadramy @2021 All rights reserved
      </div>
    </div>
    
  );
};

export default Footer;
