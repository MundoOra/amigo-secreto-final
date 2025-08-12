let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";
    
  for (let indiceAmigos = 0; indiceAmigos < amigos.length; indiceAmigos++) {
    const element = amigos[indiceAmigos];
    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `El amigo secreto es: ${amigos[indiceAmigo]} `;
  }
}