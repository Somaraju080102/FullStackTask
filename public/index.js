const boxes = document.querySelectorAll('.pricing-box');

boxes.forEach((box) => {
    const boxContent = box.querySelector('.box-content');

    box.addEventListener('click', (event) => {
        if (!event.target.closest('.options')) { 
            boxes.forEach((otherBox) => {
                if (otherBox !== box && otherBox.classList.contains('expanded')) {
                    otherBox.classList.remove('expanded');
                    const otherBoxContent = otherBox.querySelector('.box-content');
                    otherBoxContent.style.display = 'none'; 
                }
            });

            if (box.classList.contains('expanded')) {
                box.classList.remove('expanded');
                boxContent.style.display = 'none'; 
                console.log('Box collapsed');
            } else {
                box.classList.add('expanded');
                boxContent.style.display = 'block'; 
                console.log('Box expanded');
            }
        }
    });

    const options = box.querySelectorAll('.options button');
    options.forEach((option) => {
        option.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const color = event.target.dataset.color;
            console.log(`Selected color: ${color}`);
        });
    });
});
