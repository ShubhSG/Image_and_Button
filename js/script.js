var btn = document.getElementById('xbutton');
var img = document.getElementById('ximage');
btn.addEventListener("click", ev => {
    if (btn.textContent === 'Hide') {
        btn.textContent = 'Display';
        img.style.display = 'None';
    } else {
        btn.textContent = 'Hide';
        img.style.removeProperty("display")
    }
});