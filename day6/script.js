//element selection
const paragraph = document.querySelector("#mainText"); //selecting first paragraph using id of the p tag 
const button = document.querySelector("#addBtn"); //selecting the button using addBtn id
const box = document.querySelector("#container"); //selecting the target div using container

//guard clause
if (!paragraph || !button || !box) return;

//chaning the text content of the selected paragraph
paragraph.textContent = "This paragraph text was changed using JavaScript.";

//adding grouped styles
box.style.cssText = `
  background-color: lightblue; 
  padding: 10px;
  margin-top: 10px;
  width: 250px;
`; // adds bg colour as light blue, 10px padding, 10 px margin top, 250px width

//event handling using EventListener
button.addEventListener("click", function () {

    // new paragraph element
    const newPara = document.createElement("p");

    // adding text content to new paragraph
    newPara.textContent = "New paragraph added on button click.";

    //  adding class 
    newPara.classList.add("item");

    // appending to container
    box.appendChild(newPara);
});
