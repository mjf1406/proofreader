async function toggleTextarea(element) {
    const inputState = localStorage.getItem("input-state");
    if (inputState === "expanded") {
        localStorage.setItem("input-state", "collapsed");
        userInput.classList.add("opacity-0");
        userInput.classList.remove("opacity-100");
        element.parentNode.classList.toggle("-rotate-90");
        element.parentNode.classList.toggle("rotate-90");
        await sleep(500);
        userInput.classList.toggle("hidden");
    } else if (inputState === "collapsed") {
        localStorage.setItem("input-state", "expanded");
        userInput.classList.toggle("hidden");
        element.parentNode.classList.toggle("-rotate-90");
        element.parentNode.classList.toggle("rotate-90");
        // userInput.classList.remove("opacity-0");
        await sleep(500);
        userInput.classList.add("opacity-100");
    }
}
function attachPopUpToolbarToSelection(selectionData) {
    const range = selectionData.range;
    if (range && !range.collapsed) {
        const rect = range.getBoundingClientRect();
        // Create a temporary element for the tooltip
        let tempDiv = document.createElement("div");
        document.body.appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.left = `${rect.left + window.scrollX}px`;
        tempDiv.style.top = `${rect.top + window.scrollY - 5}px`; // Adjust as necessary
        tempDiv.style.width = "1px"; // Minimal visual impact
        tempDiv.style.height = "1px"; // Minimal visual impact
        tempDiv.style.opacity = "0"; // Make invisible

        tippy(tempDiv, {
            interactive: true,
            content: "Toggle text input area",
            allowHTML: true,
            onHide: () => {
                document.body.removeChild(tempDiv);
            },
        }).show();
    }
}
