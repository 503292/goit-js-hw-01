"use strict";

import gallery from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  galleryImage: document.querySelector(".gallery__image"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox___image"),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector(".lightbox__content")
};

// Шаблон галереї по даним з файла ./gallery-items.js
const templateGallery = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
      data-source="${original}"
      data-lazy="${preview}"
      width="340" alt="${description}" />
      <span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span>
    </a>
  </li>
`
  )
  .join("");

// console.log(templateGallery);

// Підключка шаблона до HTML 
refs.gallery.insertAdjacentHTML("beforeend", templateGallery);

// закрити модальне вікно при "Escape"
const closeModalKeypress = e => {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
};
// відкрити модельне вікно - реалізація
const openModal = e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgBigSrc = e.target.dataset.source;
  const imgAlt = e.target.alt;
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = imgBigSrc;
  refs.lightboxImage.alt = imgAlt;

  window.addEventListener("keydown", closeModalKeypress);
};

refs.gallery.addEventListener("click", openModal);

// закрити модальне вікно 
const closeModal = e => {
  refs.lightbox.classList.remove("is-open");

  window.removeEventListener("keydown", closeModalKeypress);
};


refs.closeBtn.addEventListener("click", closeModal);

// закрити по оверлею
const closeModalOverlay = e => {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
};

refs.overlay.addEventListener("click", closeModalOverlay);
