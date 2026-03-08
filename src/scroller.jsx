import { useState, useEffect } from "react"

function Scroller() {
    const [scrolly, setscrolly] = useState(0)
    useEffect(()=>{
    
    function handle(){
    setscrolly(window.scrollY)
    }
    
    window.addEventListener("scroll", handle)
    
    return()=>{
    window.removeEventListener("scroll", handle)
    }
    
    },[])

    return(
        <>
        {scrolly>140 &&(
<img
className="toparrow"
onClick={()=>   window.scrollBy({
      top: -1000,
      behavior: "smooth"
    })}
src="/arrow.png"
/>

)}
</>
    )
}
export default Scroller