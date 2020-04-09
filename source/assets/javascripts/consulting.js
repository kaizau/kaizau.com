const images = Array.prototype.slice.call(
  document.querySelectorAll(".images a")
);
const overlay = document.querySelector(".Overlay");
const overlayTarget = overlay.querySelector(".cell");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    const src = e.target.href;
    // TODO
    console.log("add image", src);
  });
});
