export default function changeMode() {
  const changeModeButton = document.querySelector(".day-night"),
        preloader = document.querySelector(".preloader"),
        modeIcon = changeModeButton.querySelector(".fas");

  let getAttributeMode = changeModeButton.getAttribute("data-mode");

  changeModeButton.addEventListener('click', () => {
    modeIcon
        .classList.toggle("fa-sun");

    modeIcon
      .classList.toggle("fa-moon");
    
    if(getAttributeMode == "dark") {
      preloader.style.background = "#2b2c2f";

      getAttributeMode = "light";

      document.body
        .classList.remove(localStorage.getItem("page-mode"));
     
      localStorage.removeItem("page-mode"); 
    } else {
      preloader.style.background = "#eff0f4";

      getAttributeMode = "dark";

      localStorage.setItem("page-mode", getAttributeMode);
      
      document.body
        .classList.add(localStorage.getItem("page-mode"));
    }
  });

  window.addEventListener('load', () => {
    if(localStorage.getItem("page-mode")) {
      preloader.style.background = "#2b2c2f";

      modeIcon
        .classList.add("fa-sun");

      document.body
        .classList.add(localStorage.getItem("page-mode"));
      
      getAttributeMode = localStorage.getItem("page-mode");

    } else {
      preloader.style.background = "#eff0f4";

      modeIcon
        .classList.add("fa-moon");
    
      getAttributeMode = "light";      
    }
  });
}