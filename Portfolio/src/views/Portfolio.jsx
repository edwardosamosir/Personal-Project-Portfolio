import CNBCCloneProject from '../assets/jpeg/CNBC-Clone-Project.png'
import CNBCCloneProjectCMS from '../assets/jpeg/CNBC-Clone-Project-CMS.png'
import ZetflixCMSWithJQuery from '../assets/jpeg/Zetflix-CMS-With-JQuery.png'
import ZetflixCustomerSite from '../assets/jpeg/Zetflix-Customer-Site.png'
import ZetflixCMSWithVueJS from '../assets/jpeg/Zetflix-CMS-With-VueJS.png'
import TradingBuddy from '../assets/jpeg/TradingBuddy.png'

export default function Portfolio() {
    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                        tempora explicabo quae quod deserunt eius sapiente
                    </span>
                </h2>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={CNBCCloneProject}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">CNBC News Portal Clone With ReactJS Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-1.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={CNBCCloneProjectCMS}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">CNBC Content Management System With ReactJS Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-2.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={ZetflixCMSWithJQuery}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Zetflix Content Management System With JQuery Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-3.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={ZetflixCustomerSite}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Zetflix Movie Site With VueJS Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-3.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={ZetflixCMSWithVueJS}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Zetflix Content Management System With VueJS Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-3.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={TradingBuddy}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Trading Buddy With VueJS Project</h3>
                            <p className="projects__row-content-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a
                                href="./project-3.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >View Details</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}