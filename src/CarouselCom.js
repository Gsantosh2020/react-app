import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const img1= "https://image.shutterstock.com/z/stock-photo-colorful-flower-on-dark-tropical-foliage-nature-background-721703848.jpg"
const img2= "https://image.shutterstock.com/z/stock-photo-kuang-si-waterfall-the-beauty-of-nature-792172873.jpg"
const img3= "https://image.shutterstock.com/z/stock-photo-beautiful-autumn-scene-of-hintersee-lake-colorful-morning-view-of-bavarian-alps-on-the-austrian-747646759.jpg"
const img4= "https://image.shutterstock.com/z/stock-photo-abstract-background-of-route-and-journey-amidst-the-big-tree-and-beautiful-nature-389344402.jpg"



function CarouselCom(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
return ( <>
  
<Carousel responsive={responsive}>

  <div className="col-sm-12"><img src={img1} className="img-responsive" alt="abc"/></div>
  <div className="col-sm-12"><img src={img2} className="img-responsive" alt="abc"/></div>
  <div className="col-sm-12"><img src={img3} className="img-responsive" alt="abc"/></div>
  <div className="col-sm-12"><img src={img4} className="img-responsive" alt="abc"/></div>

  
</Carousel>

</>
)
}


export default CarouselCom