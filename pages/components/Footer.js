import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex bg-gray-500 justify-center flex-col items-center">
      <div className=" flex bg-white m-2 rounded-2xl cursor-pointer ">
        <Link href="https://www.linkedin.com/in/cheikh-el-hadramy-n-diaye/">
          <a target="_blank" rel="noopener" >
            <img
            className="to-gray-900"
            src="https://img.icons8.com/material-outlined/60/111827/linkedin--v1.png"
            alt="profil linkedin"
            />
          </a>
        </Link>
        <Link href="https://github.com/Hadidi09">
          <a target="_blank" rel="noopener" >
            <img
            src="https://img.icons8.com/material-outlined/60/111827/github.png"
            alt="profil github"
            />
          </a> 
        </Link>
        
      </div>
      <div className=" bg-gray-900 text-white rounded-3xl p-1 m-1">
        @2021 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
