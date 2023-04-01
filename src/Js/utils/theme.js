const ThemeMode = () => {
    // im gonna use querySelectorAll since it has more than one element, class or ID in the HTML
    const darkalightTheme = document.querySelectorAll('#theme-toggle');
    const mobile_sunIcon = document.querySelector('.mobile_nav-links-sun ');
    const mobile_moonIcon = document.querySelector('.mobile_nav-links-sun-moon');
    const header_sunIcon = document.querySelector('.header_li_dk');
    const header_moonIcon = document.querySelector('.header_li_dk_moon');
    
    let isThemeClicked = false;
    
    // console.log(isThemeClicked);
    darkalightTheme.forEach(theme => {
        theme.addEventListener(('click'), () => {
            isThemeClicked = !isThemeClicked;
            // console.log(isThemeClicked);
            // when the user clicks the sun icon button this line ' document.body.classList.toggle('light-dark-mode');' will add a 
            // class in the body element and the class it adds our light-dark-mode utility class, because we are using toggle method
            // it will create the class attribute of lightmode on our body element if it doesn't exist  already and if its already there exist
            // then it will remove it the light-dark-mode utility class which is from the .light-dark-mode in utils.css
           if(isThemeClicked){
            document.body.classList.toggle('light-dark-mode');
            mobile_sunIcon.style.display = 'none';
            mobile_moonIcon.style.display = 'flex';
            header_sunIcon.style.display = 'none';
            header_moonIcon.style.display = 'block';
           }
           else{
            document.body.classList.toggle('light-dark-mode');
            mobile_sunIcon.style.display = 'flex';
            mobile_moonIcon.style.display = 'none';
            header_sunIcon.style.display = 'block';
            header_moonIcon.style.display = 'none';
           }
        });

    });
    
};

export default ThemeMode;