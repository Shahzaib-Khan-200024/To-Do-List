const inputArea = document.getElementById("InputArea"); // Corrected ID
const ListContainer = document.getElementById("List-container");

function addTask() {
    if (inputArea.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        ListContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        
        ListContainer.scrollTo({ top: ListContainer.scrollHeight, behavior: "smooth" });
    }
    inputArea.value = '';
    saveData();
}

inputArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

ListContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected spelling of classList
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showData() {
    ListContainer.innerHTML = localStorage.getItem("data") || ""; // Handles null values
}

showData();
