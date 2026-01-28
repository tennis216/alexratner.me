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

/**
 * Resume protection modal
 * Requires user interaction to access resume - blocks automated bots
 */
function openResumeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});
