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

console.log(beastmode.kæledyr.type);
beastmode.hobbier.forEach(function(hobby){
    console.log(hobby)
});

console.log("Opgave 2 færdig");


// Opgave 3