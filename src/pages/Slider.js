// import React, { Component } from "react";
// import "./Slider.css";

// export default class Slider extends Component {
//   Slider = () => {
//     const repeat = false;
//     const noArrows = false;
//     const noBullets = false;

//     const container = document.querySelector(".slider-container");
//     var slide = document.querySelectorAll(".slider-single");
//     var slideTotal = slide.length - 1;
//     var slideCurrent = -1;

//     function initBullets() {
//       if (noBullets) {
//         return;
//       }
//       const bulletContainer = document.createElement("div");
//       bulletContainer.classList.add("bullet-container");
//       slide.forEach((elem, i) => {
//         const bullet = document.createElement("div");
//         bullet.classList.add("bullet");
//         bullet.id = `bullet-index-${i}`;
//         bullet.addEventListener("click", () => {
//           goToIndexSlide(i);
//         });
//         bulletContainer.appendChild(bullet);
//         elem.classList.add("proactivede");
//       });
//       container.appendChild(bulletContainer);
//     }

//     function initArrows() {
//       if (noArrows) {
//         return;
//       }
//       const leftArrow = document.createElement("a");
//       const iLeft = document.createElement("i");
//       iLeft.classList.add("fa");
//       iLeft.classList.add("fa-arrow-left");
//       leftArrow.classList.add("slider-left");
//       leftArrow.appendChild(iLeft);
//       leftArrow.addEventListener("click", () => {
//         slideLeft();
//       });
//       const rightArrow = document.createElement("a");
//       const iRight = document.createElement("i");
//       iRight.classList.add("fa");
//       iRight.classList.add("fa-arrow-right");
//       rightArrow.classList.add("slider-right");
//       rightArrow.appendChild(iRight);
//       rightArrow.addEventListener("click", () => {
//         slideRight();
//       });
//       container.appendChild(leftArrow);
//       container.appendChild(rightArrow);
//     }

//     function slideInitial() {
//       initBullets();
//       initArrows();
//       setTimeout(function () {
//         slideRight();
//       }, 500);
//     }

//     function updateBullet() {
//       if (!noBullets) {
//         document
//           .querySelector(".bullet-container")
//           .querySelectorAll(".bullet")
//           .forEach((elem, i) => {
//             elem.classList.remove("active");
//             if (i === slideCurrent) {
//               elem.classList.add("active");
//             }
//           });
//       }
//       checkRepeat();
//     }

//     function checkRepeat() {
//       if (!repeat) {
//         if (slideCurrent === slide.length - 1) {
//           slide[0].classList.add("not-visible");
//           slide[slide.length - 1].classList.remove("not-visible");
//           if (!noArrows) {
//             document
//               .querySelector(".slider-right")
//               .classList.add("not-visible");
//             document
//               .querySelector(".slider-left")
//               .classList.remove("not-visible");
//           }
//         } else if (slideCurrent === 0) {
//           slide[slide.length - 1].classList.add("not-visible");
//           slide[0].classList.remove("not-visible");
//           if (!noArrows) {
//             document.querySelector(".slider-left").classList.add("not-visible");
//             document
//               .querySelector(".slider-right")
//               .classList.remove("not-visible");
//           }
//         } else {
//           slide[slide.length - 1].classList.remove("not-visible");
//           slide[0].classList.remove("not-visible");
//           if (!noArrows) {
//             document
//               .querySelector(".slider-left")
//               .classList.remove("not-visible");
//             document
//               .querySelector(".slider-right")
//               .classList.remove("not-visible");
//           }
//         }
//       }
//     }

//     function slideRight() {
//       if (slideCurrent < slideTotal) {
//         slideCurrent++;
//       } else {
//         slideCurrent = 0;
//       }

//       if (slideCurrent > 0) {
//         var preactiveSlide = slide[slideCurrent - 1];
//       } else {
//         var preactiveSlide = slide[slideTotal];
//       }
//       var activeSlide = slide[slideCurrent];
//       if (slideCurrent < slideTotal) {
//         var proactiveSlide = slide[slideCurrent + 1];
//       } else {
//         var proactiveSlide = slide[0];
//       }

//       slide.forEach((elem) => {
//         var thisSlide = elem;
//         if (thisSlide.classList.contains("preactivede")) {
//           thisSlide.classList.remove("preactivede");
//           thisSlide.classList.remove("preactive");
//           thisSlide.classList.remove("active");
//           thisSlide.classList.remove("proactive");
//           thisSlide.classList.add("proactivede");
//         }
//         if (thisSlide.classList.contains("preactive")) {
//           thisSlide.classList.remove("preactive");
//           thisSlide.classList.remove("active");
//           thisSlide.classList.remove("proactive");
//           thisSlide.classList.remove("proactivede");
//           thisSlide.classList.add("preactivede");
//         }
//       });
//       preactiveSlide.classList.remove("preactivede");
//       preactiveSlide.classList.remove("active");
//       preactiveSlide.classList.remove("proactive");
//       preactiveSlide.classList.remove("proactivede");
//       preactiveSlide.classList.add("preactive");

//       activeSlide.classList.remove("preactivede");
//       activeSlide.classList.remove("preactive");
//       activeSlide.classList.remove("proactive");
//       activeSlide.classList.remove("proactivede");
//       activeSlide.classList.add("active");

//       proactiveSlide.classList.remove("preactivede");
//       proactiveSlide.classList.remove("preactive");
//       proactiveSlide.classList.remove("active");
//       proactiveSlide.classList.remove("proactivede");
//       proactiveSlide.classList.add("proactive");

//       updateBullet();
//     }

//     function slideLeft() {
//       if (slideCurrent > 0) {
//         slideCurrent--;
//       } else {
//         slideCurrent = slideTotal;
//       }

//       if (slideCurrent < slideTotal) {
//         var proactiveSlide = slide[slideCurrent + 1];
//       } else {
//         var proactiveSlide = slide[0];
//       }
//       var activeSlide = slide[slideCurrent];
//       if (slideCurrent > 0) {
//         var preactiveSlide = slide[slideCurrent - 1];
//       } else {
//         var preactiveSlide = slide[slideTotal];
//       }
//       slide.forEach((elem) => {
//         var thisSlide = elem;
//         if (thisSlide.classList.contains("proactive")) {
//           thisSlide.classList.remove("preactivede");
//           thisSlide.classList.remove("preactive");
//           thisSlide.classList.remove("active");
//           thisSlide.classList.remove("proactive");
//           thisSlide.classList.add("proactivede");
//         }
//         if (thisSlide.classList.contains("proactivede")) {
//           thisSlide.classList.remove("preactive");
//           thisSlide.classList.remove("active");
//           thisSlide.classList.remove("proactive");
//           thisSlide.classList.remove("proactivede");
//           thisSlide.classList.add("preactivede");
//         }
//       });

//       preactiveSlide.classList.remove("preactivede");
//       preactiveSlide.classList.remove("active");
//       preactiveSlide.classList.remove("proactive");
//       preactiveSlide.classList.remove("proactivede");
//       preactiveSlide.classList.add("preactive");

//       activeSlide.classList.remove("preactivede");
//       activeSlide.classList.remove("preactive");
//       activeSlide.classList.remove("proactive");
//       activeSlide.classList.remove("proactivede");
//       activeSlide.classList.add("active");

//       proactiveSlide.classList.remove("preactivede");
//       proactiveSlide.classList.remove("preactive");
//       proactiveSlide.classList.remove("active");
//       proactiveSlide.classList.remove("proactivede");
//       proactiveSlide.classList.add("proactive");

//       updateBullet();
//     }

//     function goToIndexSlide(index) {
//       const sliding =
//         slideCurrent > index ? () => slideRight() : () => slideLeft();
//       while (slideCurrent !== index) {
//         sliding();
//       }
//     }

//     slideInitial();
//   };
//   componentDidMount() {
//     this.Slider();
//   }
//   render() {
//     return (
//       <div className="sliderbody">
//         <div class="slider-container">
//           <div class="slider-content">
//             <div class="slider-single">
//               <img class="slider-single-image" src={slider1} alt="1" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>

//             <div class="slider-single">
//               <img class="slider-single-image" src={slider2} alt="2" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>

//             <div class="slider-single">
//               <img class="slider-single-image" src={slider3} alt="3" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>

//             <div class="slider-single">
//               <img class="slider-single-image" src={slider4} alt="4" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>

//             <div class="slider-single">
//               <img class="slider-single-image" src={slider5} alt="5" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>

//             <div class="slider-single">
//               <img class="slider-single-image" src={slider1} alt="6" />
//               {/* <h1 class="slider-single-title">Through the Mountains</h1> */}
//               <a class="slider-single-likes" href="javascript:void(0);">
//                 {/* <i class="fa fa-heart"></i> */}
//                 {/* <p>1,247</p> */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// #########################################################################################################


// import React, { Component } from "react";
// import { Carousel } from "antd";
// import slider1 from "../img/slide-1.jpg";
// import slider2 from "../img/slide-2.jpg";
// import slider3 from "../img/slide-3.jpg";
// import slider4 from "../img/slide-4.jpg";
// import slider5 from "../img/slide-5.jpg";
// import "antd/dist/antd.css";

// export default class Slider extends Component {
//   render() {
//     return (
//       <div>
//         <Carousel
//           autoplay
//           effect="fade"
//           style={{ height: "100vh", margin: " 0 auto", width: "100%" }}
//         >
//           <div>
//             {/* <h3 >1</h3> */}
//             <img
//               src={slider1}
//               alt=""
//               style={{ height: "100vh", width: "100%" }}
//             />
//           </div>
//           <div>
//             {/* <h3 >2</h3> */}
//             <img
//               src={slider2}
//               alt=""
//               style={{ height: "100vh", width: "100%" }}
//             />
//           </div>
//           <div>
//             {/* <h3 >3</h3> */}
//             <img
//               src={slider3}
//               alt=""
//               style={{ height: "100vh", width: "100%" }}
//             />
//           </div>
//           <div>
//             {/* <h3 >4</h3> */}
//             <img
//               src={slider4}
//               alt=""
//               style={{ height: "100vh", width: "100%" }}
//             />
//           </div>
//           <div>
//             {/* <h3 >4</h3> */}
//             <img src={slider5} alt="" style={{ height: "100vh" }} />
//           </div>
//         </Carousel>
//       </div>
//     );
//   }
// }

// #########################################################################################################



import React, { useRef } from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import styles from './styles.module.css'


const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

export default function Slider() {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={5} horizontal>
        <Page offset={4} gradient="tomato" onClick={() => scroll(0)} />
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="teal" onClick={() => scroll(3)} />
        <Page offset={3} gradient="teal" onClick={() => scroll(4)} />
      </Parallax>
    </div>
  )
}
