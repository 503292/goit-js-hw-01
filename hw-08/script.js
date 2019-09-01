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

// Шаблон для елемента в галереї
const createGalleryTemplate = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" >
      <img
        class = "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
};

const drawGallery = source => {
  source.forEach(element => {
    const elementToDraw = createGalleryTemplate(element);
    refs.gallery.insertAdjacentHTML("beforeend", elementToDraw);
  });
};

// відмалювати дані з файла gallery-items.js по шаблону
drawGallery(gallery);

// закрити модальне вікно при "Escape"
const closeModalKeypress = e => {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
};

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

// відкрити модельне вікно
refs.gallery.addEventListener("click", openModal);

const closeModal = e => {
  refs.lightbox.classList.remove("is-open");

  window.removeEventListener("keydown", closeModalKeypress);
};

// закрити модальне вікно при кнопці button - "X"
refs.closeBtn.addEventListener("click", closeModal);

//Закрити по оверлею
const closeModalOverlay = e => {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
};

refs.overlay.addEventListener("click", closeModalOverlay);
