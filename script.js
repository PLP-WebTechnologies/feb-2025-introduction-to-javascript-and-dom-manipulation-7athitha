// Change text content and style
document.getElementById("change-text-btn").addEventListener("click", () => {
    const heading = document.getElementById("main-heading");
    heading.textContent = "You just changed this heading!";
    heading.classList.toggle("highlight");
});

// Add or remove a new element
document.getElementById("toggle-element-btn").addEventListener("click", () => {
    const container = document.getElementById("container");
    const existingBox = document.getElementById("dynamic-box");

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const newBox = document.createElement("div");
        newBox.id = "dynamic-box";
        newBox.textContent = "I'm a new element added by JavaScript!";
        container.appendChild(newBox);
    }
});