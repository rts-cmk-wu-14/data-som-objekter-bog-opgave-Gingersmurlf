let person = {
    fornavn: "Mikkel",
    efternavn: "Taco",
    alder: 17,
    hjemby: "Kundby",
    fødselsdag: new Date("2007-02-19")
}

console.log(person.fornavn);
console.log(person.efternavn);

console.log(person.fødselsdag);

console.log(person["hjemby"]);

console.log("Opgave 1 færdig");

// Opgave 2

let beastmode = {
    fornavn: "Mikkel",
    efternavn: "Taco",
    alder: 17,
    hjemby: "Kundby",
    fødselsdag: new Date("2007-02-19"),
    sigma: false,
    hobbier: ["stjæle", "looksmaxing", "cs2"],
    kæledyr: {
        type: "hund",
        name: "vovse"
    }
}

console.log(beastmode.sigma);
console.log(beastmode.kæledyr.type);
beastmode.hobbier.forEach(function (hobby) {
    console.log(hobby)
});

console.log("Opgave 2 færdig");


// Opgave 3

let divver = document.createElement("div")

divver.textContent = "dette er en ny div"

document.body.append(divver)

let elever = [
    {name: "manse", age: "17", course: "webudvilker"},
    {name: "lukas", age: "18", course: "freakyville"},
    {name: "orizi", age: "21", course: "gammel mand"}
]

let eleverListeDiv = document.querySelector(".elev-liste")

elever.forEach(function(elev){
    let elevDiv = document.createElement("div")
    elevDiv.classList.add("student")
    elevDiv.textContent = elev.name + ', Alder ' + elev.age + ', Uddannelse: ' + elev.course
    eleverListeDiv.append(elevDiv)
})

