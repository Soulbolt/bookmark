const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger Button Listener and function
btn.addEventListener("click", (e) => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "images/logo-bookmark.svg");
  }
});

function onTabClick(e) {
  // Remove Active Class From All Tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-b-4",
      "border-softRed",
      "md:border-b-0"
    );
  });

  // Hide All Panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Add Active Class To Current Tab and Panel
  e.target.classList.add("border-b-4", "border-softRed");
  const panelName = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(panelName)[0]
    .classList.remove("hidden");
}
