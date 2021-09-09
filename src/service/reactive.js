export default function innerElement() {
  // effect start
  const dotEffect = document.getElementById('effect_2');
  const lineEffect = document.getElementById('effect_5');
  
  for(let i=0; i<28; i++) {
    dotEffect.innerHTML += "<div></div>"
  }
  for(let i=0; i<10; i++) {
    lineEffect.innerHTML += "<div></div>"
  }
  //effect end

  // tabs toggle start
  const aboutSection = document.querySelector(".about-section"),
        tabContainer = document.querySelector(".about-tabs");

  tabContainer.addEventListener("click", (event)=> {
    // if tab not active do something
    const tab_item = event.target.classList.contains("tab-item")
    const tab_item_active = event.target.classList.contains("active")
    
    if ( tab_item && !tab_item_active) {
      const target = event.target.getAttribute("data-target");
            
      // Remove active class when click on tab not active
      tabContainer.querySelector(".active")
        .classList.remove("outer-shadow","active");


      // Set active class after click on tab not active
      event.target
        .classList.add("outer-shadow", "active");

      // make all tabs display none 
      aboutSection.querySelector(".tab-content.active-tab")
        .classList.remove("active-tab");
      
      // make tab active class display block to show
      aboutSection.querySelector(target).classList.add("active-tab");
    }
  });
  // tabs toggle end  
}