const avatar = document.getElementById('avatar');
const borderRadius = document.getElementById('border-radius');
const borderColor = document.getElementById('border-color');
const upload = document.getElementById('upload');
const imageButtons = document.querySelectorAll('button[data-image]');

borderRadius.addEventListener('input', (event) => {
    avatar.style.borderRadius = `${event.target.value}px`;
});

borderColor.addEventListener('input', (event) => {
    avatar.style.borderColor = event.target.value;
});

imageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        avatar.src = event.target.dataset.image;
    });
});

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        avatar.src = event.target.result;
    };

    reader.readAsDataURL(file);
});