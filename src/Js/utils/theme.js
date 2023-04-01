export default ThemeMode = () => {
    // im gonna use querySelectorAll since it has more than one element, class or ID in the HTML
    const darkalightTheme = document.querySelectorAll('#theme-toggle');
    

    darkalightTheme.forEach(theme => {
        theme.addEventListener(('click'), () => {
            // when the user clicks the sun icon button this line ' document.body.classList.toggle('light-dark-mode');' will add a 
            // class in the body element and the class it adds our light-dark-mode utility class, because we are using toggle method
            // it will create the class attribute of lightmode on our body element if it doesn't exist  already and if its already there exist
            // then it will remove it the light-dark-mode utility class which is from the .light-dark-mode in utils.css
            document.body.classList.toggle('light-dark-mode');

        });

    });
    
}