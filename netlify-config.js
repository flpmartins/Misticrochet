// Script para Netlify - Gera config.js a partir de variáveis de ambiente
// Este arquivo será executado durante o build no Netlify

// Netlify injeta variáveis de ambiente em tempo de build
// Você precisa configurar essas variáveis no painel do Netlify

const fs = require('fs');

const config = {
    PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || '',
    SERVICE_ID: process.env.EMAILJS_SERVICE_ID || '',
    TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || '',
    TO_EMAIL: process.env.EMAILJS_TO_EMAIL || 'misticrochet47@gmail.com'
};

const configContent = `const EMAILJS_CONFIG = ${JSON.stringify(config, null, 4)};`;

fs.writeFileSync('config.js', configContent);
console.log('config.js gerado com sucesso!');

