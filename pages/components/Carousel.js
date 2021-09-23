// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Virtual,
//   EffectCoverflow,
// } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// import Image from "next/image";
// import raquette from "../public/test-maquette.png";
// import Nature from "../public/nature.jpg";
// import Dev from "../public/dev.png";
// import CV from "../public/cvtech.png";
// import CV from "../../";
// // Import Swiper styles

// // import Swiper core and required modules
// SwiperCore.use([
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Virtual,
//   EffectCoverflow,
// ]);

// // install Swiper modules
// // effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
// //     "rotate": 50,
// //     "stretch": 0,
// //     "depth": 100,
// //     "modifier": 1,
// //     "slideShadows": true

// const Carousel = () => {
//   return (
//     <Swiper
//       slidesPerView={2.5}
//       pagination={{ clickable: true }}
//       effect={"coverflow"}
//       grabCursor={true}
//       centeredSlides={true}
//       coverflowEffect={{
//         rotate: 80,
//         stretch: 1,
//         depth: 100,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//       className="swiper-container flex justify-start overflow-hidden m-5 hover:scale-150 focus:scale-x-150"
//     >
//       <SwiperSlide className="w-1/2 m-2 flex justify-center ">
//         <Image
//           src={raquette}
//           alt="livre"
//           width={300}
//           height={250}
//           quality={100}
//           className=" rounded-3xl   object-cover "
//         />
//       </SwiperSlide>
//       <SwiperSlide className="w-1/2 m-2 flex justify-center">
//         <Image
//           src={Nature}
//           alt="livre"
//           width={300}
//           height={250}
//           quality={100}
//           className=" rounded-3xl   object-cover "
//         />
//       </SwiperSlide>
//       <SwiperSlide className="w-1/2 m-2 flex justify-center">
//         <Image
//           src={Dev}
//           alt="livre"
//           width={300}
//           height={250}
//           quality={100}
//           className=" rounded-3xl   object-cover "
//         />
//       </SwiperSlide>
//       <SwiperSlide className="w-1/2 m-2 flex justify-center">
//         <Image
//           src={CV}
//           alt="livre"
//           width={300}
//           height={250}
//           quality={100}
//           className=" rounded-3xl   object-cover "
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default Carousel;
