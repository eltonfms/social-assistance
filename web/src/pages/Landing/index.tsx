import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Landing() {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="logo landing-logo">
          <h2 className="landing-title">
            Assistência<br />Social<br />App
          </h2>          
        </div>
        <div className="landing-actions">
          <div className="landing-location">
            <strong>Belo Horizonte</strong><br />
            Minas Gerais
          </div>
          <Link className="landing-actions-item" to="/app">
            Acessar
          </Link>
        </div>
        <div className="landing-footer">
          <p>Copyright © 2020. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Landing;