export default function sectionToggle() {
  const section = document.querySelectorAll(".section");

  section.forEach((section) => {
    if(!section.classList.contains("active-section")) {
      section.classList.add("hide-section");
    }
  })
}