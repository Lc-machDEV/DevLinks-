document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
    });

    function fadeInOnScroll() {
        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    fadeInOnScroll(); 
    window.addEventListener("scroll", fadeInOnScroll);
});
