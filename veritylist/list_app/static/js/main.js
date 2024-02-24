const tomatoContainer = document.getElementById("tomato-container")
const listItemContainer = document.getElementById("list-container")
const listBtn = document.getElementById("list-btn")
const total = document.getElementById("tital")



const tomatoPrice = 3.50





const objects = [
    {
        title: "new Girl",
        size: "4-6oz",
        potColor: "NA",
        daysToMaturity: 62,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 1,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/slicing-tomatoes/new-girl-organic-f1-tomato-seed-2412G.html"
    }, 
    {
        title: "Early Girl",
        size: "NA",
        potColor: "black",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 2,
        url: "https://www.tomatodirt.com/early-girl-tomato.html",
    },
    {
        title: "Cosmonaut Volkov",
        size: "8-12",
        potColor: "Baby Blue",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 3,
        url: "https://www.fedcoseeds.com/seeds/cosmonaut-volkov-organic-slicing-tomato-4038"
    },
    {
        title: "Pruden's Purple",
        size: "12-16",
        potColor: "NA",
        daysToMaturity: 72,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 4,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/prudens-purple-organic-tomato-seed-712.html"
    },
    {
        title: "Bobcat hybrid",
        size: "NA",
        potColor: "Pale Green Pots",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 5,
        url: "https://territorialseed.com/products/tomato-bobcat" 
    }, 
    {
        title: "Green Zebra",
        size: "4-5",
        potColor: "Green",
        daysToMaturity: 77,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 5,
        url: "https://fedcoseeds.com/seeds/green-zebra-organic-slicing-tomato-4057"
    },
    {
        title: "Moskvich",
        size: "4-6",
        potColor: "NA",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 6,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/moskvich-organic-tomato-seed-756.html"
    },
    {
        title: "Pink Berkeley Tie-Dye",
        size: "8-9",
        potColor: "Red solo square",
        daysToMaturity: 68,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 7,
        url: "https://www.fedcoseeds.com/seeds/pink-berkeley-tie-dye-organic-slicing-tomato-4041"
    },
    {
        title: "Black Krim",
        size: "12-18",
        potColor: "Teal",
        daysToMaturity: 80,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 8,
        url: "https://fedcoseeds.com/seeds/black-krim-organic-slicing-tomato-4061"
    },
    {
        title: "Premio",
        size: "3-4",
        potColor: "Yellow",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: tomatoPrice,
        id: 9,
        url: "https://www.fedcoseeds.com/seeds/premio-slicing-tomato-4211"
    }


]

let listItems = []

objects.forEach((item) => {
    tomatoContainer.innerHTML += `
    <div class="item-div">
        <h3>Name: ${item.title}</h3>
        <div">
            <ul>
                <li>Fruit size: ${item.size}oz</li>
                <li>Pot Color: ${item.potColor}</li>
                <li>Days to maturity: ${item.daysToMaturity}</li>
                <li>Price: $${item.price}0</li>
            </ul>
            <button class="add-to-list-btn" id="T-${item.id}" onclick="addToList('${item.title}')">Add to list</button>
            <button class="more-btn" onclick="goToMore('${item.url}')" type="button">More</button>
        </div>
    </div>
    `
})


const addToList = (id) => {
    listItems.push(id)
    if (listItems.length > 5){
        console.log(listItems)
    }
}

const countList = () => {
    const itemCount = {}
    listItems.forEach((x) => {
    itemCount[x] = (itemCount[x] || 0) + 1
    })
    console.log(itemCount)
    return itemCount
}


const displayListOfItems = () => {
    obj = countList()
    listItemContainer.innerHTML = '';

    Object.entries(obj).forEach(([key, value]) => {
        listItemContainer.innerHTML += `
            <div class="item-div">
                <h2 class="list-name">Name: ${key}</h2>
                <h3 class="list-count">Count: ${value}</h3>
                <button class="list-remove-btn" onclick="removeAll('${key}')">remove all</button>
            </div>
        `

    })

}

const goToList = () => {
    tomatoContainer.classList.toggle("hidden");
    listItemContainer.classList.toggle("hidden")


    if (listBtn.textContent === "Go to list"){
        listBtn.innerText = "Go to plant index"
        displayListOfItems()
    } else {
        listBtn.innerText = "Go to list"
    }
}

const goToMore = (url) => {
    window.open(url)
}
const removeAll = (key) => {
    listItems = listItems.filter(item => item !== key)
    displayListOfItems()
}


listBtn.addEventListener("click", goToList)