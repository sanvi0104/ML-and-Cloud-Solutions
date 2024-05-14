const mouseBackground = document.getElementById("mouseBackground");
const overlay = document.createElement("div");
overlay.classList.add("mouse-background-overlay");
mouseBackground.appendChild(overlay);

mouseBackground.addEventListener("mousemove", (e) => {
  overlay.style.display = "block";
  overlay.style.left = e.clientX - 5 + "px";
  overlay.style.top = e.clientY - 5 + "px";
  overlay.style.width = "1px";
  overlay.style.height = "1px";
});

mouseBackground.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
});
