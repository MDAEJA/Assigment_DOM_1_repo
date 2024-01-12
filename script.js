let container_html = document.getElementById("container")
// create a div
let containerDiv = document.createElement("div");
containerDiv.classList.add("containerDiv");
container_html.appendChild(containerDiv);
containerDiv.innerText = `Hello, I'm a div`;
// containerDiv.style.fontSize = "18px";