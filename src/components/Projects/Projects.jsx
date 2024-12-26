import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import sable from "../../assets/about.png"
import Tic from "../../assets/tic-tac-toe.png"
import Virtual from "../../assets/sabinwin.png"
import Terminal from "../../assets/terminal.png"
import Ochi from "../../assets/ochii.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
    useGSAP(()=>{
        gsap.from("#para",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"#para",
                scroll:"body",
                scrub:2,
                start:"top 80%",
                end:"top 30%",
                
        }
        })
        gsap.from(".slider",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".slider",
                scroll:"body",
                scrub:2,
                start:"top 80%",
                end:"top 30%",
                
        }
        })
    })   
    
        
       
 
    
  return (
  <div id="projects">
    <h1 id="para">PASSIONATE ABOUT LEARNING AND BUILDING PROJECTS </h1>
    <div className="slider">
  
  <a href="https://tic-tac-toe-game-bysabin-azure-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
    <Card title="Tic-Tac-Toe" image={Tic} />
  </a>
  <a href="https://sabinwin-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
    <Card title="Virtual-Win" image={Virtual} />
  </a>
  <a href="https://sabin-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
    <Card title="Terminal" image={Terminal} />
  </a>
  <a href="https://ochi-clone-sabin.vercel.app/" target="_blank" rel="noopener noreferrer">
    <Card title="Ochi-Clone" image={Ochi} />
  </a>
  <a href="https://github.com/Whysabin/SableShare-P2P-File-Sharing-Webpage-using-Chunking-Algotihm-" target="_blank" rel="noopener noreferrer">
    <Card title="SableShare" image={sable} />
  </a>
</div>

 
  </div>
  )
}

export default Projects