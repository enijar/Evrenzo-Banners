window.addEventListener("load",(()=>{const e=document.querySelector("#carousel"),d=e.querySelectorAll("section"),o=window.state||{},t={autoPlay:"production"===window.mode,loop:(window.mode,!1),slideIndex:(window.mode,-1),...o};function i(){if(t.slideIndex++,!d[t.slideIndex]){if(!t.loop)return;t.slideIndex=0}e.dataset.slideIndex=t.slideIndex,d.forEach((e=>{e.style.opacity="0"})),d[t.slideIndex].style.opacity="1",t.autoPlay&&setTimeout(i,parseInt(d[t.slideIndex].dataset.timeout))}window.nextSlide=i,i()}));