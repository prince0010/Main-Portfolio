const Loaderload = () => {
    const loader = document.querySelectorAll('.loader');
// The Goal here is to create a way to detect when one of our images enters the viewport 
// so for example in our Dev server or the Website if we scroll all the way up we don't see the image in the about section because its still not in our viewport 
// it only enters in our viewport when we scroll down, when the image does enter in our viewport we want to know the browser know about it to do that we can use 
// Intersection Observer API from the Javascript language, to start using Intersection Observer: create a new variable 
// in our intersection observer there are 2 arguments, first is the arrowback function and second is an objects for setting up the options

// const Observer = new IntersectionObserver(() =>{}, {
    // root option defines the parent element that we want to observe if I leave it at null then the entire page will be observed, the intersection observer will
    // to observe the entire page so I'll leave it at null, the rootMargin option adds a additional space to be observed on the root but because we have the root option
    // at null we can leave this at its default of 0px, the treshold defines how much the image needs to be visible before observing it if I set it to 1 then the image would
    // need to be 100% visible before observing it, I want the image to be observed the exact moment it enters the viewport so I'll leave it at 0 
    // Since im leaving all the options on their default values, I actually dont need to explicitly set the define them, I can just not call them. 
//     root: null,
//     rootMargin: '0px',
//     threshold: 0,
    
// });

    // Handler
    const Observer = new IntersectionObserver((entries, observed) => {
        // console.log(entries);
        // since entries is an array of objects with the following properties and properties  are defined in the Intersection Observer class then I can just call them directly and I can set them directly 
        // you can find the isIntersecting in the console since we console.log(entries) earlier, and this intersection is an array so 
        // we will know if isIntersecting is true if we scroll down to the images that has .loader classes on it or the one that we want to have the loader
        // so if the isIntersecting is true then we will console.log(entry.target) to find out in the console of those images that is in the viewport or sa pag scroll down nimo makita nimo ang mga images na nakita na sa viewport or POV sa user sa website
        entries.forEach(entry => {
            if (entry.isIntersecting){
              
                let img = entry.target;
                img.src = img.dataset.src;
                // this will remove the loading utility.css class filter:blur(20px) grayscale(100) from the utility.css
                // ang img is this is from those images/img in the html that has the src and data-src of those images/assets and since those img tag has a class of 'loading' by calling it img.classList.remove('loading') it will remove the loading utility and replace it /add the loaded utility class from the utility.css
                img.classList.remove('loading');
                // and it will replace the 
                img.classList.add('loaded');
                observed.unobserve(img);
                console.log(entry.target);
            }
        });
    });

    // Events
    loader.forEach(imgs => {
        Observer.observe(imgs);
    });
}

export default Loaderload;