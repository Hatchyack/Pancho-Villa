// script.js - Navigation für Mobile
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".nav-toggle");
  const nav=document.querySelector(".nav");
  toggle.addEventListener("click",()=>{
    nav.classList.toggle("open");
  });
});
