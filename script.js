const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";loader.style.visibility="hidden"},700));
const header=document.querySelector("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>40));
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const count=document.getElementById("count");
let started=false;
const observer=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting && !started){
    started=true; let n=0; const timer=setInterval(()=>{n+=7; if(n>=108){n=108;clearInterval(timer)} count.textContent=n},45);
  }
},{threshold:.4});
observer.observe(document.querySelector(".counter"));

document.getElementById("waitForm").addEventListener("submit",e=>{
 e.preventDefault();
 const msg=document.getElementById("formMessage");
 msg.textContent="Your call has been received. Stay close. ✦";
 msg.classList.add("success");
 e.target.reset();
});
