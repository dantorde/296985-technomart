var link = document.querySelector(".button-map");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    fullname.focus();

});

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


var link = document.querySelector(".map");
var popup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    fullname.focus();

});

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


var link = document.querySelector(".button-buy");
var popup = document.querySelector(".modal-cart");
var close = popup.querySelector(".modal-close, .continue-button");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    fullname.focus();

});

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
