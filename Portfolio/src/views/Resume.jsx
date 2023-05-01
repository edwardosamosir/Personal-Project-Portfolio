import MyCVPage1 from '../assets/pdf/EdwardoSamosirCV_page-0001.jpg'
import MyCVPage2 from '../assets/pdf/EdwardoSamosirCV_page-0002.jpg'
import MyCV from '../assets/pdf/EdwardoSamosirCV.pdf'

export default function Resume() {
    return (

        <section id="contact" className="contact sec-pad dynamicBg">
            <div className="main-container">
                <img src={MyCVPage1} style={{width:"100%", height:"100%"}}  />
                <img src={MyCVPage2} style={{width:"100%", height:"100%"}}  />
            </div>
        </section>
    )
}
