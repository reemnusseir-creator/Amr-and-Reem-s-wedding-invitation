// Countdown Timer
function startCountdown() {
    const weddingDate = new Date('July 25, 2026 18:00:00').getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.countdown-container h3').textContent = 'The Big Day is Here! 🎉';
        }
    }, 1000);
}

// RSVP Form Handling
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const attendance = this.querySelector('select').value;

    // Create mailto link
    const subject = encodeURIComponent(`RSVP from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nAttendance: ${attendance}`);
    window.location.href = `mailto:amrend.reem@gmail.com?subject=${subject}&body=${body}`;

    // Alert the user
    alert(`Thank you for your RSVP, ${name}! We'll contact you soon.`);
    this.reset();
});

// Wishes Form Handling
document.getElementById('wishesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const wishes = this.querySelector('textarea').value;

    // Add wish to display
    const wishItem = document.createElement('div');
    wishItem.className = 'wish-item';
    wishItem.innerHTML = `
        <p class="wish-text">"${wishes}"</p>
        <p class="wish-author">- ${name}</p>
    `;

    const wishList = document.getElementById('wishesDisplay');
    wishList.insertBefore(wishItem, wishList.firstChild);

    // Store in localStorage
    let wishes_stored = JSON.parse(localStorage.getItem('wishes')) || [];
    wishes_stored.unshift({ name, wishes });
    localStorage.setItem('wishes', JSON.stringify(wishes_stored));

    // Show success message
    alert(`Thank you for your wishes, ${name}!`);
    this.reset();
});

// Load wishes from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    
    const storedWishes = JSON.parse(localStorage.getItem('wishes')) || [];
    const wishList = document.getElementById('wishesDisplay');
    
    storedWishes.forEach(wish => {
        const wishItem = document.createElement('div');
        wishItem.className = 'wish-item';
        wishItem.innerHTML = `
            <p class="wish-text">"${wish.wishes}"</p>
            <p class="wish-author">- ${wish.name}</p>
        `;
        wishList.appendChild(wishItem);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});