function changeColor() {
    const box = document.getElementById("colorBox");
    const colors = ["blue", "red", "yellow", "orange", "green", "purple", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}
document.getElementById("changeColorBtn").addEventListener("click", changeColor);
