// Configuração do EmailJS
// IMPORTANTE: Este arquivo contém credenciais sensíveis
// NÃO faça commit deste arquivo no Git (ele está no .gitignore)
// 
// Para configurar:
// 1. Crie uma conta em https://www.emailjs.com/
// 2. Crie um serviço de email (Gmail, Outlook, etc.)
// 3. Crie um template de email que envia para misticrochet47@gmail.com
// 4. Substitua os valores abaixo pelas suas credenciais

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'FJeglvoAiLjxJakPh',        // Encontre em: Dashboard > Account > API Keys
    SERVICE_ID: 'service_7yt1oia',          // Encontre em: Dashboard > Email Services (serviço que ENVIA)
    TEMPLATE_ID: 'template_sy42mk9',       // Encontre em: Dashboard > Email Templates
    TO_EMAIL: 'misticrochet47@gmail.com'   // Email que RECEBE as mensagens do formulário
};

