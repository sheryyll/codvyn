const paragraph = document.querySelector("p");
const button = document.querySelector("button");
const box = document.querySelector("div");

paragraph.textContent = "This paragraph text was changed using JavaScript.";

box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.marginTop = "10px";
box.style.width = "250px";

button.addEventListener("click", function () {
    const newPara = document.createElement("p");
    newPara.textContent = "New paragraph added on button click.";
    box.appendChild(newPara);
});
