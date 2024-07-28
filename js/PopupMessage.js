document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    showPopup();
});

function showPopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "block";
}

function closePopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("popupModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
