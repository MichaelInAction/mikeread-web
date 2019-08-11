import React from 'react';

function Banner(props) {
  let className = "banner";
  if(props.dark) {
    className = className + " dark";
  }
  if(!props.top) {
    className = className + " mid-banner"
  }
  className = className + " banner-img-" + props.align;
  return (
    <div className="banner-container">
      <img src={props.img} alt="" className={className}/>
      <div  className="centered">
        {props.content}
      </div>
    </div>
  );
}

export default Banner;
