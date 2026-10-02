
function showColor() {
    const selected = document.querySelector('input[name="fav_color"]:checked');

    if (!selected) {
        alert("Please choose a color first.");
        return;
    }

    const color = selected.value;

    document.getElementById("colorCircle").setAttribute("fill", color);
    document.getElementById("resultText").textContent = "You chose: " + color;
}
