import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Scroller from "./scroller"
import Footer from "./footer"
import Whatsapp from "./whatsapp";
import Navbar from "./navbar"
function Gallery() {
  const [currentind, setcurrentind] = useState(0)
  const [gallery, setgallery] = useState([])
  const [selectedimg, setselectedimg] = useState(null)
  const imgs = {
    wedding: ["/photos/indorewed4.jpg", "/photos/indorewed7.jpg", "/photos/indorewed8.jpg", "/photos/indorewed9.jpg", "/photos/indorewed1.jpg", "/photos/indorewed2.jpg", "/photos/indorewed3.jpg", "/photos/indorewed11.jpg", "/photos/indorewed12.jpg", "/photos/indorewed13.jpg", "/photos/indorewed14.jpg", "/photos/indorewed5.jpg"],
    prewedding: ["/prewedding7.jpg", "/prewedding15.jpg", "/prewedding9.jpg", "/prewedding2.jpg", "/prewedding3.jpeg", "/prewedding10.png", "/prewedding11.webp", "/prewedding12.webp", "/prewedding14.webp", "/prewedding13.webp", "/prewedding1.jpg", "/prewedding4.jpg"],
    birthday: ["/shaktibir7.jpg", "/shaktibir8.jpg", "/shaktibir3.jpg", "/shaktibir6.jpg", "/shaktibir5.jpg", "/shaktibir1.jpg", "/shaktibir9.jpg"],
    engagement: ["/eng1.avif", "/eng2.jpg", "/eng3.jpg", "/eng4.jpg", "/eng1.avif", "/eng2.jpg", "/eng3.jpg"],
    maternity: ["/maternity1.jpg", "/maternity2.jpg", "/maternity3.jpg", "/maternity4.jpg", "/maternity5.jpg", "/maternity1.jpg", "/maternity2.jpg"],
    haldi: ["/photos/indorehaldi9.jpg", "/photos/indorehaldi7.jpg", "/photos/indorehaldi4.jpg", "/photos/indorehaldi11.jpg", "/photos/indorehaldi6.jpg", "/photos/indorehaldi8.jpg", "/photos/indorehaldi2.jpg", "/photos/indorehaldi13.jpg", "/photos/indorehaldi1.jpg", "/photos/indorehaldi11.jpg", "/photos/indorehaldi12.jpg", "/photos/indorehaldi3.jpg" ]

  }
  const { category } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>


      <Navbar />

      <div className="galleryPage">
        <h1 className="galleryTitle">
          {category.charAt(0).toUpperCase() + category.slice(1)} Gallery
        </h1>

        <div className="galleryimgs">
          {imgs[category]?.map((img, ind) => (
            <div className="imgCard" key={ind}>
              <img src={img} alt="gallery" onClick={() => {
                setselectedimg(img)
                setcurrentind(ind)
                setgallery(imgs[category])
              }} />
            </div>
          ))}
        </div>
      </div>

      {selectedimg && (
        <>

          <img className="backicon" src="/back.png" onClick={() => {
            let newind = (currentind - 1 + gallery.length) % gallery.length
            setcurrentind(newind)
            setselectedimg(gallery[newind])
          }} alt="backicon" />

          <div className="lightbox">
            <span
              className="closeBtn"
              onClick={() => setselectedimg(null)}
            >
              ✕
            </span>


            <img src={selectedimg} alt="preview" key={selectedimg} className="previewimg" />

          </div>

          <img className="next" src="/next.png" onClick={() => {
            let newind = (currentind + 1) % gallery.length
            setcurrentind(newind)
            setselectedimg(gallery[newind])
          }} alt="backicon" />
        </>
      )}
      <Scroller />
      <Whatsapp />
      <Footer />

    </>
  )
}
export default Gallery