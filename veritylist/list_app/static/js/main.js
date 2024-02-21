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
    <div class="text-container">
        <h3 class="plant-title">${item.name}</h3>
        <div class="about-obj">
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut maxime consequatur dolorem iste, aliquid hic itaque nisi! Atque inventore nisi distinctio enim aliquid ipsam corporis repellat deleniti aperiam, sit voluptas.</p>
            <button type="button">More</button>
            <button id="add-to-cart-btn">Add to cart</button>
        </div>
    </div>
    `
})