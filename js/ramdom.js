const form = document.getElementById('multiple-element-form')
form.onsubmit = submit
function submit(event) {
    let chaineForm = document.getElementById("multiple-textarea").value
    localStorage.setItem('arrayElement',chaineForm)
    afficherElement()
    console.log(localStorage.getItem('arrayElement'))
    // For this example, don't actually submit the form
    event.preventDefault();
  }
function afficherElement() {
    if (localStorage.getItem('arrayElement')!=null){
        const arrayChaine = localStorage.getItem('arrayElement').split(',')
        alert(arrayChaine)
        const arraymac = ['a','b','c','d']
        alert(arraymac)
        arraymac.forEach(element => {
            p = document.createElement("p")
            p.setAttribute("class","mini")
            p.innerHTML = element
            document.getElementById('droite-section').append(p)
        });
    }
}