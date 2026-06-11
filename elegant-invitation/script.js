// Page Navigation
let currentPage = 1;
const totalPages = 8;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageCounter = document.getElementById('pageCounter');
const invitationContainer = document.querySelector('.invitation-container');

// Get all pages
const pages = document.querySelectorAll('.page');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
    loadWishes();
});

// Show specific page
function showPage(pageNum) {
    // Remove active class from all pages
    pages.forEach(page => {
        page.classList.remove('active', 'prev');
    });

    // Add active class to current page
    const currentPageEl = document.querySelector(`[data-page="${pageNum}"]`);
    if (currentPageEl) {
        currentPageEl.classList.add('active');
    }

    // Update navigation
    updateNavigation();
}

// Update navigation buttons
function updateNavigation() {
    pageCounter.textContent = `${currentPage} / ${totalPages}`;

    if (currentPage === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentPage === totalPages) {
        nextBtn.textContent = 'Finished! 🎉';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

// Navigate to next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    } else {
        // Option: Loop back to start or show a thank you message
        alert('Thank you for viewing our invitation! We look forward to seeing you on July 25, 2026!');
    }
}

// Navigate to previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});

// Touch/Swipe navigation
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextPage(); // Swipe left = next
    } else if (touchEndX > touchStartX + 50) {
        prevPage(); // Swipe right = previous
    }
}

invitationContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

invitationContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

// Envelope opening animation
const envelope = document.querySelector('.envelope');
const envelopePage = document.querySelector('[data-page="1"]');

if (envelope) {
    envelope.addEventListener('click', () => {
        nextPage();
    });

    envelopePage.addEventListener('click', () => {
        nextPage();
    });
}

// Wishes Form
const wishesForm = document.getElementById('wishesForm');
if (wishesForm) {
    wishesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('wishName').value;
        const message = document.getElementById('wishMessage').value;

        if (name.trim() && message.trim()) {
            addWish(name, message);
            wishesForm.reset();
        }
    });
}

// Add wish to list
function addWish(name, message) {
    const wishes = getWishes();
    wishes.unshift({ name, message, timestamp: new Date().toISOString() });
    localStorage.setItem('invitationWishes', JSON.stringify(wishes));
    displayWishes();
}

// Get wishes from localStorage
function getWishes() {
    const stored = localStorage.getItem('invitationWishes');
    return stored ? JSON.parse(stored) : [];
}

// Display wishes
function displayWishes() {
    const wishes = getWishes();
    const wishesDisplay = document.getElementById('wishesDisplay');

    if (wishesDisplay) {
        wishesDisplay.innerHTML = wishes.map(wish => `
            <div class="wish-item">
                <div class="wish-name">💝 ${wish.name}</div>
                <div class="wish-message">"${wish.message}"</div>
            </div>
        `).join('');
    }
}

// Load wishes on page load
function loadWishes() {
    displayWishes();
}

// Mouse wheel navigation (optional)
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        nextPage();
    } else if (e.deltaY < 0) {
        prevPage();
    }
}, { passive: true });

// Prevent double-click zoom on mobile
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Show initial state
console.log('🎀 Welcome to Amr & Reem\'s Wedding Invitation!');
console.log('Tap the envelope to begin your journey...');
