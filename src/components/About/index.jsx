import React from "react";
import Photo from '../../assets/images/self-portrait.jpg';

const photoStyle = {
  width: '18rem',
  borderRadius: '50%'
}

const About = () => {
  return (
    <div className="container pt-3">
      <h1>
        <u>About</u>
      </h1>
      <div>
        <img className='pt-4' src={Photo} style={photoStyle}></img>
        <h4 className='pt-4'>I am a 1.5 generation Korean-American who moved to the states in 2006 from South Korea. I received all primary education in Gainesville, Florida and graduted from the Univserity of Florida in 2020. Currently I am taking the UCF FSF Coding Bootcamp and learning the various full-stack developer languages to add to my skill set.</h4>
      </div>
    </div>
  );
};

export default About;
