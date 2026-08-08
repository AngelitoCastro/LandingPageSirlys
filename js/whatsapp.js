/* ============================================================
   WhatsApp Module — Sirlys Ortega (ES Module)
   Handles the appointment form submission by building a
   pre-filled WhatsApp message and opening it in a new tab.
   ============================================================ */

import { translations, getCurrentLang } from './translation.js';

const WHATSAPP_NUMBER = '573157586394';

const buildMessage = (name, service, date, time, notes) => {
    const lang = getCurrentLang();

    const serviceSelect = document.getElementById('form-service');
    const serviceText = serviceSelect
        ? serviceSelect.options[serviceSelect.selectedIndex].text
        : service;

    if (lang === 'en') {
        let msg = `Hello Sirlys! \n\nI would like to schedule an appointment:\n\n`;
        msg += `*Name:* ${name}\n`;
        msg += `*Service:* ${serviceText}\n`;
        msg += `*Date:* ${date}\n`;
        msg += `*Time:* ${time}\n`;
        if (notes) msg += ` *Notes:* ${notes}\n`;
        msg += `\nThank you!`;
        return msg;
    }

    let msg = `¡Hola Sirlys! \n\nMe gustaría agendar una cita:\n\n`;
    msg += `*Nombre:* ${name}\n`;
    msg += `*Servicio:* ${serviceText}\n`;
    msg += `*Fecha:* ${date}\n`;
    msg += `*Hora:* ${time}\n`;
    if (notes) msg += ` *Notas:* ${notes}\n`;
    msg += `\n¡Gracias!`;
    return msg;
};

const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

const showFormMessage = (type, text) => {
    const el = document.getElementById('form-message');
    if (!el) return;

    el.className = `form-message-alert ${type}`;
    el.textContent = text;
    el.style.display = 'block';

    setTimeout(() => { el.style.display = 'none'; }, 5000);
};

export const initWhatsApp = () => {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const lang = getCurrentLang();
        const dict = translations[lang];

        const name = document.getElementById('form-name').value.trim();
        const service = document.getElementById('form-service').value;
        const date = document.getElementById('form-date').value;
        const time = document.getElementById('form-time').value;
        const notes = document.getElementById('form-notes').value.trim();

        if (!name || !service || !date || !time) {
            showFormMessage('error', dict.submit_error);
            return;
        }

        const submitBtn = form.querySelector('.submit-btn');
        const submitText = submitBtn.querySelector('[data-translate="btn_submit_text"]') || submitBtn.firstElementChild;
        const originalText = submitText.textContent;

        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';
        submitText.textContent = lang === 'es' ? 'Enviando...' : 'Sending...';

        setTimeout(() => {
            openWhatsApp(buildMessage(name, service, date, time, notes));

            showFormMessage('success', dict.submit_success);
            form.reset();

            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';
            submitText.textContent = originalText;
        }, 600);
    });
};