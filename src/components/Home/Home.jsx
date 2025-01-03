import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'


import gsap from 'gsap'

function Home() {
    useGSAP(()=>{
        let tl1=gsap.timeline();
        tl1.from(".line1",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line3",{
            y:80,
            duration:1,
            opacity:0
        })
        gsap.from(".righthome img",{
            x:200,
            duration:1,
            opacity:0
        })
    })
  return (
   <div id="home">
    <div className="lefthome">
<div className="homedetails">
    <div className="line1">I'M</div>
    <div className="line2">SABIN MAGAR</div>
    <div className="line3">
        <TypingEffect
        text={["WEB DEVELOPER", "VIDEO EDITOR", "GRAPHIC DESIGNER"]}
        speed={100}
        eraseSpeed={50}
        typingDelay={1000}
        eraseDelay={500}
        cursor='|'
        />
        </div>
   
                        <button>HIRE ME</button>
                  

</div>
    </div>
    <div className="righthome">
        <img src={man} alt="" />

    </div>
   </div>
  )
}

export default Home