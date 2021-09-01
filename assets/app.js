let harmburger = document.querySelector(".harmburgerMenu");
let navList = document.querySelector(".navList");
let navLinks = document.querySelectorAll(".navList li a")
let header = document.querySelector("header");

navLinks = [...navLinks]

function showMenu(){
  if(navList.classList.contains("show")){
    navList.classList.remove("show")
    header.style.boxShadow = "0px 1px 15px 5px #008DD6";
  }else{
    header.style.boxShadow = "none";
    navList.classList.add("show");
  }
}

harmburger.addEventListener("click",showMenu);

navLinks.forEach((link)=>{
  link.addEventListener("click",showMenu)
})