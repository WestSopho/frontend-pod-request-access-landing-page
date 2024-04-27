var warningDiv = document.getElementById('warning');
var form = document.getElementById('form');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

// Behavior for Submit button outside the input
document.getElementById('submit-outside').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        warningDiv.innerText = '';
        form.submit();
        
    } else {
        warningDiv.innerText = 'Oops! Please check your email';
    }
});

//Behavior for Submit button inside the input
document.getElementById('submit-inside').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        warningDiv.innerText = '';
        form.submit();
    } else {
        warningDiv.innerText = 'Oops! Please check your email';
    }
});