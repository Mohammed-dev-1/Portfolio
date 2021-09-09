export default function testiSlide() {
  const sliderContainer = document.querySelector(".testi-slider-container"),
        slides = document.querySelectorAll(".testi-item"),
        sliderWidth = sliderContainer.offsetWidth,
        slideActive = sliderContainer.querySelector(".testi-item.testi-active"),
        prevButton = document.querySelector(".testi-slider-nav .prev"),
        nextButton = document.querySelector(".testi-slider-nav .next");

  let slideIndex = Array
    .from(slideActive.parentElement.children)
      .indexOf(slideActive);

  // console.log(slideIndex);

  slides.forEach((element) => {
    element.style.width = `${sliderWidth}px`; 
  });

  sliderContainer.style.width = `${sliderWidth*slides.length}px`;

  nextButton.addEventListener('click', () => {
    if(slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
      sliderMove();
  });


  prevButton.addEventListener('click', () => {
    if(slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
      sliderMove();
  });

  function sliderMove() {
    sliderContainer.querySelector(".testi-item.testi-active")
      .classList.remove("testi-active");
    
    slides[slideIndex]
      .classList.add("testi-active");  

    sliderContainer.style.marginLeft = `${- (sliderWidth*slideIndex)}px`;  
  }
  sliderMove();
}