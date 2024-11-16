const layoutSelect = document.getElementById("layout");
const propertySelect = document.getElementById("property");
const valueSelect = document.getElementById("value");
const playground = document.getElementById("playground");

const propertyOptions = {
    "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
    "align-items": ["stretch", "flex-start", "center", "flex-end", "baseline"],
    "gap": ["0px", "10px", "20px", "30px", "40px"]
};

populateValues(propertyOptions["justify-content"]);

layoutSelect.addEventListener("change", () => {
    const layout = layoutSelect.value;
    playground.className = `container ${layout === "grid" ? "grid" : ""}`;
    updatePlayground();
});

propertySelect.addEventListener("change", () => {
    const selectedProperty = propertySelect.value;
    populateValues(propertyOptions[selectedProperty]);
    updatePlayground();
});

valueSelect.addEventListener("change", updatePlayground);

function populateValues(values) {
    valueSelect.innerHTML = ""; // Clear existing options
    values.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        valueSelect.appendChild(option);
    });
}

function updatePlayground() {
    const property = propertySelect.value;
    const value = valueSelect.value;

    playground.style.justifyContent = "";
    playground.style.alignItems = "";
    playground.style.gap = "";

    if (property === "justify-content" || property === "align-items" || property === "gap") {
        playground.style[property] = value;
    }
}
