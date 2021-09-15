let harmburger = document.querySelector(".harmburgerMenu");
let navList = document.querySelector(".navList");
let navLinks = document.querySelectorAll(".navList li a")
let header = document.querySelector("header");
let hiddenElements = document.querySelectorAll(".hide");
let mobileNavLinks = document.querySelectorAll(".navList a")
let greetingText= document.querySelector(".landPage ")
let desc = document.querySelector(".landPage ")
let credit = document.querySelector(".credit")
let body = document.querySelector("body")
hiddenElements = [...hiddenElements];
navLinks = [...navLinks]
mobileNavLinks = [...mobileNavLinks];

function showMenu(){
  if(navList.classList.contains("show")){
    navList.classList.remove("show")
    header.style.boxShadow = "0px 1px 3px 1px rgba(87,87,87,0.525)";
    harmburger.classList.remove("active");
    mobileNavLinks.forEach(navLink =>{
      navLink.classList.remove("slide")
    })
  }else{
    header.style.boxShadow = "none";
    navList.classList.add("show");
    harmburger.classList.add("active");
    mobileNavLinks.forEach(navLink =>{
      navLink.classList.add("slide");
      console.log(navLink);
    })
  }
}

harmburger.addEventListener("click",showMenu);

navLinks.forEach((link)=>{
  link.addEventListener("click",showMenu)
})



function debounce(func, wait = 10, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }



function scroll(){
   hiddenElements.forEach(element => {
    /*
    const scrollInAt = (window.scrollY + window.innerHeight) - element.height / 2;
    const elementBottom = element.offsetTop + element.height;
    const isHalfShown = scrollInAt > element.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    */
    const top = element.offsetTop + element.offsetHeight/2;
    const scrolled = window.scrollY + window.innerHeight;
    const elementBottom = element.offsetTop + element.offsetHeight;
    
    const atTop = scrolled > top;
    const notPassed = window.scrollY < elementBottom;
   // const scrolledIn = scrolled <
    
    
    if(atTop && notPassed){
      element.classList.remove("hide");
      element.classList.add("slide");
  }else{
      element.classList.add("hide");
      element.classList.remove("slide");
  }
});
}


/*
function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }
*/

function showGreeting(){
  greetingText.classList.add("slide");
  desc.classList.add("slide");
  body.style.display = "block";
}


window.addEventListener("scroll", debounce(scroll));

window.addEventListener("load", showGreeting);

/*
function up(){
  console.log(window.scrollY);
  console.log("Up");
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}

credit.addEventListener("click", up);
*/

