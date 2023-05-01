import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Portfolio from "../views/Portfolio";
import MyToolTag from "./MyToolTag";

export default function PortfolioDetails (){
    const dispatch = useDispatch()
    const {portfolios} = useSelector((state) =>{
      return state
    })
    // console.log(portfolios)
    const { id } = useParams();
    const portfolio = portfolios.find(el => el.id == id)
    console.log(portfolio)

    return (
       <>
       <section className="project-cs-hero">
       <div className="project-cs-hero__content">
         <h1 className="heading-primary">{portfolio.title}</h1>
         <div className="project-cs-hero__info">
           <p className="text-primary">
             {portfolio.intro}
           </p>
         </div>
         <div className="project-cs-hero__cta">
           <a href={portfolio.deploymentUrl} className="btn btn--bg" target="_blank" style={{ marginRight : "10px"}}>Live Link</a>
           <a href={portfolio.githubUrl} className="btn btn--bg" target="_blank">Code Link</a>
         </div>
 
       </div>
     </section>
     <section className="project-details">
       <div className="main-container">
         <div className="project-details__content">
           <div className="project-details__showcase-img-cont">
             <img
               src={portfolio.imgUrl}
               alt="Project Image"
               className="project-details__showcase-img"
             />
           </div>
           <div className="project-details__content-main">
             <div className="project-details__desc">
               <h3 className="project-details__content-title">Project Overview</h3>
               <p className="project-details__desc-para">
                {portfolio.description}
               </p>
             </div>
             <div className="project-details__tools-used">
               <h3 className="project-details__content-title">Tools Used</h3>
               <div className="skills">
                 {
                  portfolio.tools.map(
                    el => {
                      return <MyToolTag tool={el}/>
                    }
                  )
                 }
               </div>
             </div>
             <div className="project-details__links">
               <h3 className="project-details__content-title">See Live</h3>
               <a
                 href={portfolio.deploymentUrl}
                 className="btn btn--med btn--theme project-details__links-btn"
                 target="_blank"
                 >Live Link</a
               >
               <a
                 href={portfolio.githubUrl}
                 className="btn btn--med btn--theme project-details__links-btn"
                 target="_blank"
                 >Code Link</a
               >
               <Link
                  to={"/projects"}
                 className="btn btn--med btn--theme-inv project-details__links-btn"
                 target="_blank"
                 >Go Back</Link>
             </div>
           </div>
         </div>
       </div>
     </section>
       </>
    )
}