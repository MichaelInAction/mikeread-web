import React from 'react';
import Banner from '../Banner/Banner';
import AutoType from '../AutoType/AutoType';
import bg3 from '../images/banner3.png';
import bg4 from '../images/banner4.png';
import bg5 from '../images/banner5.png';
import marvel from '../images/mcuTierList.png'

function Personal() {
  return (
    <div id="head">

    <Banner img={bg3} dark='true' content={<AutoType before="I love " typedWords={[ "comics", "games", "programming", "machine learning", "music" ]} after=""/>} top='true' align='centered' />

    <div><br /></div>

    <div className="container">
      <h1 id="bio">About Me</h1>
      <p>
        I have had a passion for computer science since I was in middle school,
        when I asked my dad for my first programming book, on Java. When I was
        in 11th grade I took my first computer science course, and the year after
        that I became one of the founding members of my high schools computer science
        club.
      </p>
      <p>
        I always enjoy having a personal project to work on when I'm not busy with
        something else, especially when that project can help me learn some new skill.
        I've done things ranging from turning a raspberry pi into a retro gaming system,
        to designing databases for different games or things that I'm interested in, and
        making simple Android applications.
      </p>
      <p>
        Beyond computer science, I enjoy spending time with my friends, be it
        hiking through trails near campus, having a late night D&D session, hopping
        online and playing some multiplayer games, or just sitting around and hanging out.
      </p>
    </div>

    <Banner img={bg4} align='centered' />

    <div className="container">
      <h1 id="marvel">Marvel</h1>
      <p>
        I have what some might call an obsession with the Marvel MCU. My mom took
        me to see The Avengers (against my will) when it came out in 2012, and since then
        I have gone and seen every single new movie in theaters. I also have the entire
        collection on DVD, which has prompted many friends to say that I have too many
        DVDs. If you were interested, this is my current ranking of the MCU films:
      </p>
      <div className="centered-img-container">
        <img src={marvel} className="centered-img" alt="MCU Tier List" />
      </div>
    </div>

    <Banner img={bg5} align='centered' />

    <div className="container">
      <h1 id="music">Music</h1>
      <p>
        From an early age I have been involved with music in one form or another.
        I sang in my church's childrens choir, and in fourth grade I began playing
        the trombone. I did both choir and band in middle school, and while I didn't
        continue with choir in high school, I did continue with the trombone.
        I was first chair trombone in both my high schools concert band and jazz
        band for three years, and continued playing through college as well. While
        I am currently not in any community band, I do try to continue my playing.
        Since returning from college, I have also been singing with my church choir.
      </p>
    </div>
    </div>
  );
}

export default Personal;
