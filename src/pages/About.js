import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'Unity', level: 8 },
    { name: 'C, C++', level: 9 },
    { name: 'HTML, CSS', level: 9 },
    { name: 'NodeJS', level: 7 },
    { name: 'NodeJS', level: 6 },
    { name: 'Express', level: 5 },
    { name: 'ReactJS', level: 5 },
    { name: 'Java', level: 6 },
    { name: 'Maya 3D', level: 9 },
    { name: 'PhotoShop', level: 8 },
    { name: '3D Printing', level: 7 },
    // Añade más skills según sea necesario
  ];
  
  return (
    <div className="about">
      <div className="summary">
        <img 
          src={process.env.PUBLIC_URL + '/images/profile.jpeg'} 
          alt="Profile" 
          className="profile-image" 
        />
        <h1>¡Hola!</h1>
        <h2>Soy Saul,</h2>
        <p>un ingeniero de software con una sólida formación en desarrollo de software, y con un background en animación 3D, modelado y desarrollo de videojuegos. Tengo experiencia en la resolución de problemas técnicos, configuración de sistemas y desarrollo de videojuegos. Apasionado por crear, ya sea en el ámbito tecnológico o durante mi tiempo libre, donde me gusta viajar y hacer deporte.</p>
      </div>
      <div className="skills-tools">
        <div className="skills">
          <h2>Habilidades</h2>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level * 10}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="tools">
          <h2>Contacto</h2>
          <ul>
            <li><a href='saulit25@gmail.com'>saulit25@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
