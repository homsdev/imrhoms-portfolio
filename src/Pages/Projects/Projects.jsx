import React from 'react'
import Card from '../../components/Card/Card';

import "./Projects.scss";

const Projects = () => {

    const projects = ['1', '2', '3', '4', '5']

    return (
        <div className='projects-container'>
            {projects.map((project, index) => (<Card key={index} />))}
        </div>
    )
}

export default Projects
