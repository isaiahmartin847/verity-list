const tomatoContainer = document.getElementById("tomato-container")

console.log("hello")


const objects = [
    {
        title: "new Girl",
        size: "4-6oz",
        potColor: "NA",
        daysToMaturity: 62,
        description: "slicing tomato",
        price: 3.50,
        id: 1,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/slicing-tomatoes/new-girl-organic-f1-tomato-seed-2412G.html"
    }, 
    {
        title: "Early Girl",
        size: "NA",
        potColor: "black",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: 3.50,
        id: 2,
        url: "https://www.tomatodirt.com/early-girl-tomato.html",
    },
    {
        title: "Cosmonaut Volkov",
        size: "8-12",
        potColor: "Baby Blue",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: 3.50,
        id: 3,
        url: "https://www.fedcoseeds.com/seeds/cosmonaut-volkov-organic-slicing-tomato-4038"
    },
    {
        title: "Pruden's Purple",
        size: "12-16",
        potColor: "NA",
        daysToMaturity: 72,
        description: "slicing tomato",
        price: 3.50,
        id: 4,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/prudens-purple-organic-tomato-seed-712.html"
    },
    {
        title: "Bobcat hybrid",
        size: "NA",
        potColor: "Pale Green Pots",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: 3.50,
        id: 5,
        url: "https://territorialseed.com/products/tomato-bobcat" 
    }


]


objects.forEach((item) => {
    tomatoContainer.innerHTML += `
    <div>
        <h3>name:${item.title}</h3>
        <div">
            <p>${item.description}</p>
            <button value="${item.url}"type="button">More</button>
            <button value="${item.id}">Add to cart</button>
        </div>
    </div>
    `
})



const logBtnValue = (btnVal) => {
    console.log(btnVal.value)
}