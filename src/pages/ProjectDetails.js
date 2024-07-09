// src/pages/ProjectDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  // Aquí puedes agregar lógica para obtener detalles del proyecto por ID

  return (
    <div>
      <h1>Detalles del Proyecto {id}</h1>
      <p>Más información sobre el proyecto {id}...</p>
    </div>
  );
}

export default ProjectDetails;
