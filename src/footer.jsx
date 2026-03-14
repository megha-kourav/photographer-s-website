import { Link } from "react-router-dom"

function Footer() {
    return(
<footer className="photo-footer">

  <div className="footer-container">

    {/* Services */}
    <div className="footer-col">
      <h3>Photography Services</h3>
      <ul className="footer-list">
        <li>Wedding Photography</li>
        <li>Pre Wedding Shoot</li>
        <li>Birthday Events</li>
        <li>Engagement Ceremony</li>
        <li>Haldi & Mehndi Shoot</li>
        <li>Tilak Samaroh</li>
        <li>Maternity Shoot</li>
        <li>Family Events & more</li>
      </ul>
    </div>

    {/* Quick Links */}
    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul className="footer-list">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li onClick={()=>{
  setTimeout(()=>{
    document.getElementById("portfolio")?.scrollIntoView({
      behavior:"smooth"
    })
  },100)
}}>
 <Link to= "/">Portfolio</Link> 
 </li>
        <li><Link to="/gallery/wedding">Gallery</Link></li>
     
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-col">
      <h3>Contact</h3>
      <ul className="footer-contact">
        <li onClick={()=> window.open("https://www.instagram.com/kourav_adi345", "_blank")}> <img src="/instagram.png" style={{width:"21px"}} alt="" /> Instagram</li>
        <li onClick={()=> window.open("https://www.facebook.com/viratkohli","_blank")}> <img src="/facebook.png" style={{width:"21px"}} alt="" /> Facebook</li>
        <li onClick={()=> window.open("https://www.youtube.com/@KuruvanshiFacts","_blank")}> <img src="/youtube.png" style={{width:"20px"}} alt="" /> YouTube</li>
        <li onClick={() => window.location.href = "tel:+919876543210"}> <img src="/phone.png" alt="" style={{width:"20px"}} /> +91 9876543210</li>
        <li onClick={() => window.open("mailto:photographer@gmail.com")}> <img src="/gmail.png" style={{width:"20px", filter:"invert(1)"}} alt="" /> example@gmail.com</li>
         <li ><a className="plocation"
href="https://www.google.com/maps/search/?api=1&query=Jhanda+Chowk+Gadarwara+Narsinghpur+Madhya+Pradesh"
target="_blank"
rel="noopener noreferrer"
>
📍Jhanda Chowk, Gadarwara,<br /> Narsinghpur (MP)
</a></li>
      </ul>
    </div>

    {/* Why Hire Us */}
    <div className="footer-col">
      <h3>Why Hire Us ?</h3>
      <ul className="footer-list">
        <li>Professional Editing</li>
        <li>High Quality Equipment</li>
        <li>Creative Photography</li>
        <li>Affordable Packages</li>
        <li>On Time Delivery</li>
        <li>Amazing Drone Shoots & more</li>
       
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Your Photography Brand | All Rights Reserved</p>
  </div>

</footer>
    )
}
export default Footer