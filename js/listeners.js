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

const highlightButton = document.getElementById("highlight");
highlightButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    highlight(selectionData, "yellow");
});

const underlineButton = document.getElementById("underline");
underlineButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    underline(selectionData);
});

const strikeThroughButton = document.getElementById("strikethrough");
strikeThroughButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    strikeThrough(selectionData);
});

const doubleUnderlineButton = document.getElementById("double-underline");
doubleUnderlineButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    doubleUnderline(selectionData);
});

const dashedUnderlineButton = document.getElementById("dashed-underline");
dashedUnderlineButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    dashedUnderline(selectionData);
});

const dottedUnderlineButton = document.getElementById("dotted-underline");
dottedUnderlineButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    dottedUnderline(selectionData);
});

const boxButton = document.getElementById("box");
boxButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    box(selectionData);
});

const circleButton = document.getElementById("circle");
circleButton.addEventListener("click", function () {
    const textArea = document.getElementById("markup");
    const selectionData = getSelectedTextData(textArea);
    circle(selectionData);
});
