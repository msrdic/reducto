var text = document.getSelection().toString();
var blackspan = document.createElement("span");
blackspan.style.cssText = "background-color:black;color:black;";
blackspan.className += " __reducto__";
if(text.substr(-1) == "\n") {
    blackspan.textContent = text.substr(0, text.length - 1);
} else {
    blackspan.textContent = text;
}

if(document.getSelection().extentNode.nodeType == 3) {
    document.getSelection().deleteFromDocument();
    document.getSelection().collapseToStart();
    document.getSelection().getRangeAt(0).insertNode(blackspan);
} else {
    var el = document.getSelection().baseNode.parentElement;
    el.style = "background-color:black; color: black;"
    el.className += " __reducto__";
}