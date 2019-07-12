import nav from "./nav";
import { footer } from "./footer";
import "./footer.css";
import makeButton from "./button";
import "./button.css";
import { makeColorStyle } from "./button-styles";
import imageUrl from "./icon.jpg";
import makeImage from "./image";

console.log("image", imageUrl);

const image = makeImage(imageUrl);
const button = makeButton("first button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
