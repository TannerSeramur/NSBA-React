import React from 'react';

import '../styles/Carousel.css';

import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';

import {Carousel} from 'react-bootstrap';

class Carousels extends React.Component {


  render(){


    return (
      <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
    // return (
    //
    //   <div className="container">
    //     <div id="myCarousel" className="carousel slide" data-ride="carousel">
    //       <ol className="carousel-indicators">
    //         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    //         <li data-target="#myCarousel" data-slide-to="1"></li>
    //         <li data-target="#myCarousel" data-slide-to="2"></li>
    //       </ol>
    //
    //
    //       <div className="carousel-inner">
    //         <div className="item active">
    //           <img src={img1} alt="img1" style={{width:'100%'}}/>
    //           <div className="carousel-caption">
    //             <h1>We organize community resources to help small businesses thrive</h1>
    //           </div>
    //         </div>
    //       </div>
    //
    //       <div className="item">
    //         <img src={img2} alt="img2" style={{width:'100%'}}/>
    //         <div className="carousel-caption">
    //           <h1>About</h1>
    //           <h4>We organize community resources to help small businesses thrive</h4>
    //         </div>
    //       </div>
    //
    //       <div className="item">
    //         <img src={img1} alt="img3" style={{width:'100%'}}/>
    //       </div>
    //     </div>
    //
    //
    //     <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    //       <span className="glyphicon glyphicon-chevron-left"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="right carousel-control" href="#myCarousel" data-slide="next">
    //       <span className="glyphicon glyphicon-chevron-right"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //
    //     </div>
    //
    // )
  }
}

export default Carousels;
