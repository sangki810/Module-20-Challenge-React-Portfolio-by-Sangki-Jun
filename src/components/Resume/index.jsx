import React from "react";
import ResumePDF from '../../assets/pdf/Resume.pdf';

const Resume = () => {
  return (
    <div className="container pt-3">
      <h1 className="underline">
        <u>Resume</u>
      </h1>
      <div>
        <h3>Front-end technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
      </div>
      <div>
        <h3>Back-end technologies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div>
        <h4>Download my <a className='' href={ResumePDF}>resume</a></h4>
      </div>
    </div>
  );
};

export default Resume;
