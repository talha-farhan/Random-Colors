const btn = document.querySelector("#colors");
const h1 = document.querySelector("h1");

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});
