document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal-content').style.visibility = "visible";
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal-content').style.visibility = "hidden";
    modal.classList.remove('modal-closing');
});
  });
