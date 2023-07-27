var allprouducts = document.querySelectorAll(".item h3")
var cart = document.querySelector(".container-2")
var btn = document.querySelector(".btn1")
var total = document.querySelector(".total")
var price = 0
allprouducts.forEach(function(item){
    item.onclick = function(){
        cart.style.display="block"
        cart.innerHTML += item.textContent + "-"
        price += +(item.getAttribute("price"))
        if (cart.innerHTML != ""){
            btn.style.display = "inline-block";
        }
    }
})

btn.onclick = function(){
    total.style.display="inline-block"
    total.innerHTML = price
}