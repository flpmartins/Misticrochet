# Misticrochet - Landing Page

Landing page profissional para a marca **Misticrochet**, desenvolvida com HTML e CSS puro, totalmente responsiva e acessível.

## 🎨 Identidade Visual

- **Cor Primária:** #E65C84 (Rosa forte)
- **Cor Secundária:** #F48BAE (Rosa claro)
- **Cor Acento:** #E9B65E (Dourado)
- **Cor Preto:** #000000
- **Cor Fundo:** #F9F6EF (Bege claro)

## 📁 Estrutura do Projeto

```
misticrochet/
├── index.html          # Página principal
├── styles.css          # Estilos da página
├── assets/              # Logo, favicon e fotos dos produtos
└── README.md            # Este arquivo
```

## 🚀 Deploy (GitHub Pages + domínio próprio)

O site é estático (HTML/CSS/JS puro, sem build), então o deploy é direto:

1. **Fazer push do código:**
   ```bash
   git add .
   git commit -m "Atualiza landing page"
   git push origin main
   ```

2. **Habilitar GitHub Pages:**
   - No repositório, vá em **Settings** > **Pages**
   - Em **Source**, selecione a branch de publicação e pasta `/ (root)`
   - Aguarde alguns minutos para o deploy

3. **Domínio próprio:**
   - O arquivo `CNAME` na branch de publicação já aponta para o domínio configurado
   - Confirme em **Settings** > **Pages** que o domínio customizado está ativo e o HTTPS habilitado

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Acessibilidade (WCAG 2.1)
- ✅ SEO otimizado
- ✅ Navegação suave (smooth scroll)
- ✅ Contato direto via WhatsApp e e-mail (sem formulário/backend)
- ✅ Animações suaves e delicadas
- ✅ Cores da marca aplicadas consistentemente

## 📱 Seções da Página

1. **Hero Section** - Apresentação da marca com logo e CTA
2. **Produtos** - Carrosséis com os produtos artesanais por categoria
3. **Sobre** - História e valores da marca
4. **Depoimentos** - Avaliações de clientes
5. **Contato** - WhatsApp, e-mail e redes sociais
6. **Rodapé** - Informações de contato e redes sociais

## 🛠️ Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --color-primary: #E65C84;
    --color-secondary: #F48BAE;
    --color-accent: #E9B65E;
    /* ... */
}
```

### Adicionar Imagens de Produtos

Adicione a imagem em `assets/` e crie um novo `.produto-card` na categoria correspondente em `index.html`:

```html
<article class="produto-card">
    <div class="produto-image">
        <img src="assets/produto1.jpg" alt="Descrição do produto" class="produto-img" data-image-modal="assets/produto1.jpg">
    </div>
    <div class="produto-content">
        <h4 class="produto-title">Nome</h4>
        <p class="produto-description">Descrição</p>
        <span class="produto-price">Sob consulta</span>
    </div>
</article>
```

### Contato

Não há formulário nem envio de e-mail automatizado — os canais de contato são links diretos:

- **WhatsApp:** número configurado no botão flutuante e na seção de contato (`href="https://wa.me/..."`)
- **E-mail:** link `mailto:` para `misticrochet47@gmail.com`
- **Redes sociais:** Instagram e TikTok

Para trocar o número do WhatsApp ou o e-mail, edite os links correspondentes em `index.html`.

## 🔍 SEO

A página inclui:
- Meta tags de descrição
- Open Graph tags (Facebook)
- Twitter Cards
- Estrutura semântica HTML5
- Atributos `alt` em todas as imagens
- `lang="pt-BR"` no HTML

## ♿ Acessibilidade

- Navegação por teclado funcional
- Atributos `aria-label` e `aria-required`
- Contraste adequado de cores
- Foco visível em elementos interativos
- Estrutura semântica

## 📄 Licença

Este projeto foi desenvolvido para a marca Misticrochet.

---

**Desenvolvido com ❤️ e muito carinho**
