let hidden = document.querySelectorAll(".hidden")
let viewDetails = document.querySelectorAll(".viewDetails")
let item = document.getElementsByClassName("right-item")

for(let i = 0; i<viewDetails.length; i++){
    viewDetails[i].addEventListener("click", function(){
        hidden[i].classList.toggle("active")
        
        if(viewDetails[i].innerText === "View Details"){
            viewDetails[i].innerText = "Hide Details"
        } else{
            viewDetails[i].innerText = "View Details"
        }
    })
}