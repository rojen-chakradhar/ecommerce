//sticky nav
const nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky",this.window.scrollY>0);
})

//reveal scrollup button
const b = document.querySelector("b");
window.addEventListener("scroll", function(){
    b.classList.toggle("sticky",this.window.scrollY>0);
})

//tab link
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

tablinks[0].style.backgroundColor = "#e06d54";
tablinks[0].style.color = "#fff";

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    tablink.style.backgroundColor = "";
    tablink.style.color = "";
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  
  var clickedTab = event.currentTarget;
  clickedTab.classList.add("active-link");
  clickedTab.style.backgroundColor = "#e06d54";
  clickedTab.style.color = "#fff";

  document.getElementById(tabname).classList.add("active-tab");
}
