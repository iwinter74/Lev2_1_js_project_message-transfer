function compare() {
    console.log("test")
    let message = document.getElementById("message1").value
    console.log(message)
    if (message != "") {
        document.getElementById("message2").innerHTML = message
    }
    else {
        document.getElementById("empty").innerHTML = "Gib bitte eine Nachricht ein!"
    }
}