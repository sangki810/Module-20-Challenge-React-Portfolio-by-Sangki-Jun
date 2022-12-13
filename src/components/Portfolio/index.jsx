import React from "react";
import UnderConstruction from '../../assets/images/under-construction.jpg';
import Cinemafiles from '../../assets/images/cinemafiles-by-cinemaphiles.PNG';
import GameFinder from '../../assets/images/Game-Finder.jpg';
import TechBlog from '../../assets/images/tech-blog.PNG';
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg';
import Jate from '../../assets/images/module-19-challenge-jate.jpg';

const cardStyle = {
  width: '20rem'
}

const Portfolio = () => {
  return (
    <div className='container pt-3 pb-5'>
      <h1>
        <u>Portfolio</u>
      </h1>
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row justify-content-center my-5'>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={UnderConstruction} ></img>
            <div className='card-body text-center'>
              <h5>US Postal & Printing</h5>
              <p>MERN stack</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/Mateo-Wallace/US-Postal-Printing'>Repo</a>
              </div>
            </div>
          </div>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={Cinemafiles} ></img>
            <div className='card-body text-center'>
              <h5>Cinemafiles</h5>
              <p>RESTful API / MySQL / Handlebars</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2' href='https://cinemafiles-by-cinemaphiles.herokuapp.com/'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/sangki810/Project-2-The-Cinemaphiles'>Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-center my-5'>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={GameFinder} ></img>
            <div className='card-body text-center'>
              <h5>Game Finder</h5>
              <p>3rd party API's</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2' href='https://ianmosur06.github.io/Project-1-Game-Finder/'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/IanMosur06/Project-1-Game-Finder'>Repo</a>
              </div>
            </div>
          </div>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={TechBlog} ></img>
            <div className='card-body text-center'>
              <h5>Tech Blog</h5>
              <p>MVC / MySQL / Handlebars</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2' href='https://tech-blog-by-sangki-jun.herokuapp.com/'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/sangki810/Module-14-Challenge-Tech-Blog-by-Sangki-Jun'>Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-center my-5'>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={WeatherDashboard} ></img>
            <div className='card-body text-center'>
              <h5>Weather Dashboard</h5>
              <p>API</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2' href='https://sangki810.github.io/Module-6-Challenge-Weather-Dashboard-by-Sangki-Jun/'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/sangki810/Module-6-Challenge-Weather-Dashboard-by-Sangki-Jun'>Repo</a>
              </div>
            </div>
          </div>
          <div className='card mx-5' style={cardStyle}>
            <img className='card-img-top' src={Jate} ></img>
            <div className='card-body text-center'>
              <h5>JATE</h5>
              <p>PWA</p>
              <div className='text-center'>
                <a className='btn btn-primary mx-2' href='https://jate-by-sangki-jun.herokuapp.com/'>Site</a>
                <a className='btn btn-primary mx-2' href='https://github.com/sangki810/Module-19-Challenge-Text-Editor-by-Sangki-Jun'>Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
