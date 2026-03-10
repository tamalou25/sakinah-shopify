/**
 * SAKINAH - L'Harmonie de Médine
 * JavaScript Custom
 */

// === CONFIGURATION ===
const SAKINAH = {
  config: {
    cartDrawer: true,
    quickView: true,
    stickyHeader: true,
    lazyLoad: true
  }
};

// === NAVIGATION STICKY ===
class StickyHeader {
  constructor() {
    this.header = document.querySelector('.header');
    this.scrollThreshold = 100;
    this.init();
  }

  init() {
    if (!this.header) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.scrollThreshold) {
        this.header.classList.add('header--sticky');
      } else {
        this.header.classList.remove('header--sticky');
      }
    });
  }
}

// === PANIER DRAWER ===
class CartDrawer {
  constructor() {
    this.drawer = document.querySelector('.cart-drawer');
    this.overlay = document.querySelector('.cart-overlay');
    this.openButtons = document.querySelectorAll('[data-cart-open]');
    this.closeButtons = document.querySelectorAll('[data-cart-close]');
    this.init();
  }

  init() {
    if (!this.drawer) return;

    this.openButtons.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    this.closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawer.classList.contains('active')) {
        this.close();
      }
    });
  }

  open() {
    this.drawer.classList.add('active');
    if (this.overlay) this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.drawer.classList.remove('active');
    if (this.overlay) this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// === AJOUT AU PANIER ===
class AddToCart {
  constructor() {
    this.forms = document.querySelectorAll('[data-add-to-cart-form]');
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e, form));
    });
  }

  async handleSubmit(e, form) {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Ajout en cours...';

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Erreur ajout panier');

      const data = await response.json();
      
      // Success
      submitBtn.textContent = '✓ Ajouté !';
      submitBtn.classList.add('success');
      
      // Update cart count
      this.updateCartCount();
      
      // Open cart drawer
      if (SAKINAH.config.cartDrawer) {
        setTimeout(() => {
          document.querySelector('[data-cart-open]')?.click();
        }, 500);
      }

      // Reset button
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('success');
      }, 2000);

    } catch (error) {
      console.error('Erreur:', error);
      submitBtn.textContent = '❌ Erreur';
      submitBtn.classList.add('error');
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('error');
      }, 2000);
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const countElements = document.querySelectorAll('[data-cart-count]');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        if (cart.item_count > 0) {
          el.classList.add('has-items');
        }
      });
    } catch (error) {
      console.error('Erreur update count:', error);
    }
  }
}

// === GALERIE PRODUIT ===
class ProductGallery {
  constructor() {
    this.mainImage = document.querySelector('[data-main-image]');
    this.thumbnails = document.querySelectorAll('[data-thumbnail]');
    this.init();
  }

  init() {
    if (!this.mainImage || !this.thumbnails.length) return;

    this.thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const newSrc = thumb.dataset.fullImage;
        this.mainImage.src = newSrc;
        
        // Active state
        this.thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
}

// === LAZY LOADING IMAGES ===
class LazyLoad {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback
      this.images.forEach(img => {
        img.src = img.dataset.src;
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    this.images.forEach(img => observer.observe(img));
  }
}

// === NEWSLETTER POPUP ===
class NewsletterPopup {
  constructor() {
    this.popup = document.querySelector('[data-newsletter-popup]');
    this.closeBtn = document.querySelector('[data-popup-close]');
    this.delay = 5000; // 5 secondes
    this.cookieName = 'sakinah_newsletter_shown';
    this.init();
  }

  init() {
    if (!this.popup) return;
    if (this.getCookie(this.cookieName)) return;

    setTimeout(() => {
      this.show();
    }, this.delay);

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
  }

  show() {
    this.popup.classList.add('active');
  }

  close() {
    this.popup.classList.remove('active');
    this.setCookie(this.cookieName, 'true', 7); // 7 jours
  }

  setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  }
}

// === FILTRES COLLECTION ===
class CollectionFilters {
  constructor() {
    this.filters = document.querySelectorAll('[data-filter]');
    this.init();
  }

  init() {
    this.filters.forEach(filter => {
      filter.addEventListener('change', () => this.applyFilters());
    });
  }

  applyFilters() {
    const params = new URLSearchParams();
    
    this.filters.forEach(filter => {
      if (filter.checked || filter.selected) {
        params.append(filter.name, filter.value);
      }
    });

    window.location.search = params.toString();
  }
}

// === COUNTDOWN TIMER ===
class CountdownTimer {
  constructor(element, endDate) {
    this.element = element;
    this.endDate = new Date(endDate).getTime();
    this.init();
  }

  init() {
    if (!this.element) return;

    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.endDate - now;

      if (distance < 0) {
        clearInterval(this.interval);
        this.element.innerHTML = 'Offre expirée';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.element.innerHTML = `
        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">jours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">heures</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">min</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">sec</span>
          </div>
        </div>
      `;
    }, 1000);
  }
}

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🕌 Sakinah - L\'Harmonie de Médine', 'font-size: 20px; color: #00A651; font-weight: bold;');
  console.log('%cSite e-commerce spirituel musulman', 'color: #C9A961;');

  // Init components
  if (SAKINAH.config.stickyHeader) new StickyHeader();
  if (SAKINAH.config.cartDrawer) new CartDrawer();
  
  new AddToCart();
  new ProductGallery();
  
  if (SAKINAH.config.lazyLoad) new LazyLoad();
  
  new NewsletterPopup();
  new CollectionFilters();

  // Init countdowns
  document.querySelectorAll('[data-countdown]').forEach(el => {
    const endDate = el.dataset.countdown;
    new CountdownTimer(el, endDate);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// === EXPORT ===
window.SAKINAH = SAKINAH;