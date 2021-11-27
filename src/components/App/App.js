import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App(){
  return(
    <div className="mainDiv">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Outils</a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="rtop" className="nav-link">RTOP</Link>
                <Link to="calculatrice" className="nav-link">Calculatrice</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
            <Outlet />
        </div>
    </div>
  );
}

export default App;
