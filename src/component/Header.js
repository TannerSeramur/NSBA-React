import React from "react";
import "../styles/Header.css"
import nsbalogo from "../images/nsbalogotransp.png"

class Header extends React.Component{

render(){
  return (
    <header>

    <div className="header-search">
      <img src={nsbalogo} alt="logo"/>

      <div className="search-login-container">

        <div className="login">
          <button className='button blue' onClick="parent.location='./join.html'"> Join</button>
          <button className='button green' id="login-button" onClick="parent.location='./login.html'">Login</button>
        </div>

        <div className="searchbar">
          <input type="text" className="search" name="searchbar" placeholder="search here"/>
        </div>

      </div>


    </div>

    <nav>
      <ul>
        <li className="active"><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./membership.html">Membership</a></li>
        <li><a href="./service.html">Resources</a></li>
        <li><a href="./events.html">Events</a></li>
        <li><a href="./news.html">News</a></li>
        <li><a href="./faq.html">FAQs</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>


  </header>

  )
}





}
export default Header
