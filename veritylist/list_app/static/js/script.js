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
        description: "the early girl is a steack tomato",
        price: 3.50,
        id: 2,
        url: "https://www.tomatodirt.com/early-girl-tomato.html",
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