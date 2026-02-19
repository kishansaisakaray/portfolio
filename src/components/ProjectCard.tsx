import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
                {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">View Repository</a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        </div>
    );
};

export default ProjectCard;