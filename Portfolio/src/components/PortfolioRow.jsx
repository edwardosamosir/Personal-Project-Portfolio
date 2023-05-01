import { Link } from "react-router-dom";

export default function PortfolioRow({Portfolio}) {
    return (
        <div className="projects__row">
        <div className="projects__row-img-cont">
            <img
                src={Portfolio.imgUrl}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
            />
        </div>
        <div className="projects__row-content">
            <h3 className="projects__row-content-title">{Portfolio.title}</h3>
            <p className="projects__row-content-desc">
                {Portfolio.intro}
            </p>
            <Link
                to={"/project-detail/"+ Portfolio.id}
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
            >View Details</Link>
        </div>
        </div>
    )
  }
