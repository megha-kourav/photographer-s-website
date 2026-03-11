import { useState } from "react"

import { Link } from "react-router-dom"

function Navbar() {
   
    const [navbarpop, setnavbarpop] = useState(false)
    return(
     <>

  <div className="navbar">

<div className="logo">
<img src="/chatgpt.png" style={{filter:"invert(0)"}} alt="logo"/>
</div>
<img className="menu" src= {!navbarpop ? "/menu.png" : "/cut.png"} alt="menu" onClick={()=> setnavbarpop(!navbarpop)}/>
<ul className="navLinks">
<li><Link to="/" >Home</Link></li>
<li onClick={()=>{
  setTimeout(()=>{
    document.getElementById("portfolio")?.scrollIntoView({
      behavior:"smooth"
    })
  },100)
}}>
 <Link to= "/">Portfolio</Link> 
</li>
<li><Link to="/about" >About</Link></li>
<li><Link to= "/contact">Contact</Link></li>
</ul>

</div>
     {navbarpop && (
  <div className="mobileMenu">

    <Link to="/" onClick={()=> setnavbarpop(false)}>Home</Link>
    <Link to="/" onClick={()=> {
        setnavbarpop(false) 
          setTimeout(()=>{
    document.getElementById("portfolio")?.scrollIntoView({
      behavior:"smooth"
    })
  },500)
    }}>Portfolio</Link>
    <Link to="/about" onClick={()=> setnavbarpop(false)}>About</Link>
    <Link to="/contact" onClick={()=> {
      setnavbarpop(false)
      
    }}>Contact</Link>
   

  </div>
)}
     </>
    )
}
export default Navbar