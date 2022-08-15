let menu = document.querySelector(".menu")
let menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function(){
    menu.classList.toggle("active-menu")
})


let nfts = [
    {
        img : "images/Card-1.jpg",
        title : "#1234",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-1",
        price : 3
    },
    {
        img : "images/Card-2.jpg",
        title : "#12E34",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-2",
        price : 2
    },
    {
        img : "images/Card-3.jpg",
        title : "#123E",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-3",
        price : 2.136
    },
    {
        img : "images/Card-4.jpg",
        title : "#E",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-4",
        price : 3.92
    },
    {
        img : "images/Card-5.jpg",
        title : "#102938",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-5",
        price : 4
    },
    {
        img : "images/Card-6.jpg",
        title : "#6A9",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-6",
        price : 2.136
    },
    {
        img : "images/Card-7.jpg",
        title : "#6090",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-7",
        price : 6.9
    },
    {
        img : "images/Card-8.jpg",
        title : "Equilibrium #3429",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
        name : "Name-8",
        price : 10
    }
]

let cards = document.querySelector(".cards")

window.addEventListener("DOMContentLoaded", function(){
    let card = nfts.map(function(item){

        return `<div class="card">
                <img src="${item.img}">

                <div class="img-overlay"> <!--for the blue hover effect-->
                <img src="images/icon-view.svg" alt="eye icon">
                </div>

                <h2>${item.title}</h2>
                <p>${item.discription}</p>

                <div class="container">
                <div class="creator">
                    <img src="images/image-avatar.png" alt="creator">
                    <div>${item.name}</div>
                </div>
                <div class="price">
                    <img src="images/icon-ethereum.svg" alt="eth icon">
                    <div>${item.price} ETH</div>
                </div>
                </div>
                </div>`
    })
    card = card.join("")
    // console.log(card);
    cards.innerHTML = card
})



let gallary = [
    {
        img : "images/1.jpg"
    },
    {
        img : "images/2.jpg"
    },
    {
        img : "images/3.jpg"
    },
    {
        img : "images/4.jpg"
    },
    {
        img : "images/5.jpg"
    },
    {
        img : "images/6.jpg"
    },
    {
        img : "images/7.jpg"
    },
    {
        img : "images/8.jpg"
    },
    {
        img : "images/9.jpg"
    },
    {
        img : "images/10.jpg"
    },
    {
        img : "images/11.jpg"
    },
    {
        img : "images/12.jpg"
    },
    {
        img : "images/13.jpg"
    },
    {
        img : "images/14.jpg"
    },
    {
        img : "images/15.jpg"
    },
    {
        img : "images/16.jpg"
    },
    {
        img : "images/17.jpg"
    },
    {
        img : "images/18.jpg"
    }
]

let gallaryContainer = document.querySelector(".gallary-container")

window.addEventListener("DOMContentLoaded", function(){
    let images = gallary.map(function(item){
        return `<img src="${item.img}">`
    })
    images = images.join("")
    gallaryContainer.innerHTML = images
})