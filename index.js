// CAROUSEL JS //

const outsider = document.getElementById('carousel');
const distance = 600;

function scrollLft() {
        outsider.scrollBy({
        left: -distance,
        behavior: 'smooth'
    });
    setTimeout(bouncyRight, 300);
}
function scrollRight() {
    outsider.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
    setTimeout(bouncyLeft, 300);
}

// efek bouncy
function bouncyLeft() {
    outsider.scrollBy({
        left: -50,
        behavior: "smooth"
    });
}
function bouncyRight() {
    outsider.scrollBy({
        left: 50,
        behavior: 'smooth'
    });
}

// END CAROUSEL JS //
