/* ============================================================
   Gallery Module — Sirlys Ortega (ES Module)
   Dynamically renders portfolio cards and testimonial cards
   from data ES modules. Handles carousel interactions (arrows,
   drag/touch) and category filtering.
   ============================================================ */

import { portfolioData } from '../data/portfolio.js';
import { testimonialsData } from '../data/testimonials.js';
import { translations, getCurrentLang, onLanguageChange } from './translation.js';

/* ---- PORTFOLIO CAROUSEL ---- */

const renderPortfolio = () => {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const dict = translations[getCurrentLang()];

    track.innerHTML = '';

    const validItems = portfolioData.filter(item => item.src && item.src.trim() !== '');

    validItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.dataset.category = item.category;

        card.innerHTML = `
            <div class="card-image">
                <img src="${item.src}"
                     alt="${item.alt}"
                     loading="lazy"
                     width="500" height="320">
            </div>
            <div class="card-info">
                <h3 data-translate="${item.titleKey}">${dict[item.titleKey] || ''}</h3>
                <p data-translate="${item.descKey}">${dict[item.descKey] || ''}</p>
            </div>
        `;

        track.appendChild(card);
    });
};

/* ---- Column-count aware card width (uses CSS var) ---- */
const initPortfolioFilters = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const track = document.getElementById('carousel-track');
    if (!filterBtns.length || !track) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            track.querySelectorAll('.carousel-card').forEach(card => {
                card.style.display =
                    (category === 'all' || card.dataset.category === category)
                        ? ''
                        : 'none';
            });

            track.scrollLeft = 0;
        });
    });
};

/* ---- Shared carousel: arrows + drag (desktop) ----
   On touch devices we deliberately do NOT intercept touch events:
   native scroll momentum stays fluid. Drag-to-scroll is only
   wired for pointer/mouse input on desktop. */
const initCarousel = (trackId, prevId, nextId) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    if (!track) return;

    const getShift = () => {
        const card = track.querySelector('.carousel-card, .testimonial-card');
        if (!card) return 300;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 28;
        return card.clientWidth + gap;
    };

    if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: getShift(), behavior: 'smooth' }));
    if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -getShift(), behavior: 'smooth' }));

    // Drag-to-scroll: mouse / pointer only (never touch)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
        isDown = true;
        track.classList.add('dragging');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    };

    const stop = () => {
        isDown = false;
        track.classList.remove('dragging');
    };

    const move = (e) => {
        if (!isDown) return;
        const x = e.pageX - track.offsetLeft;
        track.scrollLeft = scrollLeft - (x - startX) * 1.0;
    };

    track.addEventListener('mousedown', start);
    track.addEventListener('mouseleave', stop);
    track.addEventListener('mouseup', stop);
    track.addEventListener('mousemove', move);
};

/* ---- TESTIMONIALS CAROUSEL ---- */

const renderTestimonials = () => {
    const track = document.getElementById('testimonial-track');
    if (!track) return;

    const dict = translations[getCurrentLang()];

    track.innerHTML = '';

    testimonialsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';

        card.innerHTML = `
            <div class="testimonial-stars" aria-hidden="true">${'★'.repeat(item.stars)}</div>
            <p class="testimonial-quote" data-translate="${item.quoteKey}">${dict[item.quoteKey] || ''}</p>
            <p class="testimonial-author" data-translate="${item.authorKey}">${dict[item.authorKey] || ''}</p>
        `;

        track.appendChild(card);
    });
};

/* ---- PUBLIC INIT ---- */
export const initGallery = () => {
    renderPortfolio();
    initPortfolioFilters();
    initCarousel('carousel-track', 'carousel-prev', 'carousel-next');

    renderTestimonials();
    initCarousel('testimonial-track', 'testimonial-prev', 'testimonial-next');

    onLanguageChange(() => {
        renderPortfolio();
        renderTestimonials();
    });
};