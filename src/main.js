
import "./style.css";




const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add(
      "bg-[#0f1720]/70",
      "border-b",
      "border-blue-400",
      "backdrop-blur-md"
    );
    header.classList.remove("border-transparent", "backdrop-blur-0");
  } else {
    header.classList.remove(
      "bg-[#0f1720]/70",
      "border-blue-400",
      "backdrop-blur-md"
    );
    header.classList.add("border-transparent", "backdrop-blur-0");
  }
});




