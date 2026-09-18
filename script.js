
const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const target=new Date('2026-10-11T19:00:00+05:30').getTime();
function tick(){
  const d=Math.max(0,target-Date.now());
  const vals=[
    Math.floor(d/86400000),
    Math.floor(d%86400000/3600000),
    Math.floor(d%3600000/60000),
    Math.floor(d%60000/1000)
  ];
  document.querySelectorAll('[data-count]').forEach((el,i)=>el.textContent=String(vals[i]).padStart(2,'0'));
}
tick();setInterval(tick,1000);
