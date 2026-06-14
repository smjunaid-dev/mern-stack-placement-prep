function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(name === "" || age === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    let studentList = document.getElementById("studentList");

    let card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <h2>${name}</h2>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();
    });

    studentList.appendChild(card);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}