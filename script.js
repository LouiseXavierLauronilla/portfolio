document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["lightcoral", "lightgreen", "lightpink", "lightyellow", "lightgray", "skyblue"];
    const box = document.getElementById("colorBox");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
});
