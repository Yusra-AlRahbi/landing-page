/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const header = document.querySelector('header');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function to create list item of the navbar
function buildNav(){
   for (let section of sections){
      //Create li element to create links for every section
       const navLink = document.createElement('li');
       navLink.innerHTML= `<a href="#${section.getAttribute('id')}"class="menu__link">${section.getAttribute('data-nav')} </a>`;
       //Append the li to the ul  
       navList.appendChild(navLink);
      
       }
   }

    



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
buildNav();

// Add class 'active' to section when near top of viewport
function addActiveClass(){
     const activeLink = document.querySelectorAll('.menu__link');
      sections.forEach((section,i)=>{
        const sectionPos = section.getBoundingClientRect();
         if (sectionPos.top <= 380 && sectionPos.bottom >= 350 ){
           section.classList.add("your-active-class");
           activeLink[i].classList.add("active");
         }
         else {
            section.classList.remove("your-active-class");
            activeLink[i].classList.remove("active");
        }
      });     
  }

// Scroll to anchor ID using scrollTO event
const navLinks = document.querySelectorAll('.menu__link');
  navLinks.forEach((link)=> {
       link.addEventListener('click',(event)=>{
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
         targetSection.scrollIntoView({
          behavior :"smooth",
          block: "start",
          });
       });
  });
        
     

/**
 * End Main Functions
 * Begin Events
 * 
*/



// Scroll to section on link click


// Set sections as active when scroll and display the Top button to  go up
 window.addEventListener('scroll',() =>{
  //Add active class for active section 
    addActiveClass();
   //Display the navbar when scrolling 
    let isScrolling;
    header.style.display = "flex";
    clearTimeout(isScrolling);
    //Hide the navbar when no scrolling by display timeout
     isScrolling = setTimeout (()=> {
       header.style.display ="none"
      },9000);
   
  //Event when scroll down the Top button active
    const btnUp = document.querySelector('.btnUp');
     window.scrollY > 500
      ?(btnUp.classList.add("activeBtn"))
      :(btnUp.classList.remove("activeBtn"));
  
     //Add event when click the Top button scroll to the up of the page
    btnUp.addEventListener('click', ()=> {
      window.scrollTo({
      top : 0 , behavior:"smooth"});
   });
 });
//To display hamburger Menu
const hamburgerMenu = document.querySelector(".hamburgerMenu");
  hamburgerMenu.addEventListener('click',()=>{
   const navBarMenu = document.querySelector(".navbar__menu");
    navBarMenu.classList.toggle("activeNav");
    hamburgerMenu.classList.toggle("activeNav");
 });


