const largTomatoContainer = document.getElementById("larg-tomato-container")
const smallTomatoContainer = document.getElementById("small-tomatoes")
const peppersContainer = document.getElementById("peppers")
const indexDiv = document.getElementById("index-div")
const listItemContainer = document.getElementById("list-container")
const listBtn = document.getElementById("list-btn")
const total = document.getElementById("tital")


const largePlantsPrice = 3.50
let cartItems = []


const saveAndUpdateCart = () => {
    console.log("update cart")
    if(!localStorage.getItem("cart")){
        const cartStr = JSON.stringify(cartItems)
        localStorage.setItem("cart", cartStr)
        cartItems = []
    } else {
        const cartArr = JSON.parse(localStorage.getItem("cart"))
        cartItems.forEach(item => cartArr.push(item))
        const cartArrStr = JSON.stringify(cartArr)
        localStorage.setItem("cart", cartArrStr)
        cartItems = []
    }
    
}

const returnCartArr = () => {
    saveAndUpdateCart()
    return JSON.parse(localStorage.getItem("cart"))
}




// rename this to the slicing tomatos
const largTomatoesObj = [
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

const smallTomatoesObj = [
    {
        title: "Large Red Cherry",
        size: "NA",
        potColor: "Red Ruffled",
        daysToMaturity: 72,
        description: "NA",
        price: largePlantsPrice,
        id: 23,
        url: "https://www.totallytomato.com/product/T00424/82"
    },
    {
        title: "Pink Princess",
        size: "NA",
        potColor: "Pink",
        daysToMaturity: 62,
        description: "NA",
        price: largePlantsPrice,
        id: 24,
        url: "https://fedcoseeds.com/seeds/pink-princess-gene-pool-eco-small-fruited-tomato-4107"
    },
    {
        title: "Fargo Yellow Pear",
        size: "NA",
        potColor: "Black Square",
        daysToMaturity: 75,
        description: "na",
        price: largePlantsPrice,
        id: 25,
        url: "https://fedcoseeds.com/seeds/search?search=Fargo"
    },
    {
        title: "Sun Gold Yellow",
        size: "Na",
        potColor: "Blue",
        daysToMaturity: 57,
        description: "NA",
        price: largePlantsPrice,
        id: 26,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/cherry-tomatoes/sun-gold-f1-tomato-seed-770.html#q=sun%2Bgold&lang=en_US&start=1"
    },
    {
        title: "San Marzano II",
        size: "NA",
        potColor: "Red Standard",
        daysToMaturity: 78,
        description: "NA",
        price: largePlantsPrice,
        id: 27,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/san-marzano-ii-organic-tomato-seed-3405G.html#q=San%2BMarzano&lang=en_US&start=1"
    },
    {
        title: "Black Cherry",
        size: "NA",
        potColor: "Orange",
        daysToMaturity: 70,
        description: "NA",
        price: largePlantsPrice,
        id: 28,
        url: "https://www.fedcoseeds.com/seeds/black-cherry-organic-small-fruited-tomato-4115"
    },
    {
        title: "Juliet",
        size: 2,
        potColor: "Olive Green",
        daysToMaturity: 60,
        description: "NA",
        price: largePlantsPrice,
        id: 29,
        url: "https://fedcoseeds.com/seeds/juliet-small-fruited-tomato-4264"
    },
    {
        title: "Honeydrop",
        size: "NA",
        potColor: "Green Ruffled",
        daysToMaturity: 62,
        description: "NA",
        price: largePlantsPrice,
        id: 30,
        url: "https://fedcoseeds.com/seeds/honeydrop-organic-small-fruited-tomato-4106"
    },
    {
        title: "Tropical Sunset",
        size: "NA",
        potColor: "NA",
        daysToMaturity: 65,
        description: "NA",
        price: largePlantsPrice,
        id: 31,
        url: "https://fedcoseeds.com/seeds/tropical-sunset-organic-small-fruited-tomato-4035"
    },
    {
        title: "Japanese Black Trifele",
        size: 5,
        potColor: "Purple",
        daysToMaturity: 74,
        description: "NA",
        price: largePlantsPrice,
        id: 32,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/japanese-black-trifele-organic-tomato-seed-2795G.html#q=Japanese%2BBlack&lang=en_US&start=1"
    }

]

const peppersObj = [
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



const otherGardenPlants = [

]





listIndex = (obj, containerName) => {
    obj.forEach((item) => {
        containerName.innerHTML += `
        <div class="item-div">
            <h2>Name: ${item.title}</h2>
            <div">
                <ul>
                    <li class="list-items">Fruit size: ${item.size}oz</li>
                    <li class="list-items">Pot Color: ${item.potColor}</li>
                    <li class="list-items">Days to maturity: ${item.daysToMaturity} days</li>
                    <li class="list-items">Price: $${item.price}0</li>
                </ul>
                <button class="add-to-cart-btn" id="T-${item.id}" onclick="addToList('${item.title}')">Add to cart</button>
                <button class="about-btn" onclick="goToAbout('${item.url}')" type="button">About</button>
            </div>
        </div>
        `
    })
} 




const addToList = (id) => {
    cartItems.push(id)
}

const countList = () => {
    let cart = returnCartArr()
    console.log(`cart = ${cart}`)
    const itemCount = {}
    cart.forEach(item => itemCount[item] = (itemCount[item] || 0) + 1)
    console.log(`item count = ${itemCount}`)
    return itemCount
}


const displayCart = () => {
    //here save the cart items and pass the value into the countList function
    obj = countList()
    saveAndUpdateCart()
    listItemContainer.innerHTML = `
    <h1 class="title top-title">Items in cart</h1>
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

// you may need to wrap all the index things in one div to toggle them 
const goToCart = () => {
    indexDiv.classList.toggle("hidden");
    listItemContainer.classList.toggle("hidden")

    if (listBtn.textContent === "Go to cart"){
        listBtn.innerText = "Go to plant index"
        displayCart()
    } else {
        listBtn.innerText = "Go to cart"
    }
}

const goToAbout = (url) => {
    window.open(url)
}
const removeAll = (key) => {
    cartItems = cartItems.filter(item => item !== key)
    displayCart()
}

const main = () => {
    listIndex(largTomatoesObj, largTomatoContainer)
    listIndex(smallTomatoesObj, smallTomatoContainer)
    listIndex(peppersObj, peppersContainer)
}



listBtn.addEventListener("click", goToCart)

main()
returnCartArr()
