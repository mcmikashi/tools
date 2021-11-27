import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import App from './components/App/App'
import FormulaireRandom from './components/FormulaireRandom/FormulaireRandom'
import Calculatrice from  './components/Calculatrice/Calculatrice'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="rtop" element={<FormulaireRandom />} />
        <Route path="calculatrice" element={<Calculatrice />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
