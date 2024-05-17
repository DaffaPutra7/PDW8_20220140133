(function() {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            // Jika form tidak valid, mencegah pengiriman
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Mencegah form dari pengiriman
                document.getElementById('confirmationMessage').innerHTML = '<div class="alert alert-success" role="alert">Pesan Telah Di Submit</div>';
                form.reset();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').classList.remove('was-validated');
    document.getElementById('confirmationMessage').innerHTML = '';
}