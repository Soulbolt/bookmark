const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

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
