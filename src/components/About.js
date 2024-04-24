import React from "react";
 import Links from "./Links";

function About(props) {
  if (!props.bio || props.bio === "") {
    return(
      <div id="about">
        <img src="https://i.imgur.com/mV8P0xj.gif" alt="I made this" />
      </div>
      
    );}
else {  
  return (
    <div id="about">
      <h2>About Me</h2>
       <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links />
    </div>
  );
}
}
export default About;
