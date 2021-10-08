import React from 'react';
import { Bounce } from "react-awesome-reveal";
import Image from 'next/image'
import Html5 from '../../public/html5.png'
import Css3 from '../../public/css3.png';
import Javascript from "../../public/javascript.png";
import Bootstrap from "../../public/bootstrap.jpg";
import Sass from '../../public/sass.png';
import Tailwind from '../../public/tailwind.png';
import Node from '../../public/node.png';
import Mongodb from '../../public/mongodb.png';
import Mysql from '../../public/mysql.png';
import CV from "../../public/cvtech.png";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, EffectCoverflow]);

const Competences = () => {
    return (
      <section className="w-screen mt-20  "  id="competences">
       <div className="flex justify-center items-center">
            <h2 className=" headtwo w-64  bg-gray-800 text-white text-2xl rounded-3xl px-4 py-2 cursor-pointer transition duration-300 ease-in transform hover:bg-gray-500 hover:text-white hover:scale-90   uppercase  ">
            Compétences
            </h2>
        </div>
        <Bounce cascade delay={ 150 } fraction={0.1}  duration={1500} direction={'out'}>
            <Swiper
          
                 slidesPerView={5}
            pagination={{ clickable: true, type: 'bullets' }}

                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  spaceBetween={12}
                  breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                  }
                  }
                      
                    }
              coverflowEffect={{
                  "rotate": 30,
                  "slideShadows": false
              }}
          onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="swiper-container    h-52 my-5 bg-gradient-to-l from-gray-300 via-gray-600 to-gray-600 hover:scale-150 focus:scale-x-150"
                >
                  
                <ul className=" rounded-3xl m-0  ">
                    <SwiperSlide className="pt-4"><Image src={Html5} width={150} height={150} quality={100} alt="photo de la maquette" className=" rounded-3xl  " /></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Css3} width={150} height={150} quality={100} alt="photo de la vie" className=" rounded-3xl  " /></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Javascript} width={150} height={150} quality={100} alt="photo de java" className=" rounded-3xl  " /></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Bootstrap} width={150} height={150} quality={100} alt="photo de bootstrap" className=" rounded-3xl  " /></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Sass} width={150} height={150} quality={100} alt="photo de Sass" className=" rounded-3xl  "/></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Tailwind} width={150} height={150} quality={100} alt="photo de Tailwind" className=" rounded-3xl  "/></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Node} width={150} height={150} quality={100} alt="photo de Node" className=" rounded-3xl  "/></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Mongodb} width={150} height={150} quality={100} alt="photo de Mongodb" className=" rounded-3xl  "/></SwiperSlide>
                    <SwiperSlide className="pt-4"><Image src={Mysql} width={150} height={150} quality={100} alt="photo de Mysql" className=" rounded-3xl  "/></SwiperSlide>
                </ul>
        </Swiper>
              
        </Bounce>
        
        </section>
    );
};

export default Competences;