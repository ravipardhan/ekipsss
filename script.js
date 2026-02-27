// --- Preloader ---
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
  }
});

// Small client-side interactions and form handlers
// Populate any footer year placeholders (ids starting with "year")
document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

function openWhatsApp() {
    const businessNumber = '919978655966'; 
    const message = `Hello Ekips Transformers, I am interested in your products.`;
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, function(m){
    return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m];
  });
}

// Helper: open console and run:
// JSON.parse(localStorage.getItem('bookings')) to view demo bookings

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
  });

  // Close nav when a link is clicked (Mobile UX)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.classList.remove('nav-open');
    });
  });
}

// Theme Switcher Logic
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Dropdown Logic
  document.querySelectorAll('.nav .has-dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            // Prevent link navigation on mobile to open dropdown
            if (this.getAttribute('href') === '#') {
              e.preventDefault();
            }
            const parentItem = this.parentElement;
            parentItem.classList.toggle('open');
        }
    });
  });

  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  // Available themes: 'theme-professional' (default in HTML), '' (Light/Root), 'theme-elegant'
  const themes = ['theme-professional', '', 'theme-elegant'];

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('site_theme');
  if (savedTheme !== null) {
    body.classList.remove('theme-professional', 'theme-elegant');
    if (savedTheme) body.classList.add(savedTheme);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      let currentTheme = '';
      if (body.classList.contains('theme-professional')) currentTheme = 'theme-professional';
      else if (body.classList.contains('theme-elegant')) currentTheme = 'theme-elegant';

      const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
      const nextTheme = themes[nextIndex];

      body.classList.remove('theme-professional', 'theme-elegant');
      if (nextTheme) body.classList.add(nextTheme);

      localStorage.setItem('site_theme', nextTheme);
    });
  }

  // --- Advanced Features Logic ---

  // 1. Lead Capture & Exit Intent Popup
  const modal = document.getElementById('lead-popup');
  const closeBtn = document.querySelector('.modal-close');
  
  // Check if popup has been shown in this session
  if (modal && !sessionStorage.getItem('popupShown')) {
    
    const showModal = () => {
      if (!modal.classList.contains('active')) {
        modal.classList.add('active');
        sessionStorage.setItem('popupShown', 'true');
      }
    };

    // Trigger 1: Time Delay (15 seconds)
    setTimeout(showModal, 15000);

    // Trigger 2: Exit Intent (Mouse leaves viewport at top)
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 0) {
        showModal();
      }
    });

    // Close Logic
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
    
    // Close on click outside
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});
