document.addEventListener("DOMContentLoaded", () => {
    const slogan = document.querySelector(".slogan");
    let text = slogan.textContent;
    slogan.textContent = "";

    // Animation de texte lettre par lettre
    text.split("").forEach((char, i) => {
        let span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.animation = `fadeInLetter 0.5s ${i * 0.1}s forwards`;
        slogan.appendChild(span);
    });
});

/* Animation pour chaque lettre */
const style = document.createElement("style");
style.innerHTML = `
    @keyframes fadeInLetter {
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
