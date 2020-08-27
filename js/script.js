function send() {
    let eType = document.getElementById("sections").value;

    if (eType === "0") {
        alert("Choose an Event Type!");
    } else {
        alert("Task submitted!");
    }
}