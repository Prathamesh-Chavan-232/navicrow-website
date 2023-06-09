import arrowLeft from "../assets/arrowl.png"
import arrowRight from "../assets/arrowr.png"
import carousel1 from "../assets/landscapes/carousel-1.jpeg"
import carousel2 from "../assets/landscapes/carousel-2.jpeg"
import carousel3 from "../assets/landscapes/carousel-3.jpeg"
import dest1 from "../assets/landscapes/destinations-1.jpg"
import dest2 from "../assets/landscapes/mountains-7.jpg"
import dest3 from "../assets/landscapes/mountains-5.jpg"

const destinationsSlider = [
  {
    title: "Char Dham",
    img: carousel1
  },
  {
    title: "Do Dham",
    img: carousel2
  },
  {
    title: "Kedarnath",
    img: carousel3
  }
    
]


const carousel = [
  {
    title: "Char Dham",
    img:dest1,
  },
  {
    title: "Do Dham",
    img: dest2
  },
  {
    title: "Kedarnath",
    img: dest3
  }
]

const Img = ({img, className}) => {
  return <img src={img} alt="arrow" className={"absolute top-0 bottom-0 m-auto w-[10%] h-[20%] " + (className || "")} />
  
}

export const Carousel = () => {

  return (
    <div className="relative flex bg-black h-screen">
      <Img img={arrowLeft}  className="left-0"/>
      {carousel.map((item,i)=> {
        return <img src={item.img} key={i} alt="carousel image"  />
      })}
      <Img img={arrowRight} className="right-0"/>
    </div>
    );
};
