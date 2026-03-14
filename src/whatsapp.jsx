
function Whatsapp() {
    function Whatsappopen() {
        const url = `https://wa.me/917828053425`

window.open(url,"_blank")
    }
 return(
    <div>
<img className="whatsappicon" src="/whatsapp.png" alt="" onClick={()=> Whatsappopen()}/>
    </div>
 )   
}
export default Whatsapp