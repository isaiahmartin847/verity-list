const tomatoContainer = document.getElementById("tomato-container")

console.log("hello")


const objects = [
    {
        name: "new Girl",
        description: "the New Girl is a steak tomato",
        price: 3.50,
        id: 1,
        url: "new Girl URL"
    }, 
    {
        name: "Early Girl",
        description: "the early girl is a steack tomato",
        price: 3.50,
        id: 2,
        url: "Early girl",

    }
]


objects.forEach((item) => {
    tomatoContainer.innerHTML += `
    <div>
        <h3>${item.name}</h3>
        <div">
            <p>${item.description}</p>
            <button type="button">More</button>
            <button>Add to cart</button>
        </div>
    </div>
    `
})