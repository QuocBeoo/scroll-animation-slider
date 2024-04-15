let layer = document.querySelector('.layer');
window.addEventListener('scroll', function () {
    let value = this.window.scrollY;
    layer.style.left = value * 1.3 + 'px';
})