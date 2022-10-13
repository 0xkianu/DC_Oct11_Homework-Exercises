const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('div.circle');

let currentActive = 1;


next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('div.active');
    progress.style.width = (actives.length - 1)   / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    if(currentActive === 2) {
        window.open('flexboxLayouts/flexboxLayouts.html', '_blank');
    } else if(currentActive === 3) {
        window.open('mondrianPainting/mondrianPainting.html', '_blank');
    } else if(currentActive === 4) {
        window.open('inputAddOns/inputAddOns.html', '_blank');
    } else if(currentActive === 5) {
        window.open('navigation/navigation.html', '_blank');
    } else if(currentActive === 6) {
        window.open('chessBoard/chessBoard.html', '_blank');
    } else if(currentActive === 7) {
        window.open('threeColumnLayout/threeColumnLayout.html', '_blank');
    } else if(currentActive === 8) {
        window.open('centerButton/centerButton.html', '_blank');
    }
}