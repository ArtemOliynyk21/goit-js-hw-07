import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markupGallery = document.querySelector(".gallery");

const imageGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`;
  })
  .join(" ");

markupGallery.insertAdjacentHTML("beforeend", `${imageGallery}`);

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
