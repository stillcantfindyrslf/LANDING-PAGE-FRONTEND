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