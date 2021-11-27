import React, { useEffect, useState, createRef, createElement } from "react";

function FormulaireRandom() {
  const [arr, setArr] = useState([]);
  const [affcihage, setAffcihage] = useState([]);

  /* creation des references */
  let textareaListeNom = createRef();
  let inputNombreEquipe = createRef();
  let checkBoxEquipe = createRef();
  let btnLancer = createRef();
  let btnEffacer = createRef();
  let btnAjouter = createRef();
  let divAffichage = createRef();

  let listeElements = [];

  /* creation de la liste */

  let elementsSpan = arr.map((element, index) => (
    <li
      ref={(i) => listeElements.push(i)}
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center bgAnimationRed"
    >
      {element}
      <button
        className="ms-1 btn btn-sm btn-outline-danger"
        onClick={(e) => {
          effacerElementClick(e, index);
        }}
      >
        <i class="bi bi-trash"></i>
      </button>
    </li>
  ));
  let showList = createElement("ul", { className: "list-group" }, elementsSpan);

  /* fonction qui ajoute les élments du textrea dans la liste des éléments */
  function ajouterClick(e) {
    e.preventDefault();
    let newElments = textareaListeNom.current.value.split(",");
    newElments = newElments.filter((n) => n);
    let newArray = [...arr, ...newElments];
    setArr(newArray);
  }

  /* fonction qui delete tout la liste */
  function effacerClick(e) {
    e.preventDefault();
    setArr([]);
  }
  /* fonction qui delete tout la liste */
  function effacerElementClick(e, i) {
    e.preventDefault();
    setArr(arr.filter((value, index) => index !== i));
  }
  /* fonction chiffre aléatoire */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /*fonction qui melange la liste */
  function melangerArray(array) {
    let newArray = array.sort(() => Math.random() - 0.5);
    return newArray;
  }
  useEffect(() => {
    if (btnAjouter.current.disabled === true) {
      btnAjouter.current.disabled = false;
    }
    if (arr.length === 0) {
      btnEffacer.current.disabled = true;
      btnLancer.current.disabled = true;
    } else {
      btnEffacer.current.disabled = false;
      btnLancer.current.disabled = false;
    }
  });

  /* fonction rend disponible le nombre d'equipe */
  function changementEquipe() {
    if (checkBoxEquipe.current.checked === true) {
      inputNombreEquipe.current.disabled = false;
    } else {
      inputNombreEquipe.current.disabled = true;
    }
  }

  /* fonction qui découpe la liste*/
  function sliceArray(array, nombre) {
    nombre = parseInt(nombre);
    const slicedArray = [];
    for (let i = 0; i < array.length; i += nombre) {
      const miniArray = array.slice(i, i + nombre);
      slicedArray.push(miniArray);
    }
    return slicedArray;
  }
  async function animationAffichage() {
    for (let i = 0; i < arr.length; i++) {
      listeElements[i].className =
        "list-group-item d-flex justify-content-between align-items-center bg-danger";
      console.log(listeElements);
      if (i !== 0) {
        listeElements[i - 1].className =
          "list-group-item d-flex justify-content-between align-items-center";
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    listeElements[arr.length - 1].className =
      "list-group-item d-flex justify-content-between align-items-center";
  }
  async function ChoixRandom() {
    btnEffacer.current.disabled = true;
    btnLancer.current.disabled = true;
    btnAjouter.current.disabled = true;
    await animationAffichage();
    if (checkBoxEquipe.current.checked === true) {
      let mArray = melangerArray(arr);
      let nombreEquipe = inputNombreEquipe.current.value;
      let lastArray = sliceArray(mArray, nombreEquipe);
      let arrayAffichageRandom = [];
      for (let i = 0; i < lastArray.length; i++) {
        const arrayIn = lastArray[i];
        arrayAffichageRandom.push(
          createElement("p", { key: i }, "Equipe " + (i + 1) + " :")
        );
        let liListe = [];
        for (const element of arrayIn) {
          liListe.push(
            createElement(
              "li",
              { key: element, className: "list-group-item" },
              element
            )
          );
        }
        let listeEquipe = createElement(
          "ul",
          { className: "list-group", key: i },
          liListe
        );
        arrayAffichageRandom.push(listeEquipe);
      }
      setAffcihage(createElement("div", {}, arrayAffichageRandom));
    } else {
      /* creation de la liste */
      let bonIndex = getRandomInt(arr.length - 1);
      var elementsSpan = arr.map((element, index) => {
        let listeLiRandom = [];
        if (index === bonIndex) {
          listeLiRandom.push(
            <li key={index} className="list-group-item active">
              {element}
            </li>
          );
        } else {
          listeLiRandom.push(
            <li key={index} className="list-group-item">
              {element}
            </li>
          );
        }
        return listeLiRandom;
      });
      /* creation conteneur liste */
      setAffcihage(
        createElement("ul", { className: "list-group" }, elementsSpan)
      );
    }
  }
  return (
    <div className="row gap-4" data-testid="FormulaireRandom">
      <h2 className="text-center">Creation d'equipe ou de selection d'une personne aléatoirement</h2>
      <div className="col">
        <div className="p-3 border bg-light hauteurColone">
          {/* /formulaire/ */}
          <div className="mb-2">
            <label htmlFor="textareaListeNom" className="form-label">
              Ajout multiple (séparer par une virgule) :
            </label>
            <textarea
              ref={textareaListeNom}
              className="form-control"
              id="textareaListeNom"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="radioEquipes" className="form-label">
              Equipe :
            </label>
            <div>
              <div className="form-check form-check-inline">
                <div className="form-check form-switch">
                  <input
                    ref={checkBoxEquipe}
                    onChange={changementEquipe}
                    className="form-check-input"
                    type="checkbox"
                    id="checkBoxEquipe"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="inputNombreEquipe" className="form-label">
              Nombre de personnes par equipe :
            </label>
            <input
              ref={inputNombreEquipe}
              className="form-control"
              type="number"
              name="inputNombreEquipe"
              id="inputNombreEquipe"
              min="2"
              defaultValue="2"
              disabled
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              ref={btnAjouter}
              className="btn btn-outline-primary"
              onClick={ajouterClick}
            >
              Ajouter
            </button>
            <button
              ref={btnEffacer}
              className="btn btn-outline-danger"
              onClick={effacerClick}
            >
              Effacer
            </button>
            <button
              ref={btnLancer}
              className="btn btn-outline-success"
              onClick={ChoixRandom}
            >
              Lancer
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="p-3 border bg-light hauteurColone">{showList}</div>
      </div>
      <div className="col">
        <div ref={divAffichage} className="p-3 border bg-light hauteurColone">
          {affcihage}
        </div>
      </div>
    </div>
  );
}
export default FormulaireRandom;
