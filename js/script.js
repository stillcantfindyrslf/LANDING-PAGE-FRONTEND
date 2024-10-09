document.getElementById('additional-service__title').addEventListener('click', function () {
    const blockCheckBox = document.querySelectorAll('.additional-services-checkbox');
    const arrow = document.getElementById('arrow-services');

    blockCheckBox.forEach(add => {
        if (add.style.display === 'none') {
            add.style.display = 'flex';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            add.style.display = 'none';
            arrow.style.transform = 'rotate(180deg)';
        }
    })
})

function startTime(hours, minutes, seconds) {
    const timeElement = document.getElementById('orderDiscountTime');
    let remainingTime = new Date();

    remainingTime.setHours(hours);
    remainingTime.setMinutes(minutes);
    remainingTime.setSeconds(seconds);

    const interval = setInterval(() => {
        remainingTime.setSeconds(remainingTime.getSeconds() - 1);
        const hoursLeft = remainingTime.getHours();
        const minutesLeft = remainingTime.getMinutes();
        const secondsLeft = remainingTime.getSeconds();
        if(hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0){
            clearInterval(interval);
            timeElement.textContent = '00:00:00';
            return;
        }
        timeElement.textContent =
            String(hoursLeft).padStart(2, '0') + ':' +
            String(minutesLeft).padStart(2, '0') + ':' +
            String(secondsLeft).padStart(2, '0');
    }, 1000);
}

startTime(5, 37, 25);

const menuBtn = document.getElementById("menuBtn");
const arrowBtn = document.getElementById("arrowBtn")
const nav = document.getElementById("menu__body");

const showSideMenu = () => {
    nav.classList.add("show")
    document.body.classList.add("_lock");
};
const hideSideMenu = () => {
    nav.classList.remove("show");
    document.body.classList.remove("_lock");
};

menuBtn.addEventListener("click", showSideMenu);
arrowBtn.addEventListener("click", hideSideMenu);


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const arrowRight = document.querySelector(".arrow-slider-right");
const arrowLeft = document.querySelector(".arrow-slider-left");
const gazelBtn = document.getElementById("gazel-btn");
const kablukBtn = document.getElementById("kabluk-btn");
const trukBtn = document.getElementById("truck-btn");
const buttons = [gazelBtn, kablukBtn, trukBtn];
slides.forEach((slide, index) => {
    if (index !== 0) {
        slide.style.display = "none";
    } else {
        slide.style.display = "flex";
    }
});
const changeSlide = (direction) => {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].style.display = "flex";
    updateButtons(currentSlide);
};
const showSlide = (slideIndex) => {
    slides[currentSlide].style.display = "none";
    currentSlide = slideIndex;
    slides[currentSlide].style.display = "flex";
};
const removeActive = () => {
    document.querySelectorAll(".fleet-btn").forEach((btn) => {
        btn.classList.remove("_active");
    });
};
const updateButtons = (slideIndex) => {
    removeActive();
    buttons[slideIndex].classList.add("_active");
};

arrowLeft.addEventListener("click", () => {
    changeSlide(-1);
});
arrowRight.addEventListener("click", () => {
    changeSlide(1);
});

gazelBtn.addEventListener("click", () => {
    showSlide(0);
    removeActive();
    gazelBtn.classList.add("_active");
});
kablukBtn.addEventListener("click", () => {
    showSlide(1);
    removeActive();
    kablukBtn.classList.add("_active");
});
trukBtn.addEventListener("click", () => {
    showSlide(2);
    removeActive();
    trukBtn.classList.add("_active");
});