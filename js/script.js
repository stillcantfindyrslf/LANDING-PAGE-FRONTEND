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