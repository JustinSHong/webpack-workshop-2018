import nav from "./nav";
import { footer } from "./footer";
import "./footer.css";
import makeButton from "./button";
import "./button.css";
import { makeColorStyle } from "./button-styles";

const button = makeButton("first button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(footer);
