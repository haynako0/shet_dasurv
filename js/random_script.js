const counterText = document.getElementById("counterText");
let counter = 0;

function updateCounter() {
    counterText.textContent = "Total number of dasurvs: " + counter + " times";
}

function buttonClicked() {
    counter++;
    updateCounter();

    playRandomAudio();

    const randomImage = document.createElement('img');
    randomImage.src = getRandomImageSrc();
    randomImage.className = 'random-image';
    randomImage.style.position = 'absolute';
    randomImage.style.top = '20%';
    randomImage.style.left = '100%';
    randomImage.style.width = '100px';
    document.body.appendChild(randomImage);

    animateImage(randomImage);
}

function playRandomAudio() {
    const audio = new Audio();
    const random = Math.random() * 100;

    if (random < 49.99) {
        audio.src = "mp3/audio1.mp3";
    } else if (random < 99.98) {
        audio.src = "mp3/audio2.mp3";
    } else {
        audio.src = "mp3/audio3.mp3";
    }

    audio.play();
}

function animateImage(imageElement) {
    let position = window.innerWidth;

    const intervalId = setInterval(() => {
        position -= 10;

        if (position < -imageElement.width) {
            clearInterval(intervalId);
            imageElement.remove();
        } else {
            imageElement.style.left = position + 'px';
        }
    }, 5);
}

function getRandomImageSrc() {
    const images = ["img/rng/image1.jpg", "img/rng/image2.jpg", "img/rng/image3.jpg", "img/rng/image4.jpg", "img/rng/image5.jpg"];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
