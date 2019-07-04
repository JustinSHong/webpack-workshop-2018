import nav from "./nav";
import { top, bottom } from "./footer";
import createBtn from "./button";
import { makeColorStyle } from "./button-styles";

console.log("nav", nav());
console.log("top", top);
console.log("bottom", bottom);
console.log("my first button is", createBtn("click here"));
console.log("color style", makeColorStyle("cyan"));
