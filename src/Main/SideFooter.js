import React from 'react'
import {Link} from 'react-router-dom'
import pic from "../img/insta.png"
import pic1 from "../img/linkedin.png"
import pic2 from "../img/twitter.png"
import pic3 from "../img/git.png"
import pic4 from "../img/steam.png"
import pic5 from "../img/question.png"
import pic6 from "../img/info.png"
import pic7 from "../img/profile.png"
import pic8 from "../img/home.png"

const SideFooter = () => {


  const myFunction = () => {
    const element = document.getElementById("bar");
    element.classList.contains("menu") ?
      element.classList.remove("menu") :
      element.classList.add("menu");
  }

  return (
    <div className='sideFooter' id="bar">
      <div className='bar' onClick={myFunction}></div>
      <div className='hidden-bar'>
        <Link to="/oceansite"><p><img src={pic8} alt='' /> Home</p></Link>
        <Link to="/signUp"><p><img src={pic7} alt='' /> Profile</p></Link>
        <Link to="/oceansite"><p><img src={pic6} alt='' /> About</p></Link>
      </div>
      <div className="links">
        <a href='https://www.instagram.com/myusufguler/'><img src={pic} alt='' /></a>
        <a href='https://www.linkedin.com/in/yusuf-g%C3%BCler-a09ba0223/'><img src={pic1} alt='' /></a>
        <a href='https://twitter.com/myusufguler'><img src={pic2} alt='' /></a>
        <a href='https://github.com/yusufgulermi'><img src={pic3} alt='' /></a>
      </div>
      <div className='terms'>
        <a href='https://steamcommunity.com/id/wacuwucu/'><img src={pic4} alt='' /></a>
        <div><img src={pic5} alt='' /></div>
      </div>
    </div>
  )
}

export default SideFooter