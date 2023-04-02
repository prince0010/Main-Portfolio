const ThemeMode = () => {
    // im gonna use querySelectorAll since it has more than one element, class or ID in the HTML\
    // the #theme-toggle returns a node-list so we use querySelectorAll and we will forEach it para ma ano ang tanan na naay theme-toggle na class

    const darkalightTheme = document.querySelectorAll('#theme-toggle');
    const mobile_sunIcon = document.querySelector('.mobile_nav-links-sun ');
    const mobile_moonIcon = document.querySelector('.mobile_nav-links-sun-moon');
    const header_sunIcon = document.querySelector('.header_li_dk');
    const header_moonIcon = document.querySelector('.header_li_dk_moon');

    //State
    // the getItem method takes any string argument it takes the key to a key value pair inside our localStorage and
    // once the key is provided it returns the value of that key and if the key does not exist it returns null 
    // we will grab the 'theme' from our localStorage from the Handlers the ' localStorage.setItem('theme', 'mainContainer_light-mode');' 
   const theme= localStorage.getItem('theme');

  
    // Short Circuiting
    // The and operator/&& operator is asking whether the theme variable is truthy/true if theme is truthy/true then 
    // we are allowed to run the next line of code "document.body.classList.add(theme);" the && operator is acting like
    // a barrier it will only allow us to add a class to our body if the theme variable is truthy/true, inside the add method
    // we're passing it the theme variable. 
    // we can add a mainContainer_light-mode string in the classList but the getItem method (localStorage.getItem('theme')) already
    // returns the value of the mainContainer_light-mode class as a string to our theme variable which contains the 'theme' key (that stores the mainContainer_light-mode class properties in it)
    //  in the localStorage.setItem*('theme', 'mainContainer_light-mode'); 
    //  so inside the add method passing it to the theme variable is the same as if we were to explicitly set it to' light-mode ' 
    // This line of code isn't inside a statement kanang naa sa Handler and Event or smth ana it runs the moment the page is loaded 
    // It calls onMount, it means something that happens when the page finishes its initial load, unmount happens when you first visits 
    // a page and also whenever you reload the page, its like when you first visit a page or reload a page 
      // onMount
   theme && document.body.classList.add(theme);
    
    //Handlers
   const themeHandlerToggle = () =>{
    //Default theme is the Darkmode and its classList just open the inspect and look at the Element and Check the body tag if it changes to mainContainer_dark-mode to mainContainer_light-mode
    // so pag open sa web ang mainContainer_dark-mode dapat ang naa sa Element sa body tag sa inspect since its the default one
    document.body.classList.toggle('mainContainer_dark-mode');

    
    // The default theme on this one is the dark mode and if the icon clicked then the light theme will be added/changed the css in that one and will craete as a light mode
    document.body.classList.toggle('mainContainer_light-mode');
    const light = document.body.classList.contains('mainContainer_light-mode');
   
    // this contains method that checks if a specific class exists inside an element it takes a string argument nad returns a boolean
    // in other words it returns true if the class exists and false if not exists
    // i check sa toggle if ang mainContainer_light-mode is exists and if true then the query value will contains the mainContainer_light-mode properties and then
    // there will be a light mode na and sa localstorage iya dayon i store ang katong properties sa mainContainer_light-mode as a key 'theme' which is i 'get' dayon sa 
    // local storage na naas state sa taas and then the theme state/status will be the properties sa lightmode and then if theme naay value or sulod then i set dayon niya ang body sa light theme mode na 
    //  naa dari ani theme && document.body.classList.add(theme); which is ang document.body.classList.add(theme) dari niya gi set ang light theme na nastore sa key which is ang 'theme'

    if(light){
        // localstorage is an object and by using it we get some access to its methods like the setItem, getItems, removeItem 
        // the setItem method will create a key value pair inside our local storage it takes two string arguments the first is the name of
        // the key 'theme' and the second is the name of the value 'mainContainer_light-mode' and mainContainer_dark-mode' na gikan sa css 
        // and dapat gamiton ang kato jud dapat gamiton like ani sa css and also mag indicate na kani is lightmode or dark mode and makita na siya sa inspect, adto dayon kas Application and then naay key and value dadto
        localStorage.setItem('theme', 'mainContainer_light-mode');
        mobile_moonIcon.style.display = 'flex';
        mobile_sunIcon.style.display = 'none';
        header_sunIcon.style.display ='none';
        header_moonIcon.style.display = 'flex';
    }
    else{
        localStorage.setItem('theme','mainContainer_dark-mode');
        mobile_moonIcon.style.display = 'none';
        mobile_sunIcon.style.display = 'flex';
        header_sunIcon.style.display ='flex';
        header_moonIcon.style.display = 'none';
    }
    
   };
    
    // since we are in foreach loop we are defining what happens when we clicked on the sun or moon icon or any who has the theme-toggle na ID attribute 
    // when we click sa sun or moon icon button the toggle-method either create the class of light-mode or the dark-mode since its a forEach loop, depending 
    // on whether the body element already has the class of light-mode or dark-mode then in the if(query) will checks if the body element contains the light-mode
    // class this returns a boolean so if the if(query) condition is true then we set the "localStorage.setItem('theme', 'mainContainer_light-mode');" 'theme'  as a light-mode 
    // in our localStorage and if the condition is false then we will set the body element with the dark-mode class or the 'mainContainer_dark-mode' class 
    // Events
  
    darkalightTheme.forEach(theme => {
        theme.addEventListener('click', themeHandlerToggle);
    });
    
};

export default ThemeMode;