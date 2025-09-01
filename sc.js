document.addEventListener('DOMContentLoaded', () => {
    // Password (should be verified server-side in production)
    const correctPassword = "9464";

    // Check password
    function checkPassword() {
        const input = document.getElementById("passwordInput").value;
        const warning = document.getElementById("warningMessage");
        if (input === correctPassword) {
            document.getElementById("passwordContainer").style.display = "none";
            document.getElementById("content").style.display = "flex";
            warning.style.display = "none";
        } else {
            warning.style.display = "block";
        }
    }

    // Attach event listener to the submit button
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', checkPassword);

    // Disable right-click
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });

    // Disable common developer tools shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    document.addEventListener("keydown", function(e) {
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && e.key === "I") || 
            (e.ctrlKey && e.key === "U") || 
            (e.ctrlKey && e.key === "u")) {
            e.preventDefault();
        }
    });

    // Obfuscated function to disable console.log
    (function(){
        var _0x1f2a=["console","log"];
        window[_0x1f2a[0]][_0x1f2a[1]]=function(){};
    })();

    // Detect if developer tools are open
    function detectDevTools() {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = "<h1>Developer Tools Detected! Access Denied.</h1>";
        }
    }
    setInterval(detectDevTools, 1000);

    // Prevent text selection
    document.addEventListener("selectstart", function(e) {
        e.preventDefault();
    });
});