const mobile_btn = document.querySelector(".mobile-btn");
const mobile_nav = document.querySelector(".mobile_nav-1");
const nav_item =  document.querySelector("ul#nav_item");
let nav_item2 = document.querySelectorAll("ul#nav_item li");
// const nav_main_clone = nav_main.clone("nav");
// document.getElementsByTagName(name)
console.log(nav_item);
console.log(nav_item2);


mobile_btn.onclick = function() {
    mobile_btn.classList.toggle("active");
    mobile_nav.classList.toggle("active");
    nav_item.classList.toggle("active");
    // nav_main_clone.appendChild(".mobile_nav-1");
    mobile_nav.appendChild(nav_item);
} 


/* Random change color of body HTML element */

// const htmlBoddy = document.querySelector('body');

// const randomClickFunction = function() {
//     const colors = ["white", "grey", "pink", "red", "green", "blue", "yellow", "purple"];

//     const randomIndex = Math.floor(Math.random() * colors.length);
    
//     const randomColor = colors[randomIndex];

//     htmlBoddy.style.background = randomColor;

//     console.log('The user clicked and set the color to ' + randomColor);
// }


// htmlBoddy.onclick = randomClickFunction ;


let count = function() {
    let nav_item2 = document.querySelectorAll("ul#nav_item li");
    for (let i = 0; i < nav_item2.length; i++) {
        console.log(i);          
    }
  
}

count();

// for (let i = 0; i < nav_item.length; i++) {
//     console.log(i);
// }



function scrollAppear() {
    const introText = document.querySelector('.testimonial-pharagraphy'); //tekst który chcemy zanimować
    let introPosition = introText.getBoundingClientRect().top;  //miejsce w którym animacja startuje
    let screenPosition = window.innerHeight / 2; //wewnętrzna wysokość dzienona prze 1.3

    if(introPosition < screenPosition){
        introText.classList.add('testimonialP-slide'); //dodawanie klasy do sekcji .introText z innym opasity i transform translate X or Y 
    }else{
        introText.classList.remove('testimonialP-slide'); //usuwanie klasy do sekcji .introText z innym opasity i transform translate X or Y 
    }
}

    window.addEventListener('scroll', scrollAppear); //dodawanie evwntu na scroll które wywołuje scrollAppear    