import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import html from "../../assets/html.png"
import reeact from "../../assets/Reeact.png"
import video from "../../assets/video.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {

    useGSAP(()=>{
        gsap.from(".circle",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".circle",
                scroll:"body",
                scrub:2,
                start:"top60%",
                end:"top 30%"
            }
           
    
        })
        gsap.from(".line",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".line",
                scroll:"body",
                scrub:2,
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".aboutdetails h1",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails h1",
                scroll:"body",
                scrub:2,
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".aboutdetails ul",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails ul",
                scroll:"body",
                scrub:2,
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".rightabout",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".rightabout",
                scroll:"body",
                scrub:2,
                start:"top 60%",
                end:"top 30%"
            }
        })
        
    })
  return (
   <div id="about">
    <div className="leftabout">
        <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            
            
        </div>
        <div className="aboutdetails">
            <div className="personalinfo">
                <h1>Personal Info</h1>
                <ul>
                    <li>
                        <span>NAME</span> : SABIN MAGAR
                    </li>
                    <li>
                        <span>AGE</span> : 24 YEARS
                    </li>
                    <li>
                        <span>GENDER</span> : MALE
                    </li>
                   
                    

                </ul>
            </div>
            <div className="education">
                <h1>Education</h1>
                <ul>
                    <li>
                        <span>DEGREE</span> : BCA
                    </li>
                    <li>
                        <span>COLLEGE</span> : RATNA RAJYALAXMI CAMPUS
                    </li>
                    <li>
                        <span>COMPLETED YEAR</span> : 2024
                    </li>
                

                </ul>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>
                    HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JAVASCRIPT
                    </li>
                    <li>
                      REACT JS
                    </li>
                    <li>
                      VIDEO EDITING
                    </li>
                    <li>
                      GRAPHICS DESIGNING
                    </li>
                    

                </ul>
            </div>
        </div>
    </div>
   
   <div className="rightabout">
    <Card title="REACT DEVELOPER" image={reeact}/>
    <Card title="HTML,CSS,JAVASCRIPT" image={html}/>
    <Card title="VIDEO EDITING" image={video}/>
    </div>
   </div>
  )
}

export default About
