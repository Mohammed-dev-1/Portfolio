export default function navToggle() {
  const buttonOpen = document.getElementById('btn_open');
  const buttonClose = document.getElementById('btn_close');
  const sideBar = document.getElementById('side_bar');
  const fadeOut = document.querySelector(".fade-out-effect");
  const preloader = document.querySelector(".preloader");
  const items = document.getElementById("list_items").querySelectorAll('li');

  buttonOpen.addEventListener('click', ()=> {
    sideBar.classList.add("active-side-bar");
  });
  
  buttonClose.addEventListener('click', ()=> {
    sideBar.classList.remove("active-side-bar");
    
    fadeOutEffect();
  });

  items.forEach(li => {
    li.addEventListener('click', ()=> {
      sideBar.classList.remove("active-side-bar");
    })
  })

  document.addEventListener('click', (event)=> {
    if(event.target.classList.contains("link-item")) {
      if(event.target.hash !== "") {
        event.preventDefault();

        const hash = event.target.hash;

        document.querySelector(".section.active-section")
          .classList.add("hide-section");

        document.querySelector(".section.active-section")
          .classList.remove("active-section");

        document.querySelector(hash)
          .classList.add("active-section");
        
        document.querySelector(hash)
          .classList.remove("hide-section");
        
        sideBar.querySelector(".active")
          .classList.add("outer-shadow", "hover-in-shadow");

        sideBar.querySelector(".active")
          .classList.remove("active", "inner-shadow");
        
        if(sideBar.classList.contains("active-side-bar")) {
          event.target
            .classList.add("active", "inner-shadow");
        
          event.target
            .classList.remove("outer-shadow", "hover-in-shadow");  
        } else {
          let navItem = sideBar.querySelectorAll(".link-item");

          navItem.forEach((item) => {
            if(hash === item.hash) {
              item
                .classList.add("active", "inner-shadow");
          
              item
                .classList.remove("outer-shadow", "hover-in-shadow");            
            }
          });
          fadeOutEffect();
        }

        window.location.hash = hash;
      }
    }
  })

  function fadeOutEffect() {
    fadeOut.classList.add("active-effect");
    
    setTimeout(()=> {
      fadeOut.classList.remove("active-effect");
    }, 300);
  }

  window.addEventListener('load',()=> {
    preloader
      .classList.add("stop-preloader");
    
    setTimeout(()=> {
      preloader.style.display = "none";
    },600)
  })
}