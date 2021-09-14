import React from "react";
import Image from "next/image";
import Html5 from "../public/html5.png";
import Css3 from "../public/css3.png";
import Javascript from "../public/javascript.png";
import Bootstrap from "../public/bootstrap.jpg";
import Sass from "../public/sass.png";
import Tailwind from "../public/tailwind.png";
import Node from "../public/node.png";
import Mongodb from "../public/mongodb.png";
import Mysql from "../public/mysql.png";
import CV from "../public/cvtech.png";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  EffectCoverflow,
]);

const Competences = () => {
  return (
    <section className="w-screen">
      <Swiper
        slidesPerView={8}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 85,
          slideShadows: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-container flex justify-start overflow-hidden m-5 hover:scale-150 focus:scale-x-150"
      >
        <div className="flex justify-center">
          <h2 className=" bg-gray-800 text-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">
            Mes compétences
          </h2>
        </div>
        <ul className=" rounded-3xl">
          <SwiperSlide>
            <Image
              src={Html5}
              width={150}
              height={150}
              quality={100}
              alt="photo de la maquette"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Css3}
              width={150}
              height={150}
              quality={100}
              alt="photo de la vie"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Javascript}
              width={150}
              height={150}
              quality={100}
              alt="photo de java"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Bootstrap}
              width={150}
              height={150}
              quality={100}
              alt="photo de bootstrap"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Sass}
              width={150}
              height={150}
              quality={100}
              alt="photo de Sass"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Tailwind}
              width={150}
              height={150}
              quality={100}
              alt="photo de Tailwind"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Node}
              width={150}
              height={150}
              quality={100}
              alt="photo de Node"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Mongodb}
              width={150}
              height={150}
              quality={100}
              alt="photo de Mongodb"
              className=" rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Mysql}
              width={150}
              height={150}
              quality={100}
              alt="photo de Mysql"
              className=" rounded-3xl"
            />
          </SwiperSlide>

          {/* <li><Image /></li>
                <li><Image /></li>
                <li><Image /></li>
                <li><Image /></li> */}
        </ul>
        {/* <SwiperSlide className="w-1/2 m-2 flex justify-center ">
               <Image src={raquette} alt="livre" width={300} height={250} quality={100} className=" rounded-3xl   object-cover " />
           </SwiperSlide>
           <SwiperSlide className="w-1/2 m-2 flex justify-center">
               <Image src={Nature} alt="livre" width={300} height={250}  quality={100} className=" rounded-3xl   object-cover " />
           </SwiperSlide>
           <SwiperSlide className="w-1/2 m-2 flex justify-center">
               <Image src={Dev} alt="livre" width={300} height={250}  quality={100} className=" rounded-3xl   object-cover " />
           </SwiperSlide>
           <SwiperSlide className="w-1/2 m-2 flex justify-center">
               <Image src={CV} alt="livre" width={300} height={250}  quality={100} className=" rounded-3xl   object-cover " />
           </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Competences;
