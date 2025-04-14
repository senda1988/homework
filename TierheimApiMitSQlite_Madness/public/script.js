const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")

const tierart = document.getElementById("input_tierart")
const name = document.getElementById("input_name")
const krankheit = document.getElementById("input_krankheit")
const age = document.getElementById("input_age")
const gewicht = document.getElementById("input_gewicht")
const addAnimals = document.getElementById("button_add_animals")

const antwortFeld = document.getElementById("antwort_feld");


// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});

addAnimals.addEventListener("click", async () => {
    try {
        const requestBody = {
            tierart: tierart.value,
            name: name.value,
            krankheit: krankheit.value,
            age: age.value,
            gewicht: gewicht.value
        }


        fetch("http://localhost:3000/tiere", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
            .then(data => {
                antwortFeld.innerText = JSON.stringify(data);

            })

    } catch (err) {
        console.log("fehler bei fetch: " + err)
    }

})