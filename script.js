document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="deleteBtn">X</button>
    `;

    // Toggle task complete
    li.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") {
            this.classList.toggle("completed");
        }
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = ""; // clear input box
}
