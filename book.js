document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const formSection = document.querySelector('.booking-form-section');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const carType = document.getElementById('car-type').value;
            const pickupDate = document.getElementById('pickup-date').value;
            const pickupTime = document.getElementById('pickup-time').value;
            const returnDate = document.getElementById('return-date').value;
            const returnTime = document.getElementById('return-time').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;


            if (!carType || !pickupDate || !pickupTime || !returnDate || !returnTime || !name || !email || !phone) {
                alert('Please fill out all required fields.');
                return;
            }

            // If validation passes, redirect to thank you page
            window.location.href = 'thankyou.html';
        });
    }
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
  });
}
