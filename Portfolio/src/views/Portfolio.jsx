import CNBCCloneProject from '../assets/jpeg/CNBC-Clone-Project.png'
import CNBCCloneProjectCMS from '../assets/jpeg/CNBC-Clone-Project-CMS.png'
import ZetflixCMSWithJQuery from '../assets/jpeg/Zetflix-CMS-With-JQuery.png'
import ZetflixCustomerSite from '../assets/jpeg/Zetflix-Customer-Site.png'
import ZetflixCMSWithVueJS from '../assets/jpeg/Zetflix-CMS-With-VueJS.png'
import TradingBuddy from '../assets/jpeg/TradingBuddy.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PortfolioRow from '../components/PortfolioRow'

export default function Portfolio() {
    const dispatch = useDispatch()
    const {portfolios} = useSelector((state) =>{
      return state
    })
    // console.log(portfolios)
    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                    Here you will find some of the projects that I created using my proficient tech stacks.
                    </span>
                </h2>

                <div className="projects__content">
                    {
                        portfolios?.map(el =>{
                            return <PortfolioRow key={el.id} Portfolio={el} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}