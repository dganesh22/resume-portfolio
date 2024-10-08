import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard (props) {
    return (
        <div className="card">
                     <div className="card-image">
                        <img src={props?.image} alt="project-1" />
                     </div>
                     <div className="card-container">
                        <h2> { props?.title } </h2>
                        <div className="links">
                            <Link to={props?.code} target='_blank' className="btn code">Code</Link>
                            <Link to={props?.live} target='_blank' className="btn live">Live</Link>
                        </div>
                     </div>
    </div>
    )
}