# Site — Mercado Aymoré

Site institucional simples, sem necessidade de servidor ou banco de dados
(site "estático"). Basta subir os arquivos no GitHub Pages e ele já funciona.

## Estrutura de arquivos

```
mercado-aymore/
├── index.html        → a página em si (conteúdo e textos)
├── css/
│   └── style.css      → toda a aparência (cores, fontes, espaçamentos, animações)
├── js/
│   └── script.js       → o que dá "vida" aos botões (menu, rolagem, etc.)
├── images/
│   └── logo.svg         → logo provisória, substitua pela logo real
└── README.md              → este arquivo
```

## O que ainda precisa ser ajustado

- **Número de WhatsApp**: o botão está usando `5521999999999` como exemplo.
  Troque nos dois lugares do `index.html` (procure por `wa.me`) pelo número
  real, no formato `55` + DDD + número, sem espaços ou traços.
- **Logo**: troque `images/logo.svg` pela logo real do mercado (pode ser
  `.png` ou `.jpg` — nesse caso, ajuste a extensão nos `src="images/logo.svg"`
  dentro do `index.html`).
- **Setores em destaque**: a seção "O que você encontra por aqui" foi
  criada com departamentos comuns de mercado de bairro. Confirme se
  correspondem à realidade do Mercado Aymoré.
- **Texto "Sobre"**: é um texto genérico — vale personalizar com a
  história real do mercado.

## Como hospedar no GitHub Pages (passo a passo simples)

1. Crie uma conta gratuita em [github.com](https://github.com), se ainda não tiver.
2. Clique em **New repository** (Novo repositório). Dê um nome, por exemplo
   `mercado-aymore`, marque como **Public** e clique em **Create repository**.
3. Na página do repositório recém-criado, clique em **uploading an existing file**
   (ou "Add file" → "Upload files").
4. Arraste **todos** os arquivos e pastas deste projeto para essa área de
   upload (mantendo a estrutura de pastas `css`, `js`, `images`) e clique em
   **Commit changes**.
5. Vá em **Settings** (Configurações) do repositório → menu lateral **Pages**.
6. Em "Branch", selecione `main` e a pasta `/ (root)`, depois clique em **Save**.
7. Aguarde 1–2 minutos e recarregue a página. O GitHub vai mostrar o link do
   site, algo como:
   `https://seu-usuario.github.io/mercado-aymore/`

Pronto — esse link já pode ser compartilhado, colocado no Instagram ou no
Google Meu Negócio. Qualquer alteração futura (trocar texto, foto, telefone)
pode ser feita clicando no arquivo dentro do GitHub, no ícone de lápis
("Edit"), e depois em "Commit changes" — o site atualiza sozinho.
