function showHeart() {
    const heart = document.getElementById("heart");
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6">
            <path d="M23.6,0C20.5,0,17.8,1.7,16,4.3C14.2,1.7,11.5,0,8.4,0C3.7,0,0,3.7,0,8.4c0,6.6,11,13.9,15.1,18.2
            c0.5,0.5,1.4,0.5,2,0C21,22.3,32,15,32,8.4C32,3.7,28.3,0,23.6,0z"/>
        </svg>`;
    heart.style.display = "block";
}