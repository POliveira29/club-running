let time = 4000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slider__image");
max = images.length;

function changeImage() {
  //remove a classe "selected" da imagem
  images[currentImageIndex].classList.remove("slider__image--selected");

  //Incrementa o index do array das imagens para ir mudando
  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  //Adiciona a classe "selected" da imagem
  images[currentImageIndex].classList.add("slider__image--selected");
}

function start() {
  setInterval(() => {
    changeImage();
  }, time);
}

window.addEventListener("load", start());

/*============================= MODAL VIDEO =============================*/
new ModalVideo(".video__play-btn");
