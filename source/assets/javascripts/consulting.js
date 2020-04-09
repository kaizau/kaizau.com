const images = Array.prototype.slice.call(
  document.querySelectorAll(".images a")
);
const overlay = document.querySelector(".Overlay");
const overlayTarget = overlay.querySelector(".cell");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    while (target && target.nodeName !== "A") {
      target = e.target.parentElement;
    }

    const image = document.createElement("img");
    image.addEventListener("load", function loaded() {
      image.removeEventListener("load", loaded);
      overlayTarget.classList.add("loaded");
    });
    image.src = target.href;

    overlayTarget.innerHTML = "";
    overlayTarget.appendChild(image);

    if (target.classList.contains("mobile")) {
      overlay.classList.add("mobile");
    } else {
      overlay.classList.remove("mobile");
    }

    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", (e) => {
  overlay.classList.remove("active");
  overlayTarget.classList.remove("loaded");
});
