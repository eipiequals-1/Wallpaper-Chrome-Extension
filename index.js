let idx = 0;  // image index
const timeout = 10 * 1000;  // 10 seconds
const imageUrls = [
    "https://wallpaperaccess.com/full/38582.jpg",
    "https://images.hdqwalls.com/wallpapers/snowy-blue-mountains-4k-e5.jpg",
    "https://wallpaper.dog/large/10792515.jpg"
];

function carousel() {
    const body = document.getElementsByTagName("body")[0];
    const url = imageUrls[idx % imageUrls.length];
    // set the new background image
    body.style.background = `url(${url})`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";

    idx++;
    setTimeout(carousel, timeout);
}

carousel();
