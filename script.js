// Move animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Item
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("moousemove", (event)=>{
  const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
  card.style.transform = 'rotateX(${yAxis}deg) rotateY(${xAxis}deg)';
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchases.style.transform = "translateZ(75px)";
})

// Animate Out
container.addEventListener("mouseleave", (e)=>{
  card.style.transition = "all 0.5s easeout";
  //Popout
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0) rotateZ(0deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
})