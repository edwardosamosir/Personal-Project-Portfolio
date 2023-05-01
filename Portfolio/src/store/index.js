import { legacy_createStore as createStore } from 'redux'
const initialState = {
    portfolios: [
        {
            id: 1,
            title: "CNBC News Portal Clone Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/CNBC-Clone-Project.png?alt=media&token=73f0ee24-be40-4c8c-bd53-911eb207f372",
            intro:"This page contains the details of CNBC News Portal Clone Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "I created CNBC News Portal Clone Project, a news website that closely replicates the design and features of cnbc.com. I was drawn to their beautiful user interface and decided to recreate it for my project. I developed this website using React.js and React-Redux, and incorporated the TradingView Widget to mimic the Refinitiv API for real-time financial data.",
            shortDesc:"I created CNBC News Portal Clone Project, a news website that closely replicates the design and features of cnbc.com. I was drawn to their beautiful user interface and decided to recreate it for my project.",
            tools: ["JavaScript", "React", "Redux","HTML", "CSS", "React-Bootstrap", "Express", "PostgreSQL", "Sequelize", "GIT", "Github", "AWS", "Firebase"],
            deploymentUrl: "https://cnbc-newsportal.web.app/",
            githubUrl: "https://github.com/edwardosamosir/CNBC-News-Portal-Clone-ReactJS",
        },
        {
            id: 2,
            title: "CNBC CMS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/CNBC-Clone-Project-CMS.png?alt=media&token=d2f1c48b-603e-4bc8-adb9-db7fa636f18a",
            intro:"This page contains the details of CNBC Content Management System Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "This is the content management system website  I developed for the CNBC News Portal Clone Project using React.js and React-Redux. I had a great experience developing both the back-end and the beautiful front-end of the website. To access this CMS website, you can log in with the following credentials: email - admin1@mail.com, password - admin1.",
            shortDesc:"This is the content management system website  I developed for the CNBC News Portal Clone Project using React.js and React-Redux. I had a great experience developing both the back-end and the beautiful front-end of the website.",
            tools: ["JavaScript", "React", "Redux","HTML", "CSS", "React-Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "GIT", "Github", "AWS", "Firebase"],
            deploymentUrl: "https://cnbc-portfolio.web.app/",
            githubUrl: "https://github.com/edwardosamosir/CNBC-News-Portal-Clone-ReactJS",
        },
        {
            id: 3,
            title: "Zetflix CMS With JQuery Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-CMS-With-JQuery.png?alt=media&token=6b50a6e0-d63d-47cd-93f3-30f80bf173c4",
            intro:"This page contains the details of Zetflix Content Management System With JQuery Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "My Zetflix Content Management System with JQuery project was my first foray into the world of content management systems. Through this project, I was able to learn about JQuery and build a fully-functional website using an Express server. I'm proud of the result and feel that this portfolio was a valuable use of my time in mastering JQuery. To access this CMS website, you have the option to either register and login or log in directly using your Google account.",
            shortDesc:"My Zetflix Content Management System with JQuery project was my first foray into the world of content management systems. Through this project, I was able to learn about JQuery and build a fully-functional website using an Express server. I'm proud of the result and feel that this portfolio was a valuable use of my time in mastering JQuery.",
            tools: ["JavaScript", "JQuery", "HTML", "CSS", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-hacktiv8-5a847.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-CMS-JQuery-Project",
        },
        {
            id: 4,
            title: "Zetflix Movie Site With VueJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-Customer-Site.png?alt=media&token=8e315ce4-02a8-4fae-b951-45a448a17e6f",
            intro:"This page contains the details of Zetflix Movie Site With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "My enjoyment of watching Netflix during my free time led me to create a movie synopsis site with a similar name. I built this website using an Express server and VueJS, and it was my first experience building a single-page application with components. Overall, I am proud to have this project in my portfolio as it was a valuable learning experience. To add a movie to your favorites, you have the option to either register and login or log in directly using your Google account.",
            shortDesc:"My enjoyment of watching Netflix during my free time led me to create a movie synopsis site with a similar name. I built this website using an Express server and VueJS, and it was my first experience building a single-page application with components. Overall, I am proud to have this project in my portfolio as it was a valuable learning experience.",
            tools: ["JavaScript", "VueJS", "Pinia", "HTML", "CSS", "Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-movies-300d9.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-Movie-Synposis-Site-VueJs-Project",
        },
        {
            id: 5,
            title: "Zetflix CMS With VueJS Project",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/Zetflix-CMS-With-VueJS.png?alt=media&token=3b0a3328-3b39-423d-978b-3aeac8f4df3b",
            intro:"This page contains the details of Zetflix Content Management System With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "This is the content management system website that I built using an Express server and VueJS for the Zetflix Movie Site. I implemented both soft-delete and hard-delete functionalities, as well as history logs for every change made to the movie entity, resulting in a highly-functional and impressive website. To access this CMS website, you have the option to either register and login or log in directly using your Google account.",
            shortDesc:"This is the content management system website that I built using an Express server and VueJS for the Zetflix Movie Site. I implemented both soft-delete and hard-delete functionalities, as well as history logs for every change made to the movie entity, resulting in a highly-functional and impressive website.",
            tools: ["JavaScript", "VueJS", "HTML", "CSS", "Bootstrap", "Express", "PostgreSQL", "JWT", "Sequelize", "bcryptjs", "GoogleOAuth", "GIT", "Github", "Railway", "Firebase"],
            deploymentUrl: "https://zetflix-movies.web.app/",
            githubUrl: "https://github.com/edwardosamosir/Zetflix-Movie-Synposis-Site-VueJs-Project",
        },
        {
            id: 6,
            title: "Trading Buddy",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/edwardo-samosir-portfolio-site.appspot.com/o/TradingBuddy.png?alt=media&token=6922ae87-e50a-4eab-8a58-7a6d8402fec9",
            intro:"This page contains the details of Trading Buddy With VueJS Project which includes the Project Overview, Tools Used, Live Link and Code Link to the official product.",
            description: "My background in financial market trading inspired me to create a website that provides real-time data on stock prices and market trends. This project was my first experience working with third-party APIs, which allowed me to access a vast amount of financial data to incorporate into my site. I am proud of the results and am excited to continue developing and expanding this project. To access Trading Buddy website, you have the option to either register and login or log in directly using your Google account.",
            shortDesc:"My background in financial market trading inspired me to create a website that provides real-time data on stock prices and market trends. This project was my first experience working with third-party APIs, which allowed me to access a vast amount of financial data to incorporate into my site. I am proud of the results and am excited to continue developing and expanding this project.",
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