const submitAll = document.getElementById('envoyer_form')
const deleteAll = document.getElementById('effacer-form')
deleteAll.onclick = deleteAllF;
submitAll.onclick = submitAllF;
function deleteAllF() {
    localStorage.clear()
    document.getElementById('droite-section').innerHTML = ""
}
function submitAllF(event) {
    let chaineForm = document.getElementById("multiple-textarea").value
    localStorage.setItem('arrayElement',chaineForm)
    afficherElement()
    afficherSelection()
    // For this example, don't actually submit the form
    event.preventDefault();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
async function afficherSelection() {
    let arrayElements = document.getElementsByClassName("mini")
    let equipeInput = document.querySelector('input[name="equipe-radio"]:checked').value
    if (equipeInput=="0") {
        for (let i = 0; i < arrayElements.length; i++) {
            await new Promise(r => setTimeout(r, 150));
            if (i==0) {
                arrayElements[i].style.background = "red"
            }else{
                arrayElements[i-1].style.background = "cornsilk"
                arrayElements[i].style.background = "red"
            } 
        }
        await new Promise(r => setTimeout(r, 150));
        arrayElements[arrayElements.length-1].style.background = "cornsilk"
        arrayElements[getRandomInt(arrayElements.length-1)].style.background = "blue"
    }else{
        let nombreEquipeInput = document.getElementById("nombre-equipe-input").value
        let liste = melangerArray(localStorage.getItem('arrayElement').split(','))
        let listeSliced = sliceArray(liste,nombreEquipeInput)
        document.getElementById('droite-section').innerHTML = ""
        for (let i = 0; i < listeSliced.length; i++) {
            const miniListe = listeSliced[i];
            p = document.createElement("p")
            p.setAttribute("class","mini")
            p.innerHTML = "Equipe n°"+(i+1)
            document.getElementById('droite-section').append(p)
            alert(miniListe)
            miniListe.forEach(element => {
                alert("aaaa")
                pa = document.createElement("p")
                pa.setAttribute("class","mini")
                pa.innerHTML = element
                document.getElementById('droite-section').append(pa) 
            }); 
            
        }
        for (const miniArray of listeSliced) {
            alert(miniArray)

/*             miniArray.forEach(element => {
                pa = document.createElement("p")
                pa.setAttribute("class","mini")
                pa.innerHTML = element
                document.getElementById('droite-section').append(p) 
            }); */
        }
    }
    
}
function melangerArray(arr) {
    let newArray = arr.sort(() => Math.random() - 0.5)
    return newArray
}
function sliceArray(array,nombre) {
    const slicedArray = []
    for (let i = 0; i < array.length; i+=nombre) {
        const miniArray = array.slice(i,(i+nombre));
        slicedArray.push(miniArray)
    }
    return slicedArray
}
function afficherElement() {
    if (localStorage.getItem('arrayElement')!=null){
        const arrayChaine = localStorage.getItem('arrayElement').split(',')
        arrayChaine.forEach(element => {
            p = document.createElement("p")
            p.setAttribute("class","mini")
            p.innerHTML = element
            document.getElementById('droite-section').append(p)          
        });
    }
}