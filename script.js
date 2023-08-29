document.addEventListener("DOMContentLoaded", function() {
    const clickButton = document.getElementById("clickButton");
    const clickCount = document.getElementById("clickCount");

    function updateClickCountDisplay(count) {
        clickCount.textContent = `${count} clique${count !== 1 ? "s" : ""}`;
    }

    function updateClickCount() {
        fetch("update.php")
            .then(response => response.text())
            .then(count => {
                updateClickCountDisplay(count);
            });
    }

    clickButton.addEventListener("click", function() {
        fetch("click.php")
            .then(response => response.text())
            .then(count => {
                updateClickCountDisplay(count);
            });
    });

    updateClickCount();
});
