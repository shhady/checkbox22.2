const checkbox = document.querySelector("input");
const image = document.createElement("img");
image.src = "./me.jpg";
checkbox.addEventListener("input", function () {
  if (checkbox.checked === true) {
    document.body.appendChild(image);
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});
