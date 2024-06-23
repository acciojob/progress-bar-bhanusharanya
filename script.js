const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value === '') {
            if (index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});

// Function to handle form submission and alert first and last name
function getFormvalue() {
    // Get the form element
    const form = document.getElementById('form1');
    
    // Get the values of first and last name from the form
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Alert the full name
    alert(`${firstName} ${lastName}`);
}
