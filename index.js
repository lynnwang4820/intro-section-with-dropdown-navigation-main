let feature = document.getElementById('feature');
let fAngle = document.getElementById('f-angle');
let fContent = document.getElementById('f-content');

let company = document.getElementById('company');
let cAngle = document.getElementById('c-angle');
let cContent = document.getElementById('c-content');

let close = document.getElementById("close");
let open = document.getElementById("mobile-nav");
let navContent = document.getElementById("nav-content");
let overlay = document.getElementById("overlay");

let size = window.matchMedia("(min-width:951px");
let mobilesize = window.matchMedia("(max-width:949px")




feature.addEventListener("click",()=>{
    if(fContent.style.display == "none"){
        fContent.style.display = "block";
        fAngle.classList.remove('fa-angle-down');
        fAngle.classList.add('fa-angle-up');
    }
    else{
        fContent.style.display = "none";
        fAngle.classList.remove('fa-angle-up');
        fAngle.classList.add('fa-angle-down');
    }
})

company.addEventListener("click",()=>{
    if(cContent.style.display == "none"){
        cContent.style.display = "block";
        cAngle.classList.remove('fa-angle-down');
        cAngle.classList.add('fa-angle-up');
    }
    else{
        cContent.style.display = "none";
        cAngle.classList.remove('fa-angle-up');
        cAngle.classList.add('fa-angle-down');
    }
})

close.addEventListener("click",()=>{
    navContent.style.display = "none";
    overlay.style.display = "none";
})
    
open.addEventListener("click",()=>{
    navContent.style.display = "flex";
    overlay.style.display = "block";
    
})

function navShow(size){
    if(size.matches && navContent.style.display =="none"){
        navContent.style.display = "flex";
    }
    else{
        navContent.style.display = "none";
    }
    
}

/*function navHide(mobilesize){
    if(size.matches && navContent.style.display =="flex"){
        navContent.style.display = "none";
    }*/
    


navShow(size);
size.addListener(navShow);

//navHide(mobilesize);
//mobilesize.addListener(navHide);