import "./_components.js";
import { burger } from "./functions/burger.js";
import { renderSquircle } from "corner-smoothing";

document.querySelectorAll(".corner-smooth-50").forEach((el) => {
  renderSquircle(el, {
    cornerRadius: 50,
  });
});
