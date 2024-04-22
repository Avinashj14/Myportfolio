import "./portfolio.css";

import IMG1 from "../../assets/ToDo.jpg";
import IMG2 from "../../assets/weatherapp.jpg";
import IMG3 from "../../assets/AdminUi.jpg";
import IMG4 from "../../assets/ageCal.jpg";
import IMG5 from "../../assets/RockPaper.jpg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Todo-App",
      img: IMG1,
      description:
        "ToDo application that allows users to add tasks, mark tasks as completed, and delete tasks. The application uses React for the user interface and Redux for state management, with task data stored locally using localStorage.",
      technologies: "React Js",
      link: "https://todo-app-gilt-xi.vercel.app/",
      github: "https://github.com/Avinashj14/Todo-App",
    },
    {
      id: 2,
      title: "WeatherWise: Real-Time Forecast",
      img: IMG2,
      description:
        "A Weather tracking application built using React.js. Leveraging real-time weather data from APIs, it provides users with accurate and up-to-date weather forecasts. ",
      technologies: "React Js ",
      link: "https://react-weather-app-three-steel.vercel.app/",
      github: "https://github.com/Avinashj14/React-Weather-App",
    },
    {
      id: 3,
      title: "Admin UI",
      img: IMG3,
      description: "ReactAdminUI is a user management dashboard built with React, designed to provide administrators with an efficient and intuitive interface for overseeing and managing users within a startup environment.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://admin-ui-ochre.vercel.app/",
      github: "https://github.com/Avinashj14/Admin-Ui",
    },
    {
      id: 4,
      title: "Age CalCulator",
      img: IMG4,
      description:
        "Age Calculator App! This simple web application allows you to calculate your age based on your birth date. The app calculates the difference between your birth date and the current date, providing your age in years, months, and days.",
      technologies: "Html | CSS | JavaScript ",
      link: "https://age-calculator-delta-khaki.vercel.app/",
      github: "https://github.com/Avinashj14/Age-Calculator",
    },
    {
      id: 5,
      title: "Rock Pape Scisor",
      img: IMG5,
      description:
        "A classic game of Rock-Paper-Scissors implemented using HTML, CSS, and JavaScript. This interactive web application allows users to play against the computer, providing a simple yet entertaining gaming experience.",
      technologies: "Html | Css | Js ",
      link: "https://rock-paper-scissors-six-delta.vercel.app/",
      github: "https://github.com/Avinashj14/Rock-Paper-Scissors",
    }
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
