import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <h1>🚀 Welcome to My Portfolio</h1>
                <p>Full Stack Developer | React Enthusiast | Problem Solver</p>
                <p>Building amazing digital experiences one line of code at a time</p>
            </div>
            <div className="container">
                <h2>✨ Featured Projects</h2>
                <p>Here are some of my best work that showcase my skills and passion for development:</p>
                <div className="project-list">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;