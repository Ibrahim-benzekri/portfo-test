let tablinks = document.getElementsByClassName("tab-links");
let tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcont of tabcontent){
        tabcont.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}

//-------------------close------open------------
let closebtn = document.getElementById("closebtn");
let openbtn = document.getElementById("openbtn");
let sidebar = document.getElementById("sidebar");

openbtn.addEventListener("click",fopen);
closebtn.addEventListener("click",fclose);

function fopen(){
    sidebar.style.right = "0";
}
function fclose(){
    sidebar.style.right = "-200px";
}