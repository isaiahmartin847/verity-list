const tomatoContainer = document.getElementById("plant-container")

console.log("hello")


const objects = [
    {
        name: "new Girl",
        description: "the New Girl is a steak tomato",
        price: 3.50,
        id: 1
    }, 
    {
        name: "Early Girl",
        description: "the early girl is a steack tomato",
        price: 3.50,
        id: 2

    }
]


objects.forEach((item) => {
    tomatoContainer.innerHTML += `
    <h2>${item.name}</h2>
    `
})