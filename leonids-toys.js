const ninjaTurtles = [{
    id: 1,
    name: "Leonardo",
    weapon: "A Sword",
    color: "Blue",
    price: 10.99
},
{
    id: 2,
    name: "Donatello",
    weapon: "A Staff",
    color: "Purple",
    price: 9.99
},
{
    id: 3,
    name: "Michaelangelo",
    weapon: "Nunchucks",
    color: "Orange",
    price: 8.99
}]

const newNinja = {
    id: 4,
    name: "Raphael",
    weapon: "Twin Sai",
    color: "Red",
    price: 7.99
}

const masterSplinter= {
    id: 5,
    name: "Master Splinter",
    weapon: "These Hands",
    color: "Grey",
    price: 6.99
}
ninjaTurtles.push(newNinja);
ninjaTurtles.push(masterSplinter);
const ninjaToFind = 3;
// console.log(ninjaTurtles);
// for (const ninja of ninjaTurtles) {
//     if (ninja.id === ninjaToFind) {
//         ninja.price = ninja.price + .05;
//         console.log(`The ${ninja.color} ${ninja.name} uses ${ninja.weapon} to fight crime in NYC.
//         It costs $${ninja.price}.`);}

// }
const addNinjaToInventory = (ninjaObject) => {
    const lastIndex = ninjaTurtles.length - 1
    const currentLastNinja= ninjaTurtles[lastIndex]
    const maxId = currentLastNinja.id
    const idForNewNinja = maxId + 1

    ninjaObject.id = idForNewNinja
    ninjaTurtles.push(ninjaObject)
}
addNinjaToInventory({
    name: "The Krang",
    weapon: "Laser Eyes",
    color: "Black",
    price: 7.99
})
console.log(ninjaTurtles)