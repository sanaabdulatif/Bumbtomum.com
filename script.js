const images = [
"images/box1.jpg",
"images/box2.jpg",
"images/box3.jpg",
"images/box4.jpg"
];

let i = 0;

setInterval(() => {
i = (i + 1) % images.length;
document.getElementById("slider").src = images[i];
}, 3000);
const photos = [
  "images/box1.jpg",
  "images/box2.jpg",
  "images/box3.jpg",
  "images/box4.jpg"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % photos.length;
  document.getElementById("giftSlider").src = photos[current];
}, 3000);
const photos = [
  "images/box1.jpg",
  "images/box2.jpg",
  "images/box3.jpg",
  "images/box4.jpg",
  "images/box5.jpg"
];
