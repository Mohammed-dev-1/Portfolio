export default function portfolioSetting() {
  const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        popup = document.querySelector(".portfolio-popup"),
        projectDetailsContainer = popup.querySelector(".pp-details"),
        popupPageLoader = popup.querySelector(".pp-loader"),
        prevButton = document.querySelector(".pp-prev"),
        nextButton = document.querySelector(".pp-next"),
        closeButton = document.querySelector(".pp-close"),
        projectDetailsButton = popup.querySelector(".pp-project-details-btn");
 
  let itemIndex, slideIndex, screenShots;
  
  filterContainer.addEventListener("click", (event) => {
    // to get button is active on filter items
    const filterItemActive = event.target.classList.contains("active-item");
    // to get button is not active on filter items    
    const filterItem = event.target.classList.contains("filter-item");

    // check if filter item is not active
    if(!filterItemActive && filterItem) {
      // get target of item
      const itemTarget = event.target.getAttribute("data-target");

      // remove active class when you click on filter item not active
      filterContainer.querySelector(".active-item")
        .classList.remove("outer-shadow", "active-item");
      
      // set active class to filter item after clicking  
      event.target
        .classList.add("outer-shadow", "active-item");
      
      // to show item detail after check if filter item equal category
      portfolioItems.forEach((item) => {
        if(itemTarget === item.getAttribute("data-category") || itemTarget === "all") {
          // Show item details
          item.classList.remove("hide");            
          item.classList.add("show");            
        } else {
          // Hide item details
          item.classList.remove("show");            
          item.classList.add("hide");
        }
      });
    }
  });

  // When you click on item the popup page is open and set all image path on array
  portfolioItemsContainer.addEventListener("click", (event) => {
    if(event.target.closest(".portfolio-item-inner")) {
      const parentPortfolioItem = event.target.closest(".portfolio-item-inner").parentElement;

      // get index of item after you clicking
      itemIndex = Array.from(parentPortfolioItem.parentElement.children).indexOf(parentPortfolioItem);
      
      // set all image path and remove "," between path
      screenShots = portfolioItems[itemIndex]
        .querySelector(".portfolio-item-img img")
          .getAttribute("data-screenshots")
            .split(",");

      // check if the project has one image, don't show next and previous button 
      if(screenShots.length === 1) {
        nextButton.style.display = "none";
        prevButton.style.display = "none";
      } else {
        nextButton.style.display = "block";
        prevButton.style.display = "block";
      }

      // set thumb image to first image
      slideIndex = 0;

      popupOpen();
      popupSlideShow();
      popupDetails(itemIndex);
    }
  })

  function popupOpen() {
    // to open item popup page 
    popup
      .classList.toggle("openPopup");
    
    document.body.style.overflowY = "hidden";
  }

  function popupSlideShow() {
    // set path of image array to image src
    const imgSrc = screenShots[slideIndex];
    const popupImage = popup.querySelector(".pp-img");

    popupPageLoader
      .classList.add("set-loader");
    
    popupImage.src = imgSrc;

    popupImage.onload = () => {
      popupPageLoader
        .classList.remove("set-loader");    
    }

    popup.querySelector(".pp-counter")
      .innerHTML = `${slideIndex+1} of ${screenShots.length}`;
  }

  function popupDetails(indexOfItem) {
    // if don't have a project details 
    if(!portfolioItems[indexOfItem].querySelector(".portfolio-item-details")) {
      projectDetailsButton.style.display = "none";
      return;
    }
    projectDetailsButton.style.display = "block";

    const details = portfolioItems[indexOfItem]
    .querySelector(".portfolio-item-details").innerHTML;
    
    const title = portfolioItems[indexOfItem]
      .querySelector(".portfolio-item-title").innerHTML;

    const category = portfolioItems[indexOfItem]
      .getAttribute("data-category");

    popup.querySelector(".pp-project-details").innerHTML = details;
    popup.querySelector(".pp-title h2").innerHTML = title;
    popup.querySelector(".pp-title p .pp-project-category").innerHTML = category.split("-").join(" ");
  }

  // to show next image on slide
  nextButton.addEventListener('click', () => {
    if(slideIndex === screenShots.length-1)
      slideIndex = 0;
    else 
      slideIndex++;

    popupSlideShow();
  });

  // to show previous image on slide
  prevButton.addEventListener('click', () => {
    if(slideIndex === 0)
      slideIndex = screenShots.length - 1;
    else 
      slideIndex--;

    popupSlideShow();
  });

  // to show project details
  projectDetailsButton.addEventListener('click', () => {
    if(projectDetailsContainer.classList.contains("show-project-details")) {
      projectDetailsButton.querySelector("i")
        .classList.add("fa-plus");
 
      projectDetailsButton.querySelector("i")
        .classList.remove("fa-minus");

      projectDetailsContainer
        .classList.remove("show-project-details");
    } else {
      projectDetailsButton.querySelector("i")
        .classList.remove("fa-plus");
 
      projectDetailsButton.querySelector("i")
        .classList.add("fa-minus");
           
      projectDetailsContainer
        .classList.add("show-project-details");
    }
  });

  // to close popup page 
  closeButton.addEventListener('click', () => {
    // to close item popup page
    popup
      .classList.remove("openPopup");
    
    projectDetailsContainer
      .classList.remove("show-project-details");
    
    projectDetailsButton.querySelector("i")
      .classList.add("fa-plus");

    projectDetailsButton.querySelector("i")
      .classList.remove("fa-minus");

    document.body.style.overflowY = "scroll";
  });
}