var rels = document.getElementsByClassName("__reducto__");
for(i = rels.length - 1; i >= 0; i--) {
    rels[i].parentNode.removeChild(rels[i]);
}