import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../Component/ProjectCard'

export default function Projects(props) {
    return (
        <div className="container">
            <div className="title">
                    <h1>Projects</h1>
            </div>
            <div className="projects-container">
                 {
                    projects?.map((item,index) => {
                        return (
                            <ProjectCard key={index} {...item} />
                        )
                    })
                 }
            </div>
        </div>
    )
}

