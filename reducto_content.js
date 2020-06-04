var sel = document.getSelection();

var text = sel.toString();

var blackspan = document.createElement("span");
blackspan.style.cssText = "background-color:black;color:black;";
blackspan.className += " __reducto__";
if(text.substr(-1) == "\n") {
    blackspan.textContent = text.substr(0, text.length - 1);
} else {
    blackspan.textContent = text;
}

if(sel.extentNode.nodeType == 3) {
    sel.deleteFromDocument();
    sel.collapseToStart();
    sel.getRangeAt(0).insertNode(blackspan);
} else {
    var el = sel.baseNode.parentElement;
    el.style = "background-color:black; color: black;"
    el.className += " __reducto__";
}

sel.removeAllRanges();