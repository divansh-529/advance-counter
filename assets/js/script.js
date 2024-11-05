let numberElement = document.querySelector("#number");
let addButton = document.querySelector("#add");
let save = document.querySelector("#save");
let prev = document.querySelector("#prev");
addButton.addEventListener("click", function () {
    numberElement.innerHTML = +numberElement.innerHTML + 1;
});

save.addEventListener("click", function () {
    let currentValue = numberElement.innerHTML;
    let newValueElement = document.createElement("p");
    newValueElement.textContent = currentValue;
    prev.appendChild(newValueElement);
    numberElement.innerHTML = 0;
}
);


let savedTexts = [];
function saveText() {
    const currentText = document.getElementById("textInput").value;
    savedTexts.push(currentText);
    const displayText = savedTexts.map((text, index) => `
                <span>${text} <button onclick="deleteText(${index})">X</button></span>
            `).join(", ");
    document.getElementById("displayedText").innerHTML = displayText;

    document.getElementById("textInput").value = "";
}
function deleteText(index) {
    savedTexts.splice(index, 1);
    const displayText = savedTexts.map((text, index) => `
                <span>${text} <button onclick="deleteText(${index})">X</button></span>
            `).join(", ");
    document.getElementById("displayedText").innerHTML = displayText;
}