function checkAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('verified') === 'true') {
        localStorage.setItem('accessGranted', 'true');
    }

    if (!localStorage.getItem('accessGranted')) {
        alert('You need to complete the verification first.');
        window.location.href = 'https://boost.ink/6-pn4x?redirect=' + encodeURIComponent(window.location.href + '?verified=true');
    } else {
        document.getElementById('generateBtn').disabled = false;
    }
}

function generateKey() {
    document.getElementById('keyBox').value = 'geezy901';
    localStorage.removeItem('accessGranted'); // Reset access on refresh
}
