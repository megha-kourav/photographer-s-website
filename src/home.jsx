
import "./App.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Scroller from "./scroller"
import Footer from "./footer"
import { Link } from "react-router-dom"

function Home() {

const navigate = useNavigate()
const [selectedimg, setselectedimg] = useState(null)
// const [scrolly, setscrolly] = useState(0)
const [navbarpop, setnavbarpop] = useState(false)

// useEffect(()=>{

// function handle(){
// setscrolly(window.scrollY)
// }

// window.addEventListener("scroll", handle)

// return()=>{
// window.removeEventListener("scroll", handle)
// }

// },[])

return(
<>

<section className="hero">

  <div className="navbar">

<div className="logo">
<img src="photo.png" alt="logo"/>
</div>
<img className="menu" src= {!navbarpop ? "menu.png" : "cut.png"} alt="menu" onClick={()=> setnavbarpop(!navbarpop)}/>
<ul className="navLinks">
<li><Link to="/" >Home</Link></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><Link to="/about" >About</Link></li>
<li><Link to= "/contact"  >Contact</Link></li>
</ul>

</div>

<div className="heroContent">

<h1>Capturing Moments <br/> <span>That Last Forever</span></h1>
<p>Premium Wedding Photography in Gadarwara</p>

<button className="check" onClick={()=> navigate("/contact")}>Check Availability</button>

<a href="#portfolio">
<button className="viewbtn">View Portfolio</button>
</a>

</div>

</section>


<section className="stats">

<div className="captured">
<h2>200+</h2>
<p>Weddings Captured</p>
</div>

<div className="years">
<h2>5+</h2>
<p>Years Experience</p>
</div>

<div className="clients">
<h2>500+</h2>
<p>Happy Clients</p>
</div>

</section>



<section className="portfolio" id="portfolio">

<h2>Our Portfolio</h2>
<p>Beautiful Stories We've Captured</p>


<h1>Wedding</h1>

<div className="wedding">

<img src="wedding1.jpg" decoding="async" loading="lazy" alt="" onClick={()=>setselectedimg("wedding1.jpg")} />

<img src="wedding3.jpg" decoding="async" loading="lazy" alt="" onClick={()=>setselectedimg("wedding3.jpg")} />

<img src="wedding4.jpg" decoding="async" loading="lazy" alt="" onClick={()=>setselectedimg("wedding4.jpg")} />

<img src="wedding5.jpg" decoding="async" loading="lazy" alt="" onClick={()=>setselectedimg("wedding5.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/wedding")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Pre-Wedding</h1>

<div className="wedding">

<img src="prewedding1 - Copy.jpg"  loading="lazy" onClick={()=>setselectedimg("prewedding1.jpg")} />

<img src="prewedding2.jpg" loading="lazy" onClick={()=>setselectedimg("prewedding2.jpg")} />

<img src="prewedding3 - Copy.jpeg" loading="lazy" onClick={()=>setselectedimg("prewedding3.jpeg")} />

<img src="prewedding4 - Copy.jpg" loading="lazy" onClick={()=>setselectedimg("prewedding4.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/prewedding")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Birthday</h1>

<div className="wedding">

<img src="birthday1.jpg" loading="lazy" onClick={()=>setselectedimg("birthday1.jpg")} />

<img src="birthday2.jpg" loading="lazy" onClick={()=>setselectedimg("birthday2.jpg")} />

<img src="birthday3.jpg" loading="lazy" onClick={()=>setselectedimg("birthday3.jpg")} />

<img src="birthday6.jpg" loading="lazy" onClick={()=>setselectedimg("birthday6.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/birthday")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Engagement</h1>

<div className="wedding">

<img src="eng1.avif" loading="lazy" onClick={()=>setselectedimg("eng1.avif")} />

<img src="eng2.jpg" loading="lazy" onClick={()=>setselectedimg("eng2.jpg")} />

<img src="eng3.jpg" loading="lazy" onClick={()=>setselectedimg("eng3.jpg")} />

<img src="eng4.jpg" loading="lazy" onClick={()=>setselectedimg("eng4.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/engagement")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Maternity</h1>

<div className="wedding">

<img src="maternity1.jpg" loading="lazy" onClick={()=>setselectedimg("maternity1.jpg")} />

<img src="maternity2.jpg" loading="lazy" onClick={()=>setselectedimg("maternity2.jpg")} />

<img src="maternity4.jpg" loading="lazy" onClick={()=>setselectedimg("maternity4.jpg")} />

<img src="maternity5.jpg" loading="lazy" onClick={()=>setselectedimg("maternity5.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/maternity")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Haldi</h1>

<div className="wedding">

<img src="haldi1.webp" loading="lazy" onClick={()=>setselectedimg("haldi1.webp")} />

<img src="haldi3.jpg" loading="lazy" onClick={()=>setselectedimg("haldi3.jpg")} />

<img src="haldi4.jpg" loading="lazy" onClick={()=>setselectedimg("haldi4.jpg")} />

<img src="haldi6.jpg" loading="lazy" onClick={()=>setselectedimg("haldi6.jpg")} />

</div>


<div className="viewMoreCard" onClick={()=>navigate("/gallery/haldi")}>

<h3 className="morebtn">View More</h3>

</div>



<h1>Video shoots</h1>

<div className="wedding">

<div className="videoCard">

<iframe
src="https://www.youtube.com/embed/qHxxmWySb6c"

title="video1"
allowFullScreen
></iframe>

</div>


<div className="videoCard">

<iframe
src="https://www.youtube.com/embed/0V9X0WPM-5E"
loading="lazy"
title="video2"
allowFullScreen
></iframe>

</div>


<div className="videoCard">

<iframe
src="https://www.youtube.com/embed/egWNAVfQ0P0"
loading="lazy"
title="video3"
allowFullScreen
></iframe>

</div>


<div className="videoCard">

<iframe
src="https://www.youtube.com/embed/8W9o_5OfquQ"
loading="lazy"
title="video4"
allowFullScreen
></iframe>

</div>

</div>



<div
className="viewMoreCard"
onClick={()=>window.open("https://www.youtube.com/@KuruvanshiFacts","_blank")}
>

<h3 className="morebtn">View More</h3>

</div>


</section>





{selectedimg &&(

<div className="lightbox">

<span className="closeBtn" onClick={()=>setselectedimg(null)}>
✕
</span>

<img src={selectedimg} alt="" />

</div>

)}

{navbarpop && (
  <div className="mobileMenu">

    <Link to="/" onClick={()=> setnavbarpop(false)}>Home</Link>
    <a href="#portfolio" onClick={()=> setnavbarpop(false)}>Portfolio</a>
    <Link to="/about" onClick={()=> setnavbarpop(false)}>About</Link>
  
    <Link to="/contact" onClick={()=> {
      setnavbarpop(false)
      
    }}>Contact</Link>

  </div>
)}

<Scroller />

<Footer />

</>

)

}

export default Home