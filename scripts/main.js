var i=0,typingText;
typingText = "Art Color Team"

function typing() {
    if (i<typingText.length) {
        document.getElementById("text").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();
