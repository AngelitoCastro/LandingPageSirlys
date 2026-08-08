/* ============================================================
   App Entry Point — Sirlys Ortega (ES Module)
   Initializes global UI behaviour and wires up the feature
   modules: translation, gallery and WhatsApp booking.
   ============================================================ */

import { initLanguageSelector, setLanguage, getCurrentLang, translateDOM } from './translation.js';
import { initGallery } from './gallery.js';
import { initWhatsApp } from './whatsapp.js';

const init = () => {


    /* ---- Mobile menu (drawer) ---- */
    const navMenu = document.getElementById('nav-menu');
    const mobileToggleBtn = document.getElementById('mobile-toggle');

    const setMenu = (open) => {
        navMenu.classList.toggle('open', open);
        mobileToggleBtn.classList.toggle('open', open);
        mobileToggleBtn.setAttribute('aria-expanded', String(open));
    };

    mobileToggleBtn.addEventListener('click', () => {
        setMenu(!navMenu.classList.contains('open'));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') &&
            !navMenu.contains(e.target) &&
            !mobileToggleBtn.contains(e.target)) {
            setMenu(false);
        }
    });

    /* ---- Active nav link on scroll ---- */


    /* ---- FAQ accordion (single open) ---- */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const wasOpen = question.getAttribute('aria-expanded') === 'true';
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                const answer = document.getElementById(q.getAttribute('aria-controls'));
                if (answer) answer.hidden = true;
            });
            if (!wasOpen) {
                question.setAttribute('aria-expanded', 'true');
                const answer = document.getElementById(question.getAttribute('aria-controls'));
                if (answer) answer.hidden = false;
            }
        });
    });

    /* ---- Scroll-reveal (fade-in-up) ---- */
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    /* ---- Feature modules ---- */
    initLanguageSelector();
    initGallery();
    initWhatsApp();

    // Apply the persisted language (must run after all DOM render)
    const lang = getCurrentLang();
    translateDOM(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });


    onScroll();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}