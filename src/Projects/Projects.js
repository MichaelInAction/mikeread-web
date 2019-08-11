import React from 'react';
import carousel1 from '../images/ICAI1.jpg';
import carousel2 from '../images/ICAI2.jpg';
import carousel3 from '../images/ICAI3.jpg';


function Projects() {
  return (
      <div className="container">
        <h1 className="centered-title" id="Chatbot-Deployment">Deployment and Hyper-Parameter Optimization of Chatbots</h1>
        <p>
          In my senior year at Marist College, I got the opportunity to work with Pablo Rivas, a faculty member at Marist, on this project. If you are interested, here is the abstract:
        </p>
        <blockquote><i>Chatbots are a specific application of a set of machine learning algorithms belonging to the family of natural language processing (NLP). Recently, NLP algorithms have gained attention as we are closer to passing the Turing test
            when they are applied to human-computer interaction-based systems. In this thesis project we will model chatbots using NLP-based machine learning algorithms based on datasets of people. Based on sentences and text from a specific person, we
            measure how well the chatbot models such person's writing. In theory, NLP algorithms of the Long Short Term Memory (LSTM) type are capable of remembering, summarizing, and learning patterns of speech, style, and forms of any sequences of
            text. Results indicate that an LSTMs is capable of generating novel sentences using as a case study Donald Trump's tweets.</i></blockquote>
        <p>
          If you would like to read more about this project, the full text can be found <a href="https://csce.ucmss.com/cr/books/2019/LFS/CSREA2019/ICA2677.pdf" target="_blank" rel="noopener noreferrer">here</a>
        </p>

        <p>
          My project, as well as a few other student projects from Marist, were accepted for presentations at the ICAI'19 in Las Vegas in late July, 2019. Here are a few photos from the event.
        </p>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel-image" src={carousel1} alt="Me Presenting" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bordered-text">Presenting</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-image" src={carousel2} alt="Me at the event" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bordered-text">At the event</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-image" src={carousel3} alt="Me with the Marist group" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bordered-text">With the Marist group</h5>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  );
}

export default Projects;
