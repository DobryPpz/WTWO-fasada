const kobus = document.getElementById("kobus");
const krajka = document.getElementById("krajka");
const sasak = document.getElementById("sasak");
const contact = document.getElementById("contact");
const plan = document.getElementById("plan");

kobus.addEventListener("click",e => {
    fetch("http://localhost:8000/kobus")
    .then(response => response.json())
    .then(data => {
        contact.value = data["contact"];
        plan.value = data["plan"];
    });
});

krajka.addEventListener("click",e => {
    fetch("http://localhost:8000/krajka")
    .then(response => response.json())
    .then(data => {
        contact.value = data["contact"];
        plan.value = data["plan"];
    });
});

sasak.addEventListener("click",e => {
    fetch("http://localhost:8000/sasak")
    .then(response => response.json())
    .then(data => {
        contact.value = data["contact"];
        plan.value = data["plan"];
    });
});