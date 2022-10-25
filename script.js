let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let icons = document.getElementsByClassName("icons")[0];

taskbar.addEventListener("click", ()=> {
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-860px";
    }else{
        startmenu.style.bottom = "50px";
    }
});

icons.addEventListener("click", ()=> {
    // let p = document.createElement('div');
    // p.innerHTML = '<a href="https://www.google.com" target=_blank></a>';
});