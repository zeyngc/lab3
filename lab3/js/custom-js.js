// rendering html first

document.addEventListener('DOMContentLoaded',(loaded) =>{
    // welcome message (step 1.)
    console.log('### WELCOME ### JS LOADED ###');

    // targeting id "main" which is shared with the main element in the HTML doc (step 2. and step 3.)
    document.getElementById("main").innerHTML = "<main>" +
        "<h2>Step 3 Header</h2>" +
        "<p>This is a new paragraph added through JS!" +
        "<a href='index.html'" +
        "<img id='image' src='./img/logo.png' alt='New image added through JS!'>" +
        "</a>" +
        "</p>" +
        "</main>";

    // styling the new main class with inline CSS via JS (step 4.)
    document.getElementById("main").style.cssText = "justify-content: center; height: 80%; width: auto; background-color: #c8c8c8; align-items: center; font-size: 74px;";

    // styling global header using inline css
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";

    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";

    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";
});