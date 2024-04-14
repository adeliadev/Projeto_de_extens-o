document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Do something with the form data, e.g., send it to a server using AJAX

    // For demonstration, let's log the form data to the console
    console.log('Email:', email);
    console.log('Nome:', name);
    console.log('Mensagem:', message);

    // Clear the form fields
    document.getElementById('emailForm').reset();
});
