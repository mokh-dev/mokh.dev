const main = document.querySelector("main");

// #region ----Header----

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});

document.addEventListener("DOMContentLoaded", showHeader);

function showHeader() {
  primaryHeader.removeAttribute("data-hide-header");
}

function hideHeader() {
  primaryHeader.setAttribute("data-hide-header", "");

  if (primaryNav.hasAttribute("data-visible") == true) {
    primaryNav.removeAttribute("data-visible");
  }
}
let oldValue;

main.addEventListener("scroll", () => {
  newValue = main.scrollTop;

  if (oldValue - newValue < 0) {
    hideHeader();
  } else if (oldValue - newValue > 0) {
    showHeader();
  }

  oldValue = newValue;
});

// #endregion

// #region ----Navigation----

// FAILED SMOOTH SCROLLING

// function NavScroll(elementName) {
//   const scrollLoc = document.querySelector(elementName);
//   console.log(scrollLoc);
//   scrollLoc.scrollIntoView({ behavior: "smooth" });
//   const href = document.querySelector(elementName);
//   $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
// }

// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();

//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });

// #endregion

// #region ----Terminal----

// Mobile Only Folder Toggle

const terminalFolderToggle = document.querySelector(".terminal-bar-title-icon");
const terminalExplorer = document.querySelector(".terminal-explorer");

terminalFolderToggle.addEventListener("click", () => {
  if (terminalExplorer.hasAttribute("data-explorer-open")) {
    terminalExplorer.removeAttribute("data-explorer-open");
    terminalFolderToggle.src = "SVG/folderClosed.svg";
  } else {
    terminalExplorer.setAttribute("data-explorer-open", "");
    terminalFolderToggle.src = "SVG/folderOpened.svg";
  }
});

// Terminal Logic

// #region Terminal Stored HTML Code

// const spellEvatorReadMe = `
//   <h2></h2>

// `;

// #endregion

const terminalOutput = document.querySelector(".terminal-output");


var terminalFiles = {
  ReadMe: `<h2>Welcome</h2><hr><br><p>This is the project terminal. where you can find all of my programming related projects. You can use the file explorer to find and select a project you want to see. Currently there isn't much here because college is time consuming. so I don't have the time to work on the website (probably just procrastinating), but for now you can check out what I do have in the file explorer.</p>`,
  HelloWorld: `<h2>Python Projects</h2><hr><br><p>Python was the first programming language I learned because it was the easiest to understand, but the more time you put into learning it the more you see just how many things you can make with it. You can find my projects and their source code on my GitHub.</p>`,
  Game: `<h2>Unity Games</h2><hr><br><p>I have made a lot of Games, sometimes I make them for a game jam but usually I make them for fun, some of them turn out good and some others not so much, you can see for yourself which ones you like on my Itch page.</p>`,
};

function LoadTerminalFile(fileName) {
  terminalOutput.innerHTML = terminalFiles[fileName];
}

// #endregion

// #region ----Artist----

// const artPieces = document.querySelectorAll(".artist-image-description");

// function ShowImageDescription(elementID) {
//   console.log("show");
//   document.querySelector(elementID).toggleAttribute("data-show");
// }

var selectedArtID = 0;

const artPieces = document.querySelectorAll(".artist-image-description");
const artWrapppers = document.querySelectorAll(".artist-gallery-cell");

function ShowImageDescription(i) {
  return function () {
    selectedArtID = i;

    for (let index = 0; index < artPieces.length; index++) {
      artPieces[index].removeAttribute("data-show");
    }
    artPieces[selectedArtID].setAttribute("data-show", "");
  };
}

for (var i = 0; i < artPieces.length; i++) {
  if (window.innerWidth <= 1023) {
    artWrapppers[i].addEventListener("click", ShowImageDescription(i));
  }
}

// #endregion ____Artist____

// #region ----Experience----

// experience scroller
const scroller = document.querySelectorAll(".experience-scroller-wrapper");

const scrollerInner = document.querySelector(".experience-scroller");

const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  scrollerInner.appendChild(duplicatedItem);
});

// experience certificates

var selectedCardID = 0;

const experienceCards = document.querySelectorAll(".experience-certificate-card-item");
const sliderNavButtons = document.querySelectorAll(".experience-certificate-slider-button");

const sliderNavLeftArrow = document.querySelector(".experience-certificate-slider-left-arrow");
const sliderNavRightArrow = document.querySelector(".experience-certificate-slider-right-arrow");

function RefreshSlider() {
  for (let index = 0; index < experienceCards.length; index++) {
    experienceCards[index].removeAttribute("data-shown");
  }

  for (let index = 0; index < sliderNavButtons.length; index++) {
    sliderNavButtons[index].removeAttribute("data-button-selected");
  }

  experienceCards[selectedCardID].setAttribute("data-shown", "");
  sliderNavButtons[selectedCardID].setAttribute("data-button-selected", "");
}

for (var i = 0; i < sliderNavButtons.length; i++) {
  sliderNavButtons[i].addEventListener("click", SliderNavButtonClick(i));
}

function SliderNavButtonClick(i) {
  return function () {
    selectedCardID = i;

    RefreshSlider();
  };
}

sliderNavLeftArrow.addEventListener("click", () => {
  if (selectedCardID == 0) {
    selectedCardID = sliderNavButtons.length - 1;
  } else {
    selectedCardID--;
  }

  RefreshSlider();
});

sliderNavRightArrow.addEventListener("click", () => {
  if (selectedCardID == sliderNavButtons.length - 1) {
    selectedCardID = 0;
  } else {
    selectedCardID++;
  }

  RefreshSlider();
});

// #endregion
