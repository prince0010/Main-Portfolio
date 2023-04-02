// I want to select the bars icon by its class name the same way how we select/call it in our CSS to style it/animate it or add a fucntions in it
// we want to select it in js and add a logic in it
const mobileenav = () =>{

const headerBtn = document.querySelector('.header_bars');
const mobileNav = document.querySelector('.mobile_nav');
const mobileLinks = document.querySelectorAll('.mobile_nav-links');

// in order not to stuck in the nabile_menu we will add a let variable
// this will track if mobilenav is open or not
//state
let isMobileNavOpen = false;

// Handler
const mobileNavToggle = () =>{
      // now the isMobileNavOpen is true == !isMobileNavOpen
      isMobileNavOpen = !isMobileNavOpen;
      // console.log(isMobileNavOpen);
      // if mobileNav is open or clcked then it will change the style of .mobile_nav to display:flex and overflowY: hidden else 
      // pag wala na click so the mobile_nav display is none or the current defualt display ana sa css sa mobile_nav and the overflowY display is auto 
      if(isMobileNavOpen) {
          //this will set again the mobile_nav when clicked to flex
          mobileNav.style.display = 'flex';
          document.body.style.overflowY = 'hidden';    
      }
      else{
          mobileNav.style.display = 'none'; 
          document.body.style.overflowY = 'auto';
      }
}

//Event
// console.log(isMobileNavOpen);
headerBtn.addEventListener('click', mobileNavToggle);


//If you console.log it you will see that the mobile_nav-links are nodeList which 
//  is like an array but instead its an nodelist so you can convert it to an array but
// forEach will be good for this nodelist so it will read each in nodelist so 1 is about , 2 is project and 3 is contact
   
mobileLinks.forEach(links => {
        links.addEventListener('click', () => {
            // if clicked a nav_link the ismobileNavOpen will becomne false
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            // this will not make us stuck in the specific section when we click the links so overflowY = auto is to fix the bug stuck in one section
            document.body.style.overflowY = 'auto';
        });
    });
};
export default mobileenav;