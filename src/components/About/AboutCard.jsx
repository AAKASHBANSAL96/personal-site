import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return ( 
      <Card className = "quote-card-view" >
        <Card.Body >
        <blockquote className = "blockquote mb-0" >
        <p style = {
            { textAlign: "justify" }
        } >
        Hi Everyone, I am < span className = "purple" > Aakash Bansal </span>
        from <span className = "purple" > Gujarat, India. </span> <br/> I am a Full-Stack Developer < br/>
        <br/>
        Apart from coding, some other activities that I love to do !
            </p> 
            <ul > 
              <li className = "about-activity" >
                <ImPointRight/> Playing Games 
              </li> 
              <li className = "about-activity" > 
                <ImPointRight/> Graphic Designing 
              </li> 
              <li className = "about-activity" > 
                <ImPointRight/> Travelling 
              </li> 
            </ul >

        <p style = {
            { marginBlockEnd: 0, color: "rgb(155 126 172)" }
        } >
        "Strive to build things that make a difference!" { " " } </p> <footer className = "blockquote-footer mt-1" > Aakash Bansal </footer> </blockquote> </Card.Body> </Card>
    );
}

export default AboutCard;