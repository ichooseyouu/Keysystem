function checkAccess() {
    localStorage.removeItem('accessGranted'); // Reset access on refresh
    alert('You need to complete the verification first.');
    window.location.href = 'https://boost.ink/6-pn4x';
}

function generateKey() {
    document.getElementById('keyBox').value = 'geezy901';
}
