const card = document.querySelector('.card-container');
const audio = document.querySelector('.audio');
const video = document.querySelector('.render');
audio.loop = true;
video.loop = true;

card.addEventListener('mouseenter', () => {
    audio.play();
    video.play();
});

card.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
    video.pause();
    video.currentTime = 0;
});
