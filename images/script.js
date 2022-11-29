const navBtn = document.querySelector(".btn"),
header = document.querySelector("header"),
menu = document.querySelector(".menu")
navBtn.addEventListener("click", function(){
    header.classList.toggle("hight")
    menu.classList.toggle('fa-xmark')
})