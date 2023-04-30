import { Link } from "react-router-dom";

export default function PortfolioDetails (){
    return (
       <>
       <section className="project-cs-hero">
       <div className="project-cs-hero__content">
         <h1 className="heading-primary">Project 1</h1>
         <div className="project-cs-hero__info">
           <p className="text-primary">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
             in numquam incidunt earum quaerat cum fuga, atque similique natus
             nobis sit.
           </p>
         </div>
         <div className="project-cs-hero__cta">
           <a href="#" className="btn btn--bg" target="_blank" style={{ marginRight : "10px"}}>Live Link</a>
           <a href="#" className="btn btn--bg" target="_blank">Code Link</a>
         </div>
 
       </div>
     </section>
     <section className="project-details">
       <div className="main-container">
         <div className="project-details__content">
           <div className="project-details__showcase-img-cont">
             <img
               src={"https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/CNBC-Clone-Project.png?alt=media&token=73f0ee24-be40-4c8c-bd53-911eb207f372"}
               alt="Project Image"
               className="project-details__showcase-img"
             />
           </div>
           <div className="project-details__content-main">
             <div className="project-details__desc">
               <h3 className="project-details__content-title">Project Overview</h3>
               <p className="project-details__desc-para">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                 alias tenetur minus quaerat aliquid, aut provident blanditiis,
                 deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                 mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Neque alias tenetur minus quaerat
                 aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                 eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                 ullam rem?
               </p>
               <p className="project-details__desc-para">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                 alias tenetur minus quaerat aliquid, aut provident blanditiis,
                 deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                 mollitia laborum corrupti ullam rem?
               </p>
             </div>
             <div className="project-details__tools-used">
               <h3 className="project-details__content-title">Tools Used</h3>
               <div className="skills">
                 <div className="skills__skill">HTML</div>
                 <div className="skills__skill">CSS</div>
                 <div className="skills__skill">JavaScript</div>
                 <div className="skills__skill">React</div>
                 <div className="skills__skill">SASS</div>
                 <div className="skills__skill">GIT</div>
                 <div className="skills__skill">Shopify</div>
                 <div className="skills__skill">Wordpress</div>
                 <div className="skills__skill">Google ADS</div>
                 <div className="skills__skill">Facebook Ads</div>
                 <div className="skills__skill">Android</div>
                 <div className="skills__skill">IOS</div>
               </div>
             </div>
             <div className="project-details__links">
               <h3 className="project-details__content-title">See Live</h3>
               <a
                 href="#"
                 className="btn btn--med btn--theme project-details__links-btn"
                 target="_blank"
                 >Live Link</a
               >
               <a
                 href="#"
                 className="btn btn--med btn--theme project-details__links-btn"
                 target="_blank"
                 >Code Link</a
               >
               <a
                 href="#"
                 className="btn btn--med btn--theme-inv project-details__links-btn"
                 target="_blank"
                 >Go Back</a
               >
             </div>
           </div>
         </div>
       </div>
     </section>
       </>
    )
}