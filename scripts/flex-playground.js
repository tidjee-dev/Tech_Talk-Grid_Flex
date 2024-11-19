"use strict";
/**
 * Generic function to update a property of a container.
 * @param {string} inputName - The name of the input group (e.g., 'flex-dir', 'justify-content').
 * @param {keyof CSSStyleDeclaration} property - The CSS property to update (e.g., 'flex-direction', 'justify-content').
 * @param {HTMLElement} container - The container element to apply the styles to.
 */
const setupProperty = (inputName, property, container) => {
  const inputs = document.querySelectorAll(`input[name="${inputName}"]`);
  if (!inputs) return;
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        container.style[property] = input.value;
      }
    });
  });
};
const setupGap = () => {
  const gapValueInput = document.getElementById("gap-value");
  const gapUnitInput = document.getElementById("gap-unit");
  const updateGap = () => {
    const gapValue = gapValueInput.value || "0";
    const gapUnit = gapUnitInput.value || "px";
    container.style.gap = `${gapValue}${gapUnit}`;
  };
  gapValueInput.addEventListener("input", updateGap);
  gapUnitInput.addEventListener("input", updateGap);
};
const container = document.querySelector("#preview-content");
setupProperty("flex-dir", "flexDirection", container);
setupProperty("justify-content", "justifyContent", container);
setupProperty("align-items", "alignItems", container);
setupProperty("flex-wrap", "flexWrap", container);
setupGap();