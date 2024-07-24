const shareButton = document.getElementById("card__share");
const toolTip = document.querySelector(".card__tool-tip");

shareButton.addEventListener("click", function () {
  toolTip.classList.toggle("tool-tip--invisible");
});
