function highlight(selectedTextData, color) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.style.backgroundColor = color;
    new_span.classList.add("text-black");
    range.surroundContents(new_span);
}

function underline(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add("underline");
    range.surroundContents(new_span);
}

function strikeThrough(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add("line-through");
    range.surroundContents(new_span);
}

function doubleUnderline(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add(
        "underline",
        "underline-offset-8",
        "border-b",
        "border-solid",
        "border-white"
    );
    range.surroundContents(new_span);
}

function dashedUnderline(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add("border-b", "border-dashed", "border-white");
    range.surroundContents(new_span);
}

function dottedUnderline(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add("border-b", "border-dotted", "border-white");
    range.surroundContents(new_span);
}

function box(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add("border-2", "border-solid", "border-white");
    range.surroundContents(new_span);
}

function circle(selectedTextData) {
    if (!selectedTextData) return;
    var range = selectedTextData.selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.classList.add(
        "border-2",
        "border-solid",
        "border-white",
        "rounded-full",
        "px-2"
    );
    range.surroundContents(new_span);
}
