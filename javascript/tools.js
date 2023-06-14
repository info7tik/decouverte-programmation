function executeCode() {
    let textarea = document.getElementById("user-code");
    console.log(textarea.value)
    eval(textarea.value);
}

function afficher(userText) {
    let ouputDiv = document.getElementById("user-output");
    ouputDiv.innerHTML = userText;
}