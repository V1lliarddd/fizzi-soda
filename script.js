const cherryCan = document.getElementById("cherry-can");
const grapeCan = document.getElementById("grape-can");
const lemonLimeCan = document.getElementById("lemon-lime-can");
const watermelonCan = document.getElementById("watermelon-can");
const canFlavor = document.getElementById("can-flavor");

console.log(canFlavor);

cherryCan.addEventListener("mouseenter", function () {
  canFlavor.textContent = "explosing cherry";
});

cherryCan.addEventListener("mouseleave", function () {
  canFlavor.textContent = "choose your flavor";
});

grapeCan.addEventListener("mouseenter", function () {
  canFlavor.textContent = "sugar grape";
});

grapeCan.addEventListener("mouseleave", function () {
  canFlavor.textContent = "choose your flavor";
});

lemonLimeCan.addEventListener("mouseenter", function () {
  canFlavor.textContent = "lemon & lime";
});

lemonLimeCan.addEventListener("mouseleave", function () {
  canFlavor.textContent = "choose your flavor";
});

watermelonCan.addEventListener("mouseenter", function () {
  canFlavor.textContent = "juicy watermelon";
});

watermelonCan.addEventListener("mouseleave", function () {
  canFlavor.textContent = "choose your flavor";
});
