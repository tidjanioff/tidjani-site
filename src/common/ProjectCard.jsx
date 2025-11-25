import React from 'react'
import {motion} from "framer-motion"

function ProjectCard({src, ghlink, ldlink, name, description, techStack}) {
  return (
    <motion.div 

    style={{
        marginBottom:'35px',
        backgroundColor:'var(--background-color)',
        padding:"20px 20px 20px 20px",
        borderRadius:'19px',
        boxShadow:'transparent 0 0 0 1px,var(--shadow-color) 0 6px 20px',
    }} className='projectCard'>
        <a href={ldlink} target='_blank'>
            <img className='hover' src={src} alt={`${name} logo`}/>
        </a>
        <h3>{name}</h3>
        <p style={{maxWidth: "250px"}}>{description}
            {/* <br></br> */}
            {/* <span style={{
                fontSize:"14px",
                fontWeight:"bold",
                // fontStyle:"italic",
               
            }}>{techStack}</span> */}
        </p>
        <div className="buttons"
            style={{
                marginTop:'0px',
            }}
        >
            <a href={ldlink} target='_blank'>
                <button className='ldButton'
                style={{
                    marginRight:'15px',
                }}
                >Live Demo</button>
            </a>
            <a href={ghlink} target='_blank'>
                <button className='gbButton'>GitHub</button>
            </a>

        </div>
    </motion.div>
  )
}

export default ProjectCard