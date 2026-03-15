
import "./App.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Scroller from "./scroller"
import Footer from "./footer"
import { Link } from "react-router-dom"
import Whatsapp from "./whatsapp"

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
  const images = [
"/photographerspic.jpg",
"/indorehaldi6.jpg",
"/indorewed14.jpg"
];

const [index,setIndex] = useState(0);

useEffect(()=>{

const interval = setInterval(()=>{

setIndex((prev)=> (prev + 1) % images.length);

},4000);

return ()=> clearInterval(interval);

},[]);

  return (
    <>

      <section className="hero" style={{backgroundImage:`url(${images[index]})`}}>

        <div className="navbar">

          <div className="logo">
            <img src="/pristine.png" style={{ filter: "invert(1)" }} alt="logo" />
          </div>
          <img className="menu" src={!navbarpop ? "menu.png" : "cut.png"} alt="menu" onClick={() => setnavbarpop(!navbarpop)} />
          <ul className="navLinks">
            <li><Link to="/" >Home</Link></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact"  >Contact</Link></li>
          </ul>

        </div>

        <div className="heroContent">

          <h1>Capturing Moments <br /> <span>That Last Forever</span></h1>
          <p>Premium Wedding Photography in Indore</p>

          <button className="check" onClick={() => navigate("/contact")}>Check Availability</button>

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

          <img src="/indorewed13.jpg" decoding="async" loading="lazy" alt="" onClick={() => setselectedimg("/photos/indorewed13.jpg")} />

          <img src="/indorewed14.jpg" decoding="async" loading="lazy" alt="" onClick={() => setselectedimg("/photos/indorewed14.jpg")} />

          <img src="/indorewed12.jpg" decoding="async" loading="lazy" alt="" onClick={() => setselectedimg("/photos/indorewed12.jpg")} />

          <img src="/indorewed5.jpg" decoding="async" loading="lazy" alt="" onClick={() => setselectedimg("/photos/indorewed5.jpg")} />

        </div>


        <div className="viewMoreCard" onClick={() => navigate("/gallery/wedding")}>

          <h3 className="morebtn">View More</h3>

        </div>

        <h1>Haldi</h1>

        <div className="wedding">

          <img src="/indorehaldi2.jpg" loading="lazy" onClick={() => setselectedimg("/photos/indorehaldi2.jpg")} />

          <img src="/indorehaldi6.jpg" loading="lazy" onClick={() => setselectedimg("/photos/indorehaldi6.jpg")} />

          <img src="/indorehaldi8.jpg" loading="lazy" onClick={() => setselectedimg("/photos/indorehaldi8.jpg")} />

          <img src="/indorehaldi10.jpg" loading="lazy" onClick={() => setselectedimg("/photos/indorehaldi10.jpg")} />

        </div>


        <div className="viewMoreCard" onClick={() => navigate("/gallery/haldi")}>

          <h3 className="morebtn">View More</h3>

        </div>

        <h1>Birthday</h1>

        <div className="wedding">

          <img src="shaktibir6.jpg" loading="lazy" onClick={() => setselectedimg("shaktibir6.jpg")} />

          <img src="shaktibir2.jpg" loading="lazy" onClick={() => setselectedimg("shaktibir2.jpg")} />

          <img src="shaktibir3.jpg" loading="lazy" onClick={() => setselectedimg("shaktibir3.jpg")} />

          <img src="shaktibir8.jpg" loading="lazy" onClick={() => setselectedimg("shaktibir8.jpg")} />

        </div>


        <div className="viewMoreCard" onClick={() => navigate("/gallery/birthday")}>

          <h3 className="morebtn">View More</h3>

        </div>



        <h1>Engagement</h1>

        <div className="wedding">

          <img src="eng1.avif" loading="lazy" onClick={() => setselectedimg("eng1.avif")} />

          <img src="eng2.jpg" loading="lazy" onClick={() => setselectedimg("eng2.jpg")} />

          <img src="eng3.jpg" loading="lazy" onClick={() => setselectedimg("eng3.jpg")} />

          <img src="eng4.jpg" loading="lazy" onClick={() => setselectedimg("eng4.jpg")} />

        </div>


        <div className="viewMoreCard" onClick={() => navigate("/gallery/engagement")}>

          <h3 className="morebtn">View More</h3>

        </div>



        <h1>Maternity</h1>

        <div className="wedding">

          <img src="maternity1.jpg" loading="lazy" onClick={() => setselectedimg("maternity1.jpg")} />

          <img src="maternity2.jpg" loading="lazy" onClick={() => setselectedimg("maternity2.jpg")} />

          <img src="maternity4.jpg" loading="lazy" onClick={() => setselectedimg("maternity4.jpg")} />

          <img src="maternity5.jpg" loading="lazy" onClick={() => setselectedimg("maternity5.jpg")} />

        </div>


        <div className="viewMoreCard" onClick={() => navigate("/gallery/maternity")}>

          <h3 className="morebtn">View More</h3>

        </div>







        <h1>Video shoots</h1>

        <div className="wedding-video">



          <div className="videoCard">

  <iframe width="560" loading="lazy" height="315" src="https://www.youtube.com/embed/KMdj42tW07s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-; fullscreen" allowfullscreen></iframe>

          </div>

          <div className="videoCard">

      <iframe width="560" loading="lazy" height="315" src="https://www.youtube.com/embed/dKQSiWnumr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-; fullscreen" allowfullscreen></iframe>

          </div>

          <div className="videoCard">

            <iframe
              src="https://drive.google.com/file/d/1z0KaMLoHfgLHY_9dL16XVjiglpmXMspf/preview"
              loading="lazy"
              title="video2"
              allowFullScreen
            ></iframe>

          </div>

          <div className="videoCard">

            <iframe
              src="https://drive.google.com/file/d/1KYWclvVSK5VQExADGpcO8fSxbbvYxmSP/preview"
              allow="autoplay"
              title="video1"
              allowFullScreen
            ></iframe>

          </div>



          <div className="videoCard">

            <iframe
              src="https://drive.google.com/file/d/16PIfmBshw740IrBJmFtV_PRPMHw9NrZN/preview"
              allow="autoplay"
              title="video1"
              allowFullScreen
            ></iframe>

          </div>

        </div>



        <div
          className="viewMoreCard"
          onClick={() => window.open("https://www.instagram.com/kapil_studio_gadarwara/reel/DJ7oqydz5_S/", "_blank")}
        >

          <h3 className="morebtn">View More</h3>

        </div>


      </section>





      {selectedimg && (

        <div className="lightbox">

          <span className="closeBtn" onClick={() => setselectedimg(null)}>
            ✕
          </span>

          <img src={selectedimg} alt="" />

        </div>

      )}

      {navbarpop && (
        <div className="mobileMenu">

          <Link to="/" onClick={() => setnavbarpop(false)}>Home</Link>
          <a href="#portfolio" onClick={() => setnavbarpop(false)}>Portfolio</a>
          <Link to="/about" onClick={() => setnavbarpop(false)}>About</Link>

          <Link to="/contact" onClick={() => {
            setnavbarpop(false)

          }}>Contact</Link>

        </div>
      )}

      <Scroller />
      <Whatsapp />

      <Footer />

    </>

  )

}

export default Home