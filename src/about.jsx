import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Scroller from "./scroller";
import Whatsapp from "./whatsapp";

import Navbar from "./navbar";
import Footer from "./footer";
const About = () => {
const navigate = useNavigate()
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

            <>


<Navbar />

 <div className="aboutPage">

{/* HERO */}
<section className="aboutHero">
    <h1>Frame your emotions, into Images</h1>
    <p>
        Every photograph tells a story. I capture real emotions,
        real moments and turn them into timeless memories.
    </p>
</section>


{/* PHOTOGRAPHER INTRO */}
<section className="aboutIntro">

<div className="aboutImg">
<img src="photographer.png" alt="photographer"/>
</div>

<div className="aboutText">
<h2>Hi, I'm (photographer's name)</h2>
<p>
I'm a passionate photographer who believes every moment deserves
to be remembered beautifully. From weddings to personal shoots,
my goal is to capture emotions that words cannot express.
</p>

<p>
With years of experience and a deep love for storytelling,
I focus on creating natural, cinematic and timeless images.
</p>

</div>

</section>


{/* STATS */}
<section className="aboutStats">

<div className="statCard">
<h3>200+</h3>
<p>Happy Clients</p>
</div>

<div className="statCard">
<h3>5+ Years</h3>
<p>Experience</p>
</div>

<div className="statCard">
<h3>500+</h3>
<p>Events Covered</p>
</div>

<div className="statCard">
<h3>100%</h3>
<p>Client Satisfaction</p>
</div>

</section>


{/* SERVICES */}
<section className="aboutServices">

<h2>What I Specialize In</h2>

<div className="serviceGrid">

<div className="serviceCard">
<img src="weddingicon.png"/>
<h3>Wedding Photography</h3>
<p>Capturing every emotion and moment of your special day.</p>
</div>

<div className="serviceCard">
<img src="preweddingicon.png"/>
<h3>Pre Wedding</h3>
<p>Romantic cinematic moments before the big day.</p>
</div>

<div className="serviceCard">
<img src="cele.png"/>
<h3>Events</h3>
<p>Professional coverage for all kinds of celebrations.</p>
</div>

<div className="serviceCard">
<img style={{filter:"invert(1)"}} src="portrait.png"/>
<h3>Portraits</h3>
<p>Natural and creative portraits that show personality.</p>
</div>

</div>

</section>


{/* PHILOSOPHY */}
<section className="aboutPhilosophy">

<h2>My Photography Philosophy</h2>

<p>
Photography is more than just taking pictures. It's about
capturing emotions, stories and memories that will be cherished
for generations.
</p>

<p>
My approach is simple — stay natural, focus on real moments,
and let the emotions tell the story.
</p>

</section>


{/* CTA */}
<section className="aboutCTA">

<h2>Let's Capture Your Story</h2>

<p>Book your photography session today.</p>

<button onClick={()=> navigate("/contact")}>Contact Now</button>

</section>

</div>
<Scroller />
<Whatsapp />
<Footer />
</>
  )
}

export default About



