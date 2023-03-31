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

// console.log(isMobileNavOpen);
headerBtn.addEventListener('click', () => {
    // now the isMobileNavOpen is true == !isMobileNavOpen
    isMobileNavOpen = !isMobileNavOpen;
    // console.log(isMobileNavOpen);
    if(isMobileNavOpen) {
        //this will set again the mobile_nav when clicked to flex
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';    
    }
    else{
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
});


//If you console.log it you will see that the mobile_nav-links are nodeList which 
//  is like an array but instead its an nodelist so you can convert it to an array but
// forEach will be good for this nodelist so it will read each in nodelist so 1 is about , 2 is project and 3 is contact
   
mobileLinks.forEach(links => {
        links.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};
export default mobileenav;