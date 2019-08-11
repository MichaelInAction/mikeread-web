import React from 'react';
import Banner from '../Banner/Banner';
import bg1 from '../images/banner.jpg';
import bg2 from '../images/banner2.png';
import me from '../images/me.png';
import marist from '../images/marist.png';
import resume from '../MichaelReadResume.pdf';

function Landing() {
  const headingContent = (
    <div>
      <p style={{margin: '-10px'}}>Hello, my name is</p>
      <h1>Michael Read</h1>
      <p>Welcome!</p>
      <br />
      <a role="button" className="btn btn-outline-primary" href="https://twitter.com/RealRainbowMike" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      <a role="button" className="btn btn-outline-primary" href="https://github.com/MichaelInAction" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      <a role="button" className="btn btn-outline-primary" href="https://www.linkedin.com/in/mread15/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      <a role="button" className="btn btn-primary" href={resume} download="MichaelReadResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>);

  return (
    <div id="head" className="content-wrap">
      <Banner content={headingContent} img={bg1} dark='true' top='true' align='right' />
      <div className="container">
        <h1 id="whoami">Who am I?</h1>
        <div className="vertical-centered">
          <img src={me} className="inline-image-left rounded-image" alt="me" />
          <p>
            I am a software developer with a B.S. in Computer Science from Marist College. I enjoy nature, movies, games, and music.
            When I'm not at work or working on a project, I can usually be found jamming out with my headphones on or watching through
            the Marvel movies for the 30th time.
          </p>
          <br className="break" />
        </div>
      </div>

      <hr />

      <div className="container">
        <h1 id="skills">Skills</h1>
        <h4>Technical</h4>
        <p>As a computer scientist, I have hands on experience with a multitude of
          different languages and technologies. The main languages that I have had experience
          with are:</p>
        <ul>
          <li>Python</li>
          <li>JavaScript/HTML/CSS</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
        <p>I also have done some work with PHP and R.</p>
        <p>Some technologies of note that I have worked with are:</p>
        <ul>
          <li>MySQL/PostgreSQL</li>
          <li>Tensorflow/Keras</li>
          <li>ReactJS</li>
          <li>Angular</li>
          <li>NodeJS</li>
        </ul>
        <p>I have also done a little bit of Android development using Java.</p>
        <br/>
        <br/>
        <h4>Other</h4>
        <p>From my experience working with my software development team at IBM, I
          developed a strong team-based mindset, and strong collaborative skills.
          I also, from my time working with Kappa Kappa Psi, have gained a lot of leadership
          experience. I worked as secretary to update our attendance system from paper
          to an automated spreadsheet system. As president, I gained a lot of experience in
          managing people, delegating tasks, and working through problems.
        </p>
      </div>
      <hr/>
      <div className="container">
        <h1 id="experience">Experience</h1>
        <p>I spent the summer of 2018, as well as the 2018-2019 academic year,
          interning at IBM in Southbury, CT working on Corporate Applications. I learned a lot of valuable skills from this internship, as well
          as many new technologies that I would not have otherwise come into contact with.
          <br/>
          <br/>
          Outside of academics, I have experience in leadership through Kappa Kappa Psi, an
          honorary band service fraternity. I was elected Secretary of our chapter for the 2017-2018 academic year,
          and I was also elected president of our chapter for the 2018-2019 academic year. This organization
          has given me a lot of good experience in the field of leadership, learning how to effectively
          work in a group setting.</p>
      </div>
      <Banner img={bg2} align='left' />
      <div className="container">
        <h1 id="education">Education</h1>
        <img src={marist} className="inline-image-right" alt="marist" />
        <p>I am a graduate of Marist College, where I earned my bachelor's in
          Computer Science with a concentration in Software Development. I also minored in
          Data Science, Mathematics, and Information Systems.</p>
        <p>As a part of the Honors Program at Marist, I also got the opportunity to work one-on-one with
          faculty members on some interesting projects. The first project was a Java-based C4.5 decision tree
          algorithm, my work for which can be found <a href="https://github.com/MichaelInAction/HonorsByContract-C4.5DecisionTree" target="_blank"  rel="noopener noreferrer">here</a>.</p>
        <p>For my Honors Senior Thesis, I worked with the same faculty
          member on a project titled "Deployment and Hyperparameter Optimization of Chatbots". My work can be found <a href="https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot" target="_blank"  rel="noopener noreferrer">here</a>.
          The work I did on this project was accepted for a presentation at the 21st International Conference on Artificial Intelligence in July-August 2019.</p>
          <br className="break" />
      </div>
    </div>
  );
}

export default Landing;
