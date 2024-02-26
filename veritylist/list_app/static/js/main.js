const tomatoContainer = document.getElementById("tomato-container")
const listItemContainer = document.getElementById("list-container")
const listBtn = document.getElementById("list-btn")
const total = document.getElementById("tital")



const largePlantsPrice = 3.50




// rename this to the slicing tomatos
const objects = [
    {
        title: "new Girl",
        size: "4-6",
        potColor: "NA",
        daysToMaturity: 62,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 1,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/slicing-tomatoes/new-girl-organic-f1-tomato-seed-2412G.html"
    }, 
    {
        title: "Early Girl",
        size: "NA",
        potColor: "black",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 2,
        url: "https://www.tomatodirt.com/early-girl-tomato.html",
    },
    {
        title: "Cosmonaut Volkov",
        size: "8-12",
        potColor: "Baby Blue",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 3,
        url: "https://www.fedcoseeds.com/seeds/cosmonaut-volkov-organic-slicing-tomato-4038"
    },
    {
        title: "Pruden's Purple",
        size: "12-16",
        potColor: "NA",
        daysToMaturity: 72,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 4,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/prudens-purple-organic-tomato-seed-712.html"
    },
    {
        title: "Bobcat hybrid",
        size: "NA",
        potColor: "Pale Green Pots",
        daysToMaturity: 65,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 5,
        url: "https://territorialseed.com/products/tomato-bobcat" 
    }, 
    {
        title: "Green Zebra",
        size: "4-5",
        potColor: "Green",
        daysToMaturity: 77,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 5,
        url: "https://fedcoseeds.com/seeds/green-zebra-organic-slicing-tomato-4057"
    },
    {
        title: "Moskvich",
        size: "4-6",
        potColor: "NA",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 6,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/moskvich-organic-tomato-seed-756.html"
    },
    {
        title: "Pink Berkeley Tie-Dye",
        size: "8-9",
        potColor: "Red solo square",
        daysToMaturity: 68,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 7,
        url: "https://www.fedcoseeds.com/seeds/pink-berkeley-tie-dye-organic-slicing-tomato-4041"
    },
    {
        title: "Black Krim",
        size: "12-18",
        potColor: "Teal",
        daysToMaturity: 80,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 8,
        url: "https://fedcoseeds.com/seeds/black-krim-organic-slicing-tomato-4061"
    },
    {
        title: "Premio",
        size: "3-4",
        potColor: "Yellow",
        daysToMaturity: 60,
        description: "slicing tomato",
        price: largePlantsPrice,
        id: 9,
        url: "https://www.fedcoseeds.com/seeds/premio-slicing-tomato-4211"
    }


]

const smallFuritedTomatoes = [

]

const peppers = [
    {
        title: "New Ace F1",
        size: "NA",
        potColor: "green",
        daysToMaturity: 65,
        description: "NA",
        price: largePlantsPrice,
        id: 10,
        url: "https://www.harrisseeds.com/products/01648-pepper-new-ace-f1?variant=35441433051208"
    },
    {
        title: "Nikita Hybrid",
        size: "NA",
        potColor: "Baby blue pots",
        daysToMaturity: 65,
        description: "NA",
        price: largePlantsPrice,
        id: 11,
        url: "https://tomatogrowers.com/products/nikita-hybrid?_pos=1&_sid=f337af698&_ss=r"
    },
    {
        title: "X3R Red Knight Hybrid",
        size: "NA",
        potColor: "Red Square",
        daysToMaturity: 67,
        description: "NA",
        price: largePlantsPrice,
        id: 12,
        url: "https://www.johnnyseeds.com/vegetables/peppers/sweet-bell-peppers/x3r-red-knight-f1-bell-pepper-seed-2309.html"
    },
    {
        title: "Purple Beauty",
        size: "NA",
        potColor: "Purple",
        daysToMaturity: 74,
        description: "NA",
        price: largePlantsPrice,
        id: 12,
        url: "https://fedcoseeds.com/seeds/purple-beauty-organic-sweet-bell-pepper-3723"
    },
    {
        title: "Anaheim",
        size: "NA",
        potColor: "Blue",
        daysToMaturity: 78,
        description: "NA",
        price: largePlantsPrice,
        id: 13,
        url: "https://www.fedcoseeds.com/seeds/anaheim-hot-pepper-3807"
    },
    {
        title: "Baron",
        size: "NA",
        potColor: "Pink",
        daysToMaturity: 75,
        description: "NA",
        price: largePlantsPrice,
        id: 14,
        url: "https://johnnyseeds.com/vegetables/peppers/hot-peppers/baron-f1-poblano-pepper-seed-3672.html"
    },
    {
        title: "Early Jalapeno",
        size: "NA",
        potColor: "Red Standard",
        daysToMaturity: 75,
        description: "NA",
        price: largePlantsPrice,
        id: 15,
        url: "https://www.fedcoseeds.com/seeds/early-jalapeno-hot-pepper-3834"
    },
    {
        title: "Czech Black Jalapeno",
        size: "NA",
        potColor: "Black",
        daysToMaturity: 65,
        description: "NA",
        price: largePlantsPrice,
        id: 16,
        url: "https://fedcoseeds.com/seeds/czech-black-organic-hot-pepper-3816"
    },
    {
        title: "Hidalgo Serrano",
        size: "NA",
        potColor: "Purple",
        daysToMaturity: 75,
        description: "NA",
        price: largePlantsPrice,
        id: 17,
        url: "https://www.fedcoseeds.com/seeds/search?item=3841"
    },
    {
        title: "Helios Hybrid",
        size: "NA",
        potColor: "Lime Green",
        daysToMaturity: 77,
        description: "NA",
        price: largePlantsPrice,
        id: 18,
        url: "https://www.fedcoseeds.com/seeds/search?item=3841"
    },
    {
        title: "Hungarian Hot Wax",
        size: "NA",
        potColor: "silver",
        daysToMaturity: 72,
        description: "NA",
        price: largePlantsPrice,
        id: 19,
        url: "https://www.johnnyseeds.com/vegetables/peppers/hot-peppers/hungarian-hot-wax-organic-pepper-seed-585G.html"
    },
    {
        title: "Thai Hot Pepper",
        size: "NA",
        potColor: "Gold",
        daysToMaturity: 82,
        description: "NA",
        price: largePlantsPrice,
        id: 20,
        url: "https://www.fedcoseeds.com/seeds/thai-hot-organic-hot-pepper-3860"
    },
    {
        title: "Goddess F1",
        size: "NA",
        potColor: "Yellow",
        daysToMaturity: 73,
        description: "NA",
        price: largePlantsPrice,
        id: 21,
        url: "https://www.johnnyseeds.com/vegetables/peppers/sweet-peppers/goddess-f1-banana-pepper-seed-3230.html"
    },
    {
        title: "Carmen",
        size: "NA",
        potColor: "Pastel purple",
        daysToMaturity: 70,
        description: "NA",
        price: largePlantsPrice,
        id: 22,
        url: "https://www.johnnyseeds.com/vegetables/peppers/sweet-peppers/goddess-f1-banana-pepper-seed-3230.html"
    }

]

const strawberry = [

]

const otherGardenPlants = [

]


let listItems = []

objects.forEach((item) => {
    tomatoContainer.innerHTML += `
    <div class="item-div">
        <h2>Name: ${item.title}</h2>
        <div">
            <ul>
                <li class="list-items">Fruit size: ${item.size}oz</li>
                <li class="list-items">Pot Color: ${item.potColor}</li>
                <li class="list-items">Days to maturity: ${item.daysToMaturity}</li>
                <li class="list-items">Price: $${item.price}0</li>
            </ul>
            <button class="add-to-cart-btn" id="T-${item.id}" onclick="addToList('${item.title}')">Add to cart</button>
            <button class="about-btn" onclick="goToAbout('${item.url}')" type="button">About</button>
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
    listItemContainer.innerHTML = `
    <h1 class="title">Items in cart</h1>
    `;
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


    if (listBtn.textContent === "Go to cart"){
        listBtn.innerText = "Go to plant index"
        displayListOfItems()
    } else {
        listBtn.innerText = "Go to cart"
    }
}

const goToAbout = (url) => {
    window.open(url)
}
const removeAll = (key) => {
    listItems = listItems.filter(item => item !== key)
    displayListOfItems()
}


listBtn.addEventListener("click", goToList)