// src/pages/CV.js

import React from 'react';

function CV() {
  return (
    <div>
      <h1>Mi CV</h1>
      <button href={process.env.PUBLIC_URL+"/pdf/cv_saul_ivars_tabernero.pdf"} download>Descargar CV</button>
      <embed src={process.env.PUBLIC_URL+"/pdf/cv_saul_ivars_tabernero.pdf"} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default CV;
