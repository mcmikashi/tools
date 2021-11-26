import React from 'react';
import FormulaireRandom from "../FormulaireRandom/FormulaireRandom"
function App(){
  return(
    <div className="container-fluid">
      <div>
        <h2 className="text-center">Creation d'equipe ou de selection d'une personne aléatoirement</h2>
      </div>
      <FormulaireRandom/>
    </div>
  );
}

export default App;
