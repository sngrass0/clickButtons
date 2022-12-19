// * changes Login --> Logout
function handleLogin(element) {
    if (element.innerText === 'Login') {
        element.innerText = 'Logout';
    } else {
        element.innerText = 'Login';
    }
}

// * removes element from page
function removeElement(element) {
    element.remove();
}

// * shows popup on page
function handleLiked() {
    alert('Ninja was liked');
}