export default function colorSwitcher() {
  const switcherButton = document.querySelector(".style-switcher-toggler"),
        switcherContainer = document.querySelector(".style-switcher"),
        alternateStyle = document.querySelectorAll(".alternate-style"),
        colorToggleContainer = document.querySelector(".colors");

  switcherButton.addEventListener('click', () => {
    switcherContainer
      .classList.toggle("open-switcher");
  });

  window.addEventListener('scroll', () => {
    if(switcherContainer.classList.contains("open-switcher")) {
      switcherContainer
        .classList.remove("open-switcher");
    }
  });

  colorToggleContainer.addEventListener('click', (toggleButton) => {
    const colorName = toggleButton.target.getAttribute("data-theme");

    alternateStyle.forEach((style) => {
      
      if(colorName == style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    })
  })

}