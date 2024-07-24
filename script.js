const shareButton = document.getElementById("card__share");
const toolTip = document.querySelector(".card__tool-tip");
const cardFooter = document.querySelector(".card__footer");
const cardBottom = document.querySelector(".card__bottom");
const card = document.querySelector(".card");

shareButton.addEventListener("click", function () {
  if (getComputedStyle(card).flexDirection === "row") {
    toolTip.classList.toggle("invisible");
    cardFooter.classList.toggle("invisible");
    cardBottom.classList.toggle("card__bottom--blue");
  } else {
    cardFooter.classList.toggle("invisible");
    toolTip.classList.toggle("invisible");
    cardBottom.classList.toggle("card__bottom--blue");
  }
});
