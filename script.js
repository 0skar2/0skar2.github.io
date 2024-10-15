function idfk() {
    alert("hii")
}
function mm() {
    alert("idfk what to say here")
}

function openIframeAsWindow(url) {
    const newWindow = window.open(url, 'myIframe', 'width=600,height=400');
    if (newWindow) {
        newWindow.onload = function() {
            // Access the iframe's content
            const iframe = document.getElementById('myIframe');
            iframe.src = url; // Load the URL into the iframe
        };
    } else {
        alert('Please allow popups for this website');
    }
}