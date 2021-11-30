import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App(){
  return(
    <div className="mainDiv">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Outils</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
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
