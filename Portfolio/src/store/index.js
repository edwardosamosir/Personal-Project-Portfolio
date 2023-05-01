import { legacy_createStore as createStore } from 'redux'
const initialState = {
    portfolios: [
        {
            id: 1,
            title: "CNBC News Portal Clone Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/CNBC-Clone-Project.png?alt=media&token=73f0ee24-be40-4c8c-bd53-911eb207f372",
            intro:"This page contains the details of CNBC News Portal Clone Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "React", "Redux","HTML", "CSS", "React-Bootstrap", "Express", "PostgreSQL", "Sequelize", "GIT", "Github", "AWS EC2", "Firebase"],
            deploymentUrl: "https://cnbc-newsportal.web.app/",
            githubUrl: "https://github.com/edwardosamosir/CNBC-News-Portal-Clone-ReactJS",
        },
        {
            id: 2,
            title: "CNBC Content Management System With ReactJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/CNBC-Clone-Project-CMS.png?alt=media&token=d2f1c48b-603e-4bc8-adb9-db7fa636f18a",
            intro:"This page contains the details of CNBC Content Management System Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "React", "Redux","HTML", "CSS", "React-Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "GIT", "Github", "AWS EC2", "Firebase"],
            deploymentUrl: "https://cnbc-portfolio.web.app/",
            githubUrl: "https://github.com/edwardosamosir/CNBC-News-Portal-Clone-ReactJS",
        },
        {
            id: 3,
            title: "Zetflix Content Management System With JQuery Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-CMS-With-JQuery.png?alt=media&token=6b50a6e0-d63d-47cd-93f3-30f80bf173c4",
            intro:"This page contains the details of Zetflix Content Management System With JQuery Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "JQuery", "HTML", "CSS", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-hacktiv8-5a847.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-CMS-JQuery-Project",
        },
        {
            id: 4,
            title: "Zetflix Movie Site With VueJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-Customer-Site.png?alt=media&token=8e315ce4-02a8-4fae-b951-45a448a17e6f",
            intro:"This page contains the details of Zetflix Movie Site With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "VueJS", "Pinia", "HTML", "CSS", "Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-movies-300d9.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-Movie-Synposis-Site-VueJs-Project",
        },
        {
            id: 5,
            title: "Zetflix Content Management System With VueJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-CMS-With-VueJS.png?alt=media&token=3b0a3328-3b39-423d-978b-3aeac8f4df3b",
            intro:"This page contains the details of Zetflix Content Management System With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "VueJS", "HTML", "CSS", "Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-movies.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-Movie-Synposis-Site-VueJs-Project",
        },
        {
            id: 6,
            title: "Trading Buddy With VueJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/TradingBuddy.png?alt=media&token=6922ae87-e50a-4eab-8a58-7a6d8402fec9",
            intro:"This page contains the details of Trading Buddy With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "Insert Description",
            tools: ["JavaScript", "VueJS", "Pinia", "HTML", "CSS", "Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github","TradingViewAPI","StockDataAPI", "NewsAPI","GoAPI","Socket.io", "Midtrans", "Railway", "Firebase"],
            deploymentUrl: "https://trading-buddy-d979e.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Trading-Buddy-VueJS-Project",
        },
    ],
    portfolio: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchPortfolio':
      return {
        ...state,
        posts: action.payload
      }
    case 'fetchPortfolioDetails':
        return {
          ...state,
          posts: action.payload
        }
    default:
      return state
  }
}

let store = createStore(rootReducer)

export default store;