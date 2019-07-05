// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = buttonName => {
    const label = `Button: ${buttonName}`;

    const button = document.createElement("button");
    button.innerText = label;

    return button;
};

export default makeButton;
