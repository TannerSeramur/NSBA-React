import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

import news1 from "../images/news-pic1.jpg"
import news2 from "../images/news-pic2.jpg"
import news3 from "../images/news-pic3.jpg"
import news4 from "../images/news-pic4.jpg"

import Carousel from './Carousel';


class Home extends React.Component{

render(){
  return(
<div>

<Carousel />

<Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
    <Col xsHidden md={4}>
      <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
    </Col>
  </Row>
</Grid>


  <div classNameName ="section1">
    <h1 classNameName="title">Need More From Your Business?</h1>
    <p>Founded in August of 2017, the North Shore Business Alliance is a nonprofit collaboration of
exceptional public and private service providers, business professionals, government
representatives, community leaders and generous individuals. Working together, they have
formed a social enterprise that organizes community resources to help small businesses thrive.</p>
<p>Already a Member?<a href="./login.html" classNameName="login-link">Login</a> </p>
<button classNameName ="sec1-button" onClick="parent.location='./membership.html'">Learn More</button>
  </div>



  <div classNameName ="section2">
    <h1 classNameName="title">Supporting Our Community</h1>
    <p>Our mission is to improve the quality of the small business communities on the North Shore of Lake Washington by
enabling individuals and businesses to do more and thrive. To achieve this mission we are helping entrepreneurs and
small businesses pursue a strategy that delivers sustainable performance through innovation and the expanding creation
and delivery of value.</p>

  </div>

  <div classNameName ="section3">
    <h1 classNameName="title">Trending News</h1>
    <div classNameName="image-container">
      <img src={news1} alt="news-pic1"/>
      <img src={news2} alt="news-pic2"/>
      <img src={news3} alt="news-pic3"/>
      <img src={news4} alt="news-pic4"/>
    </div>

</div>

</div>




  )

}
}

export default Home
