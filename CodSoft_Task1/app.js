/* Slider */
function imgSlider(product, bgColor) {
    var image = document.querySelector('.cocacola');
    image.src = `img/${product}.png`;
    changeBgColor(bgColor);

    // Hide all text boxes
    var textboxes = document.querySelectorAll('.text-box');
    textboxes.forEach(function (textbox) {
        textbox.style.display = 'none';
    });

    // Show the selected text box
    var selectedTextBox = document.getElementById(`${product}-text`);
    if (selectedTextBox) {
        selectedTextBox.style.display = 'block';
    }
}


/* Cambiar color */
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

/* Menu Responsive */

function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}