import React from 'react'
import { Link } from 'react-router-dom'
import "./Discover.css"

const array = ["https://www.google.com/maps/@32.2353058,-64.8483061,3a,75y,193.76h,81.66t/data=!3m8!1e1!3m6!1sAF1QipMokcG3YSy7UsSPdm8scGbLbE2OJTJusKInEaJh!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMokcG3YSy7UsSPdm8scGbLbE2OJTJusKInEaJh%3Dw203-h100-k-no-pi-0-ya99.03299-ro-0-fo100!7i9500!8i4750?hl=tr",
"https://www.google.com/maps/@-28.6119796,153.628985,3a,75y,268.69h,122.55t/data=!3m6!1e1!3m4!1sAF1QipOfXe0nabplqQlcJJJmTmMijsXut-5z_TtQLiI2!2e10!7i9500!8i4750",
"https://www.google.com/maps/@26.4881735,-78.6571344,3a,75y,91.84h,67.5t/data=!3m8!1e1!3m6!1sAF1QipPfuN20EDUlUggoCs4-VDDZBJ_XAU_o93KNf0kh!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPfuN20EDUlUggoCs4-VDDZBJ_XAU_o93KNf0kh%3Dw203-h100-k-no-pi-0-ya224.8763-ro0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@16.1665702,-61.7881345,3a,75y,336.16h,76.16t/data=!3m8!1e1!3m6!1sAF1QipNGlhVPhdjB84f8wp7tqdzVQ6YfQ7gfDR-sokiX!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNGlhVPhdjB84f8wp7tqdzVQ6YfQ7gfDR-sokiX%3Dw203-h100-k-no-pi-0-ya44.94938-ro-0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@-33.9562596,151.2651763,3a,75y,294.63h,96.55t/data=!3m8!1e1!3m6!1sAF1QipMLQFKmkvROTrouc8g6Yxr8Svqpwq5XjXzsOLEe!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMLQFKmkvROTrouc8g6Yxr8Svqpwq5XjXzsOLEe%3Dw203-h100-k-no-pi-0-ya183.01839-ro0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@-14.6667695,145.6601705,3a,75y,63.37h,110.69t/data=!3m8!1e1!3m6!1sAF1QipNlpg-vRslonBiz93dhUJ024C5PtgiQhgBHXNsD!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNlpg-vRslonBiz93dhUJ024C5PtgiQhgBHXNsD%3Dw203-h100-k-no-pi-0-ya179.96288-ro-0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@-16.4279666,145.9899651,3a,75y,94.98h,70.62t/data=!3m8!1e1!3m6!1sAF1QipOXnbhR_soIpn6hkr7ksf2jPw0XaPZ36OqgoMS8!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOXnbhR_soIpn6hkr7ksf2jPw0XaPZ36OqgoMS8%3Dw203-h100-k-no-pi-0-ya222.2811-ro0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@24.3995552,124.117691,3a,90y,15.71h,99.76t/data=!3m8!1e1!3m6!1sAF1QipNEkR6_XynDMU0yq-5gKGwaWlsKZZ_jVHIyiS8w!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEkR6_XynDMU0yq-5gKGwaWlsKZZ_jVHIyiS8w%3Dw203-h100-k-no-pi-0-ya180.01093-ro0-fo100!7i11700!8i5850",
"https://www.google.com/maps/@-15.5256844,167.2456838,3a,90y,254.27h,107.95t/data=!3m8!1e1!3m6!1sAF1QipMhPVDGQNfEdXIXZAFNNAy3bcBWS2E4sLP_RD2q!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMhPVDGQNfEdXIXZAFNNAy3bcBWS2E4sLP_RD2q%3Dw203-h100-k-no-pi0-ya44.38646-ro-0-fo100!7i9500!8i4750",
"https://www.google.com/maps/@24.9823014,-80.436228,3a,90y,216.32h,92.43t/data=!3m8!1e1!3m6!1sAF1QipMtmxyKqXPn6yKziMTaOR4uMhWZgOuCjtNvA8vs!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMtmxyKqXPn6yKziMTaOR4uMhWZgOuCjtNvA8vs%3Dw203-h100-k-no-pi-0-ya161.66284-ro-0-fo100!7i9500!8i4750"
]
const Discover = () => {
  

  const myFunction =()=>{
    const element = Math.floor(Math.random() * 10);

    window.location.href=array[element]
  }
  return (
    <div className='discoverBody'>
      <div className='discoverBubble' onClick={myFunction}></div>
      <Link to="/oceansite"></Link>
    </div>

  )
}

export default Discover