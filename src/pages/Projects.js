import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();
  const projectList = [
    { 
      id: 1, 
      name: 'TimeStepVR', 
      description: 'Juego de VR de puzles el cual consiste en usar tu propio cuerpo y clones tuyos para completar los puzles, hecho en grupo para un trabajo del grado universitario.', 
      image: '/images/timeStepVRtitle.jpg',
      technologies: ['Unity', 'VR'],
      link: "https://drive.google.com/file/d/1IykLI-P1OzS3IHkf0876XKo4vK11ufY_/view?usp=sharing"
    },
    { 
      id: 2, 
      name: 'Fluid Simulator', 
      description: 'Simulador de fluidos en C++ usando libreria OpenGL, con calculos fisicos en CPU y tambien en GPU mediante la implementación de CUDA.', 
      image: '/images/fluidTitle.jpg',
      technologies: ['C++', 'OpenGL', 'CUDA'],
      link: "https://drive.google.com/file/d/1RZdNjhMrqUNtLDjM8-JTLj3f5WL3JAxH/view?usp=sharing"
    },
    { 
      id: 3, 
      name: 'Guardian Arena VR', 
      description: 'Juego de acción VR , el cual nos sirvio para entender y aplicar los conocimientos adquiridos en la asignatura de Sistemas Inmersivos.', 
      image: '/images/guardianTitle.jpg',
      technologies: ['Unity', 'VR']
    },
    { 
      id: 4, 
      name: 'BioPlanet', 
      description: 'Uno de mis primeros juegos proyecto "Grandes", fue el trabajo final del modulo superior de SMR, en el cual me encargue de la dirección, toda la programación y muchas otras cosas.', 
      image: '/images/bioplanetTitle.png',
      technologies: ['Unity'],
      link: 'https://suli25.itch.io/bioplanet'
    },
    { 
      id: 5, 
      name: 'U-Activities', 
      description: 'Applicación web para creación y gestión de voluntariados para la universidad, con parte frontend y backend. Diploma a la "Mejor Aplicación" en la asignatura de "Proyectos" concedido por la propia U-TAD.', 
      image: '/images/placeholderTitle.jpg',
      technologies: ['NodeJS', 'Express','ReactJS']
    }
  ];

  const handleViewMore = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div>
      <h1>Proyectos</h1>
      <div className="projects">
        {projectList.map((project) => (
          <div key={project.id} className="project">
            <img src={process.env.PUBLIC_URL+project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p className="technologies">
              {project.technologies.join(', ')}
            </p>
            <p>{project.description}</p>
            {project.link ? (
              //<button onClick={() => handleViewMore(project.id)}>Ver más</button>
              <button onClick={() => window.open(project.link,'_blank')}>Ver más</button>
            ) : (
              <button disabled>Ver más</button>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
