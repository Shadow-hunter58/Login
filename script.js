const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

if (signUpButton && signInButton) {
    signUpButton.addEventListener('click', function(){
        signInForm.style.display = "none";
        signUpForm.style.display = "flex";
    });

    signInButton.addEventListener('click', function(){
        signInForm.style.display = "flex";
        signUpForm.style.display = "none";
    });
}

function closeForm() {
    document.getElementById("signIn").style.display = "none";
}
function logout() {
        window.location.href = 'logout.php'; 
    }

// Auto-logout after 5 minutes of inactivity
let timeout;
function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        window.location.href = 'logout.php';
    }, 300000); // 5 minutes (300000 ms)
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
