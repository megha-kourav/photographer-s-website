import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Scroller from "./scroller"
import Navbar from "./navbar"
import Footer from "./footer"
import Whatsapp from "./whatsapp";

function Contact() {
    const [name, setname] = useState("")
    const [number,setnumber] = useState("")
    const [date, setdate] = useState(new Date().toISOString().split("T")[0])
    const [event, setevent] = useState("")
    const [msg, setmsg] = useState("")
    const [location, setlocation] = useState("")

    let navigate = useNavigate()

          useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    function sendtophotographer() {
  if(name === ""){
document.getElementById("name").style.outline = "2px solid red"
setTimeout(() => {
   document.getElementById("name").style.outline = "" 
}, 2000);
return;
}

if(number.length != 10){
document.getElementById("number").style.outline = "2px solid red"
setTimeout(() => {
   document.getElementById("number").style.outline = "" 
}, 2000);
return;
}

if(event === ""){
document.getElementById("event").style.outline = "2px solid red"
setTimeout(() => {
   document.getElementById("event").style.outline = "" 
}, 2000);
return;
}

let today = new Date()
today.setHours(0,0,0,0)
let seldate = new Date(date)
seldate.setHours(0,0,0,0)

if(date === "" || today > seldate ){
document.getElementById("date").style.outline = "2px solid red"
setTimeout(() => {
   document.getElementById("date").style.outline = "" 
}, 2000);
return;
}


if(location === ""){
document.getElementById("location").style.outline = "2px solid red"
setTimeout(() => {
   document.getElementById("location").style.outline = "" 
}, 2000);
return;
}

        const text = `New Photography Inquiry

Name: ${name}
Phone: ${number}
Event Type: ${event}
Event Date: ${date}
Event Location: ${location}

Message:
${msg}
`

const url = `https://wa.me/917828053425?text=${encodeURIComponent(text)}`

window.open(url,"_blank")

setname("")
setnumber("")
setdate(new Date().toISOString().split("T")[0])
setlocation("")
setmsg("")
setevent("")

    }
    return(
        <>
<Navbar />
        
<div className="contactPage">

<h1 className="contactTitle">Let's Capture Your Special Moments</h1>
<p className="contactSub">
Tell us about your event and we'll get back to you soon.
</p>

<div className="contactContainer">

<div className="contactFormBox">

<form className="contactForm" onSubmit={(e)=>e.preventDefault()}>

<input spellCheck= "false" id="name" type="text" placeholder="Your Name" value={name} required  onChange={(e)=> setname(e.target.value)}/>

<input spellCheck= "false" type="tel"  id="number" placeholder="Phone Number" value={number} required  onChange={(e)=> {
  const value = e.target.value.replace(/\D/g,'')
  setnumber(value)
} }/>

<select id="event"  value={event} onChange={(e)=> setevent(e.target.value)}>
<option value= "">Select Event Type</option>
<option value= "Wedding">Wedding</option>
<option value= "Pre-wedding">Pre-Wedding</option>
<option value= "Birthday">Birthday</option>
<option value= "Engagement">Engagement</option>
<option value= "Maternity">Maternity</option>
<option value= "Haldi">Haldi</option>
<option value= "Mehndi">Mehndi</option>
<option value= "Other">Other</option>
</select>

<input id="date" type="date" value={date} onChange={(e)=> setdate(e.target.value)}/>

<input spellCheck= "false" id="location" value={location} type="text" placeholder="Event Location" onChange={(e)=> setlocation(e.target.value)}/>



<textarea spellCheck= "false" value={msg} onChange={(e)=> setmsg(e.target.value)} placeholder="Tell us about your event"></textarea>

<button type="submit" onClick={()=> sendtophotographer()}>Send Inquiry</button>

</form>

</div>


<div className="contactInfo">

<h2>Direct Contact</h2>

<div className="contactItem" onClick={() => window.location.href = "tel:9644371311"}>
<img src="phone.png" alt="" />
<p>+91 9644371311</p>
</div>

<div onClick={()=> window.open("https://www.instagram.com/kourav_adi345","_blank")} className="contactItem">
<img src="instagram.png" alt="" />
<p>Instagram Profile</p>
</div>

<div className="contactItem" onClick={()=> window.open("https://www.facebook.com/viratkohli","_blank")}>
<img src="facebook.png" alt="" />
<p>Facebook Profile</p>
</div>

<div className="contactItem" onClick={()=> window.open("https://www.youtube.com/@KuruvanshiFacts","_blank")}>
<img src="youtube.png" alt="" />
<p>Youtube Channel</p>
</div>

</div>

</div>

</div>
<Scroller />
<Whatsapp />
<Footer />
</>
    )
}
export default Contact