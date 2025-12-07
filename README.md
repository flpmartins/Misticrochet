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
misticchoche/
├── index.html          # Página principal
├── styles.css          # Estilos da página
├── assets/
│   ├── logo.jpeg       # Logo da marca
│   └── favicon.svg     # Favicon
└── README.md           # Este arquivo
```

## 🚀 Deploy em Produção (Serviços Gratuitos)

### ⚠️ IMPORTANTE: Sobre o config.js

O arquivo `config.js` contém credenciais sensíveis e está no `.gitignore`. 

**Para serviços gratuitos, você tem 2 opções:**

1. **Upload manual do `config.js`** (mais simples)
   - Após o deploy, faça upload do `config.js` manualmente
   - ⚠️ No GitHub Pages, o arquivo ficará público (visível no repositório)

2. **GitHub Secrets + Actions** (mais seguro)
   - Use secrets do GitHub para proteger as credenciais
   - O workflow cria o `config.js` automaticamente durante o deploy

### Opção 1: GitHub Pages (Gratuito e Simples)

**Vantagens:** Totalmente gratuito, integrado ao GitHub, HTTPS automático

1. **Fazer push do código:**
   ```bash
   git add .
   git commit -m "Deploy para GitHub Pages"
   git push origin main
   ```

2. **Habilitar GitHub Pages:**
   - No repositório, vá em **Settings** > **Pages**
   - Em **Source**, selecione a branch `main` e pasta `/ (root)`
   - Clique em **Save**
   - Aguarde alguns minutos

3. **Configurar credenciais (2 opções):**

   **Opção A - Simples (arquivo público):**
   - Vá em **Code** > clique em "Add file" > "Upload files"
   - Faça upload do `config.js`
   - Faça commit (o arquivo ficará público no repositório)
   - ⚠️ **Atenção:** As credenciais ficarão visíveis no GitHub

   **Opção B - Seguro (GitHub Secrets + Actions):**
   - Vá em **Settings** > **Secrets and variables** > **Actions**
   - Adicione os secrets:
     - `EMAILJS_PUBLIC_KEY` = sua chave pública
     - `EMAILJS_SERVICE_ID` = seu service ID  
     - `EMAILJS_TEMPLATE_ID` = seu template ID
   - O workflow `.github/workflows/github-pages-deploy.yml` criará o `config.js` automaticamente
   - ✅ **Vantagem:** Credenciais protegidas, não ficam no código

4. **Acessar:** `https://[seu-usuario].github.io/[nome-repo]/`

### Opção 2: Netlify (Recomendado - Mais Seguro)

**Vantagens:** Deploy automático, variáveis de ambiente seguras, HTTPS, CDN global

1. **Fazer push para o GitHub** (sem config.js)

2. **Conectar ao Netlify:**
   - Acesse [netlify.com](https://netlify.com) e crie conta (grátis)
   - Clique em "Add new site" > "Import an existing project"
   - Conecte seu repositório do GitHub
   - Deploy settings:
     - Branch: `main`
     - Build command: `node netlify-config.js` (já configurado no `netlify.toml`)
     - Publish directory: `/`

3. **Configurar variáveis de ambiente (SEGREDAS):**
   - Vá em **Site settings** > **Environment variables**
   - Adicione cada uma:
     - `EMAILJS_PUBLIC_KEY` = `FJeglvoAiLjxJakPh`
     - `EMAILJS_SERVICE_ID` = `service_7yt1oia`
     - `EMAILJS_TEMPLATE_ID` = `template_sy42mk9`
     - `EMAILJS_TO_EMAIL` = `misticrochet47@gmail.com`
   - ✅ **As credenciais ficam protegidas, não aparecem no código!**

4. **Deploy automático:**
   - A cada push no GitHub, o Netlify faz deploy automaticamente
   - O `netlify-config.js` cria o `config.js` a partir das variáveis de ambiente
   - Seu site estará em: `https://[nome-aleatorio].netlify.app`

### Opção 3: Vercel (Alternativa ao Netlify)

Similar ao Netlify, também gratuito e com variáveis de ambiente. Processo similar.

### Método 1: Via Interface do GitHub (Recomendado)

1. **Criar um repositório no GitHub:**
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nomeie o repositório (ex: `misticrochet`)
   - Escolha se será público ou privado
   - **NÃO** marque "Initialize with README"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos:**
   - No repositório criado, clique em "uploading an existing file"
   - Arraste todos os arquivos do projeto para a área de upload
   - Adicione uma mensagem de commit (ex: "Initial commit")
   - Clique em "Commit changes"

3. **Habilitar GitHub Pages:**
   - No repositório, vá em **Settings** (Configurações)
   - Role até a seção **Pages** (no menu lateral esquerdo)
   - Em **Source**, selecione a branch `main` (ou `master`)
   - Selecione a pasta `/ (root)`
   - Clique em **Save**
   - Aguarde alguns minutos para o deploy

4. **Acessar sua página:**
   - Sua página estará disponível em: `https://[seu-usuario].github.io/misticrochet/`

### Método 2: Via Git (Linha de Comando)

1. **Inicializar o repositório Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landing page Misticrochet"
   ```

2. **Conectar ao repositório remoto:**
   ```bash
   git remote add origin https://github.com/[seu-usuario]/misticrochet.git
   git branch -M main
   git push -u origin main
   ```

3. **Habilitar GitHub Pages:**
   - Siga os passos 3 e 4 do Método 1 acima

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Acessibilidade (WCAG 2.1)
- ✅ SEO otimizado
- ✅ Navegação suave (smooth scroll)
- ✅ Formulário de contato funcional
- ✅ Animações suaves e delicadas
- ✅ Cores da marca aplicadas consistentemente

## 📱 Seções da Página

1. **Hero Section** - Apresentação da marca com logo e CTA
2. **Produtos** - Cards com os produtos artesanais
3. **Sobre** - História e valores da marca
4. **Depoimentos** - Avaliações de clientes
5. **Contato** - Formulário para encomendas e dúvidas
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

Substitua os placeholders na seção de produtos:

```html
<div class="produto-image">
    <img src="assets/produto1.jpg" alt="Descrição do produto">
</div>
```

### Configurar Formulário de Contato

O formulário está configurado para usar **EmailJS** (gratuito até 200 emails/mês). Siga os passos abaixo:

#### 📧 Configuração do EmailJS

1. **Criar conta no EmailJS:**
   - Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
   - Clique em "Sign Up" e crie uma conta gratuita

2. **Criar um Serviço de Email (para ENVIAR):**
   - No dashboard, vá em **Email Services**
   - Clique em **Add New Service**
   - Escolha seu provedor (Gmail, Outlook, etc.)
   - **IMPORTANTE:** Este serviço será usado para ENVIAR os emails
   - Você pode usar qualquer conta de email para enviar (não precisa ser misticrochet47@gmail.com)
   - Siga as instruções para conectar sua conta de email
   - **Anote o Service ID** (ex: `service_abc123`)

3. **Criar um Template de Email:**
   - No dashboard, vá em **Email Templates**
   - Clique em **Create New Template**
   - Configure o template:
     - **To Email:** `misticrochet47@gmail.com` ⬅️ **Este é o email que RECEBE as mensagens**
     - **From Name:** `{{from_name}}` (nome de quem preencheu o formulário)
     - **Reply To:** `{{reply_to}}` (email de quem preencheu, para você poder responder diretamente)
     - **Subject:** `Novo contato via site - {{from_name}}`
     - **Content (HTML):**
       ```html
       <h2>Nova mensagem do site Misticrochet</h2>
       <p><strong>Nome:</strong> {{from_name}}</p>
       <p><strong>Email:</strong> {{from_email}}</p>
       <p><strong>Mensagem:</strong></p>
       <p>{{message}}</p>
       <hr>
       <p><em>Para responder, use o email: {{reply_to}}</em></p>
       ```
   - **Anote o Template ID** (ex: `template_xyz789`)
   
   **Resumo:** O EmailJS enviará emails **PARA** `misticrochet47@gmail.com` sempre que alguém preencher o formulário.

4. **Obter a Chave Pública (Public Key):**
   - No dashboard, vá em **Account** > **General**
   - Role até **API Keys**
   - Copie a **Public Key** (ex: `abcdefghijklmnop`)

5. **Configurar no código:**
   - Abra o arquivo `index.html`
   - Encontre a seção `EMAILJS_CONFIG` (linha ~428)
   - Substitua os valores:
     ```javascript
     const EMAILJS_CONFIG = {
         PUBLIC_KEY: 'sua-chave-publica-aqui',
         SERVICE_ID: 'seu-service-id-aqui',
         TEMPLATE_ID: 'seu-template-id-aqui',
         TO_EMAIL: 'misticrochet47@gmail.com'
     };
     ```

6. **Testar:**
   - Envie um formulário de teste
   - Verifique se o email chegou na caixa de entrada

#### 🔄 Fallback Automático

Se o EmailJS não estiver configurado, o formulário usará automaticamente um link `mailto:` que abrirá o cliente de email padrão do usuário.

## 📝 Notas Importantes

- **Formulário de Contato:** Configure o EmailJS seguindo as instruções acima para receber emails automaticamente.
- As imagens de produtos são placeholders. Adicione fotos reais dos seus produtos.
- Os links das redes sociais já estão configurados (Instagram e TikTok).
- O e-mail de contato está configurado como `misticrochet47@gmail.com`.

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

# Misticrochet
