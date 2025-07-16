// see more/less texts
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "See More") {
    readMoreBtn.innerText = "See Less";
  } else {
    readMoreBtn.innerText = "See More";
  }
});
// faqs 1
const faq = document.querySelector(".answer");
// const minusicon = document.getElementById("fa-minus");
// const plus = document.getElementById("fa-plus");
const change = document.querySelector(".changeicon");

function addicon() {
  faq.classList.toggle("answer");
}
change.addEventListener("click", addicon);

//faq 2
const faq2 = document.querySelector(".answer2");
const IconChange = document.querySelector(".changeicon2");

function iconChange() {
  faq2.classList.toggle("answer2");
}
IconChange.addEventListener("click", iconChange);

// faq3
const faq3 = document.querySelector(".answer3");
const Icon = document.querySelector(".changeicon3");

function Iconclick() {
  faq3.classList.toggle("answer3");
}
Icon.addEventListener("click", Iconclick);

// faq4

const question4 = document.querySelector(".answer4");
const IconTap = document.querySelector(".changeicon4");

function iconclick() {
  question4.classList.toggle("answer4");
}
IconTap.addEventListener("click", iconclick);

// seemore button
const seeless = document.querySelector(".SEO-serviceCard2flex-button");
const moretext = document.querySelector(".SEO-serviceCard2flextext");

seeless.addEventListener("click", (e) => {
  moretext.classList.toggle("more");
});

// second seemore btn
const seemore = document.querySelector(".SEO-serviceCard3flex-button");
const more = document.querySelector(".SEO-serviceCard3flextext");

seemore.addEventListener("click", (e) => {
  more.classList.toggle("moree");

});

// Nav drop-down1
const agencyhover = document.querySelector(".agency-nav");
const agencyDrop = document.getElementById("nav-dropdown");
const chevrondown = document.getElementById("chevron-down");

const toggledropDown = (direction) => {
  const height = direction === "up" ? "0px" : "100px";
  agencyDrop.style.height = height;
  if (direction === "down") {
    chevrondown.classList.add("rotate");
  } else {
    chevrondown.classList.remove("rotate");
  }
};
agencyhover.addEventListener("mouseenter", () => toggledropDown("down"));
agencyhover.addEventListener("mouseleave", () => toggledropDown("up"));

// Nav drop-down2
const servicehover = document.querySelector(".service-nav");
const serviceDrop = document.querySelector(".service-drop");
const chevronDown = document.getElementById("chevrondown");

const toggledown = (direction) => {
  const height = direction === "up" ? "0px" : "120px";
  serviceDrop.style.height = height;
  if (direction === "down") {
    chevronDown.classList.add("rotate");
  } else {
    chevronDown.classList.remove("rotate");
  }
};
servicehover.addEventListener("mouseenter", () => toggledown("down"));
servicehover.addEventListener("mouseleave", () => toggledown("up"));

// Nav drop-down3
const casehover = document.querySelector(".case-nav");
const casedropDown = document.getElementById("case-dropdown");
const chevron = document.getElementById("Chevron-down");

const caseToggle = (direction) => {
  const height = direction === "up" ? "0px" : "100px";
  casedropDown.style.height = height;
  if (direction === "down") {
    chevron.classList.add("rotate");
  } else {
    chevron.classList.remove("rotate");
  }
};
casehover.addEventListener("mouseenter", () => caseToggle("down"));
casehover.addEventListener("mouseleave", () => caseToggle("up"));

//  Nav drop-down4
const resourcehover = document.querySelector(".Resource-nav");
const resourcedrop = document.getElementById("Resource-drop");
const chev = document.getElementById("Resource-chevron");

const resourceToggle = (direction) => {
  const height = direction === "up" ? "0px" : "100px";
  resourcedrop.style.height = height;
  if (direction === "down") {
    chev.classList.add("rotate");
  } else {
    chev.classList.remove("rotate");
  }
};

resourcehover.addEventListener("mouseenter", () => resourceToggle("down"));
resourcehover.addEventListener("mouseleave", () => resourceToggle("up"));

// Nav side bar
const sideBarTrigger = document.getElementById("Hambar");
const sideBar = document.getElementById("side-bar");
const miniBar = document.getElementById(" minimize");
const htmlScroll = document.getElementById('htmlScroll');
const bodyscroll = document.getElementById("body");

function togglesideBar() {
  sideBar.style.width = "100%";
    htmlScroll.style.overflow = 'hidden';
    bodyscroll.style.overflow = 'hidden';
}

Hambar.addEventListener("click", togglesideBar);

function togglein() {
  sideBar.style.width = "0px";
htmlScroll.style.overflow ="scroll";
bodyscroll.style.overflow = "scroll"
}
minimize.addEventListener("click", togglein);


// // editing of a div to add circle
// const parentDiv = document.getElementById('firstParent');
//  const hiddendiv = document.getElementById('innerdiv');
// let originalText = document.getElementsByClassName ('realLine');

// parentDiv.originalText = parentDiv.textContent;

// parentDiv.addEventListener('mouseenter', ()=> {
// originalText.style.display = 'none';
// hiddendiv.style.display= "flex";

// });

// parentDiv.addEventListener('mouseleave', ()=> {
// originalText.style.display = "flex";
// hiddendiv.style.display = "flex"
// });



//  const NewDiv = document.createElement('div');
//  NewDiv.classList.add("realWorld-detail");





