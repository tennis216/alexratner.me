/**
 * Personal Website - Aurora Mouse Reveal Effect
 */

document.addEventListener('DOMContentLoaded', () => {
    initMouseReveal();
});

/**
 * Mouse reveal effect
 * Creates a "flashlight" that reveals the aurora as you move the mouse
 */
function initMouseReveal() {
    const mask = document.getElementById('revealMask');

    if (!mask) return;

    let mouseX = 50;
    let mouseY = 50;
    let currentX = 50;
    let currentY = 50;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
    });

    // Smooth animation loop
    function animate() {
        // Smooth interpolation for fluid movement
        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        // Update CSS custom properties
        mask.style.setProperty('--mouse-x', `${currentX}%`);
        mask.style.setProperty('--mouse-y', `${currentY}%`);

        requestAnimationFrame(animate);
    }

    animate();

    // Handle touch devices
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = (e.touches[0].clientX / window.innerWidth) * 100;
            mouseY = (e.touches[0].clientY / window.innerHeight) * 100;
        }
    }, { passive: true });
}
