import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Scroller from "./scroller"
import Footer from "./footer"
import Navbar from "./navbar"
function Gallery() {
  const [currentind, setcurrentind] = useState(0)
  const [gallery, setgallery] = useState([])
  const [selectedimg, setselectedimg] = useState(null)
  const imgs = {
    wedding: ["/wedding7.jpg", "/wedding8.jpg", "/wedding9.webp", "/wedding10.jpeg", "/wedding11.avif", "/wedding12.jpg", "/wedding13.jpg", "/wedding14.jpg", "/wedding1.jpg", "/wedding5.jpg", "/wedding3.jpg", "/wedding4.jpg"],
    prewedding: [ "/prewedding7.jpg", "/prewedding15.jpg", "/prewedding9.jpg",  "/prewedding2.jpg", "/prewedding3.jpeg", "/prewedding10.png", "/prewedding11.webp", "/prewedding12.webp", "/prewedding14.webp" ,"/prewedding13.webp", "/prewedding1.jpg", "/prewedding4.jpg"],
    birthday: ["/birthday1.jpg", "/birthday2.jpg", "/birthday3.jpg", "/birthday4.jpeg", "/birthday6.jpg", "/birthday2.jpg", "/birthday1.jpg"],
    engagement: ["/eng1.avif", "/eng2.jpg", "/eng3.jpg", "/eng4.jpg", "/eng1.avif", "/eng2.jpg", "/eng3.jpg"],
    maternity: ["/maternity1.jpg", "/maternity2.jpg", "/maternity3.jpg", "/maternity4.jpg", "/maternity5.jpg", "/maternity1.jpg", "/maternity2.jpg"],
    haldi: ["/haldi1.jpeg", "/haldi3.jpg", "/haldi4.jpg", "/haldi5.avif", "/haldi1.jpeg", "/haldi3.jpg", "/haldi4.jpg",]

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
      <Footer />

    </>
  )
}
export default Gallery