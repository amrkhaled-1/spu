const slideList = [
  {
    img: "https://via.placeholder.com/400x250/5FB5F7/FFFFFF?text=Advantage+1",
    alt: "Advantage 1",
    header: "Advantage 1",
    description: "Description for advantage 1"
  },
  {
    img: "https://via.placeholder.com/400x250/F5768E/FFFFFF?text=Advantage+2",
    alt: "Advantage 2",
    header: "Advantage 2",
    description: "Description for advantage 2"
  },
  {
    img: "https://via.placeholder.com/400x250/F9B234/FFFFFF?text=Advantage+3",
    alt: "Advantage 3",
    header: "Advantage 3",
    description: "Description for advantage 3"
  },
  {
    img: "https://via.placeholder.com/400x250/8E3EF5/FFFFFF?text=Advantage+4",
    alt: "Advantage 4",
    header: "Advantage 4",
    description: "Description for advantage 4"
  }
];

const image = document.querySelector("img.slider");
const header = document.querySelector("h2.slider");
const description = document.querySelector("p.slider");
const dots = [...document.querySelectorAll(".dots span")];
const time = 5000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  image.alt = slideList[active].alt;
  header.textContent = slideList[active].header;
  description.textContent = slideList[active].description;
  changeDot();
};

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = e => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(indexInterval);
    e.keyCode === 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    image.alt = slideList[active].alt;
    header.textContent = slideList[active].header;
    description.textContent = slideList[active].description;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);

const button = document.querySelector("button.register-button");

button.addEventListener("click", () => {
  window.location.href = "https://spu.edu.sy";
});
