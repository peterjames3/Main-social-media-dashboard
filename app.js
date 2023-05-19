const modeEl = document.querySelector("#mode");
const bodyEl = document.querySelector("body");
const sliderEl = document.querySelector(".slider");
const headerEl = document.querySelector(".header");
const colEls = document.querySelectorAll("#coll");
const toggleLowers = document.querySelectorAll(".grind-items");
const subTitle = document.querySelector("#sub-title");






const defaultColor = window.getComputedStyle(headerEl).color;
const defaultcolEl = window.getComputedStyle(colEls[0]).backgroundColor;
const grindColors = window.getComputedStyle(toggleLowers[0]).backgroundColor;
const subTitleColor = window.getComputedStyle(subTitle).color;

let isLightMode = false;

function toggleMode() {
  if (!isLightMode) {
    bodyEl.classList.add("whitemode");
    modeEl.textContent = "Light Mode";
    headerEl.style.color = "black";
    subTitle.style.color = "black";
    isLightMode = true;

    Array.from(colEls).forEach((colEl) => {
      colEl.style.backgroundColor = "rgb(202, 193, 193)";
    });
    Array.from(toggleLowers).forEach((toggleLower) => {
      toggleLower.style.backgroundColor = "rgb(202, 193, 193)";
    });
  } else {
   
    bodyEl.classList.remove("whitemode")
    headerEl.style.color = defaultColor;
    modeEl.textContent = "Dark Mode";
    subTitle.style.color = subTitleColor;
    isLightMode = false;

    Array.from(colEls).forEach((colEl) => {
      colEl.style.backgroundColor = defaultcolEl;
    });
    Array.from(toggleLowers).forEach((toggleLower) => {
      toggleLower.style.backgroundColor = grindColors;
    });
  }
}
sliderEl.addEventListener("click", toggleMode);

//Event delegation
/* function attachEventListeners() {
  bodyEl.addEventListener("click", (event) => {
    if (event.target === sliderEl) {
      toggleMode();
    }
  });
}

attachEventListeners(); */

//*To convert NodeList into array use Array.from(); or Spread operator
/* const nodeList = document.querySelectorAll(".some-selector");
const array = Array.from(nodeList).forEach((nodeList)=>{
    nodeList.classList.add("toggle");
})
const Arrays = [...nodeList].forEach((nodeList)=>{
    nodeList.classList.remove("toggle");
}) 
 */