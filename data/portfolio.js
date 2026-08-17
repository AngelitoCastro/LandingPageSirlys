/* ============================================================
   Portfolio Data — Sirlys Ortega (ES Module)
   Each item is a work in the portfolio carousel.
   ------------------------------------------------------------
   TODO Fase 4 (Cloudinary / Pinterest):
   Sustituye las URLs de demostración por tus imágenes optimizadas.
   Mantén las transformaciones f_auto,q_auto,w_X para rendimiento.
   ============================================================ */

export const portfolioData = [
    {
        id: 'esculpidas-gel',
        src: "https://res.cloudinary.com/oec83bid/image/upload/v1786166303/IMG_20210814_124456_jzdldb.jpg",
        alt: 'Diseño esculpido en gel',
        titleKey: 'card1_title',
        descKey: 'card1_desc',
        category: 'esculpidas'
    },
    {
        id: 'arte-minimalista',
        src: 'https://res.cloudinary.com/oec83bid/image/upload/c_crop,g_north_west,h_2117,w_2380,x_68,y_506/q_auto:best/IMG_20210909_152534_ayc4ot.jpg',
        alt: 'Nail Art Minimalista',
        titleKey: 'card2_title',
        descKey: 'card2_desc',
        category: 'nail-art'
    },
    {
        id: 'semi-permanente',
        src: '',
        alt: 'Esmaltado Semi-Permanente',
        titleKey: 'card5_title',
        descKey: 'card5_desc',
        category: 'semi-permanente'
    },
    {
        id: 'aurora-chrome',
        src: 'https://res.cloudinary.com/oec83bid/image/upload/v1786144900/IMG_20201031_175918_t2tbey.jpg',
        alt: 'Efecto Aurora Chrome',
        titleKey: 'card3_title',
        descKey: 'card3_desc',
        category: 'nail-art'
    },
    {
        id: 'esculpidas-acrilico',
        src: 'https://res.cloudinary.com/oec83bid/image/upload/IMG_20200925_114357_twnyqi.jpg',
        alt: 'Extensiones Esculpidas',
        titleKey: 'card4_title',
        descKey: 'card4_desc',
        category: 'esculpidas'
    }
];
