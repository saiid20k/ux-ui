let toggleBtn = document.getElementById("toggleBtn");

let links = document.getElementById("links");

toggleBtn.onclick = function () {
    
    links.classList.toggle("menu");
      
};

document.addEventListener("click", (e) => {
   if(e.target !== toggleBtn && e.target !== links){

    if(links.classList.contains("menu")){
           
        links.classList.toggle("menu");
       
    }
   } 
});

links.onclick = function (e) {
    e.stopPropagation();
}







const box = document.querySelectorAll(".text");

box.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});