const selectText = document.getElementById("select-text");
selectText.addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const data = getSelectedTextData(textArea);
    console.log("🚀 ~ data:", data);
});
