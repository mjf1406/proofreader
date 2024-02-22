function getSelectedTextData(node) {
    var text = "";
    var range = null;
    var selection = null;

    // Check if node is directly an input or textarea
    if (
        node &&
        (node.tagName.toLowerCase() === "textarea" ||
            (node.tagName.toLowerCase() === "input" &&
                /^(?:text|search|password|tel|url)$/i.test(node.type)))
    ) {
        if (typeof node.selectionStart === "number") {
            text = node.value.slice(node.selectionStart, node.selectionEnd);
        }
    } else {
        // For other elements, check for selection within the node
        if (window.getSelection) {
            selection = window.getSelection();
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
                // Check if the selection is within the provided node
                if (node.contains(range.commonAncestorContainer)) {
                    text = selection.toString();
                } else {
                    // Reset text, range if selection is outside the node
                    text = "";
                    range = null;
                }
            }
        }
    }

    return { text: text, range: range, selection: selection };
}
function clearSelection(selection) {
    if (!selection) return true;
    if (selection.empty) {
        selection.empty();
        return true;
    } else if (selection.removeAllRanges) {
        selection.removeAllRanges();
        return true;
    }
    return false;
}

function highlightSelection(selection, color) {
    if (!selection) return;
    var range = selection.getRangeAt(0);
    var new_span = document.createElement("span");
    new_span.style.backgroundColor = color;
    new_span.style.padding = "0 3px";
    range.surroundContents(new_span);
}
