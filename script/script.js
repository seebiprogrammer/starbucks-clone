let mainImage = document.querySelector(".big-image");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseenter", (thumbnail) => {
    mainImage.src = thumbnail.target.src;
  });
});
