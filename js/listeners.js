const selectTextDiv = document.getElementById("select-text-paragraph");
selectTextDiv.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const data = getSelectedTextData(textArea);
    console.log("🚀 ~ data:", data);
});

const expandCollapseButton = document.getElementById("expand-collapse");
expandCollapseButton.addEventListener("click", async function () {
    await toggleTextarea(this);
});

const userInput = document.getElementById("user-input");
userInput.addEventListener("input", async function () {
    const text = this.value;
    const paragraphs = text.split("\n");

    const markupDiv = document.getElementById("markup");
    markupDiv.innerHTML = "";

    for (let index = 0; index < paragraphs.length; index++) {
        const element = paragraphs[index];
        const p = document.createElement("p");
        p.innerText = element;
        p.classList.add("mb-5");
        markupDiv.appendChild(p);

        await sleep(500);

        await toggleTextarea(expandCollapseButton);
    }
});

document.addEventListener("selectionchange", async function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);

    attachPopUpToolbarToSelection(selectionData);
});
