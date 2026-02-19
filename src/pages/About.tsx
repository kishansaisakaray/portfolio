import React from 'react';

const About: React.FC = () => {
    const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'PostgreSQL', 'MongoDB', 'Express', 'REST APIs', 'Vite'];
    
    return (
        <div className="container">
            <div className="about">
                <h1>👋 About Me</h1>
                <p>
                    I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. 
                    With expertise in modern web technologies, I craft digital solutions that solve real-world problems and delight users.
                </p>
                
                <h2>🎯 What I Do</h2>
                <p>
                    I specialize in building responsive, user-friendly web applications using React and Node.js. 
                    I'm passionate about clean code, best practices, and continuous learning. Whether it's frontend development, 
                    backend integration, or full-stack solutions, I bring dedication and creativity to every project.
                </p>

                <h2>💼 Technical Skills</h2>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>

                <h2>🎓 Background</h2>
                <p>
                    I have a strong foundation in computer science and have worked on diverse projects ranging from 
                    e-commerce platforms to real-time applications. I'm always eager to take on new challenges and expand 
                    my skill set with emerging technologies. My journey in tech has taught me the importance of 
                    collaboration, attention to detail, and user-centric design.
                </p>

                <h2>🌟 Beyond Code</h2>
                <p>
                    When I'm not coding, you'll find me exploring new tech trends, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in the power of technology to make a positive impact.
                </p>
            </div>
        </div>
    );
};

export default About;