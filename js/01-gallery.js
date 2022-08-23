import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markupGallery = document.querySelector(".gallery");

const imageGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join(" ");

markupGallery.insertAdjacentHTML("beforeend", `${imageGallery}`);

const backdroup = basicLightbox.create(`<img src="">`, {
  onShow: (backdroup) => {
    window.addEventListener("keydown", escClick);
  },
  onClose: (backdroup) => {
    window.removeEventListener("keydown", escClick);
  },
});

const clickImage = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  backdroup.element().querySelector("img").src = evt.target.dataset.source;
  backdroup.show();
};

markupGallery.addEventListener("click", clickImage);

const escClick = (evt) => {
  if (evt.key === "Escape") {
    backdroup.close();
    return;
  }
};

console.log(galleryItems);
