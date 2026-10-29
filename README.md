<div align="center">

<img src="./img/logo.png" width="30">  

# 📚 CSS Lab</h1>

**Aulas visuais e interativas sobre CSS para iniciantes.**
*Aprende mexendo, não decorando.*

[![CSS3](https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white)](#%EF%B8%8F-stack)
[![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#%EF%B8%8F-stack)
[![HTML5](https://img.shields.io/badge/html5-E34C26?style=flat-square&logo=html5&logoColor=white)](#%EF%B8%8F-stack)

</div>

---

## 🎯 O que é isso

Um conjunto de aulas sobre CSS moderno e seus recursos, cada uma como uma página HTML única e interativa. Tudo em **HTML, CSS e JavaScript puros**, zero dependências, direto no navegador.

Você interage com elementos reais, vê os estilos mudando ao vivo, clica em exemplos práticos. Os conceitos abstratos viram concretos.

> 🌐 **Página inicial com todas as aulas:** abre o `index.html` na raiz.

---

## 📚 As aulas

Cada aula é uma página independente sobre um tema específico do CSS. Você pode começar pela 1 ou pular para a aula que te interessa mais.

| # | Tema | Categoria | Tópicos principais |
|---|------|-----------|------------------|
| **[01](aula1/)** | Introdução ao CSS | Fundamentos | Sintaxe · Seletores · Especificidade · Cascata |
| **[02](aula2/)** | Box Model | Layout | Margin · Padding · Border · Box-sizing |
| **[03](aula3/)** | Posicionamento | Layout | Position · Z-index · Stacking Context |
| **[04](aula4/)** | Flexbox | Layout Moderno | Flex container · Flex items · Align · Justify |
| **[05](aula5/)** | CSS Grid | Layout Moderno | Grid container · Linhas · Colunas · Template areas |
| **[06](aula6/)** | Tipografia | Estilos | Font-family · Font-size · Line-height · Google Fonts |
| **[07](aula7/)** | Cores e Gradientes | Estilos | RGB · Hex · HSL · Gradientes · Sombras |
| **[08](aula8/)** | Animações | Interatividade | Transition · Keyframes · Transform · Timing |
| **[09](aula9/)** | Responsividade | Responsivo | Media Queries · Mobile-first · Breakpoints |
| **[10](aula10/)** | CSS Avançado | Avançado | Variáveis · Backdrop-filter · Calc() · Aspect-ratio |

---

## ✨ Por que esse formato funciona

- 🖱️ **Interativo de verdade**: exemplos clicáveis, código que responde ao mouse. Não é vídeo, não é PDF, é manipulação direta
- 📦 **Zero dependências**: só HTML, CSS e JS puros. Abre direto no navegador, funciona offline, hospeda em qualquer lugar (GitHub Pages, S3, Netlify...)
- 🎨 **Identidade visual consistente**: mesma paleta (cream, orange, blue, purple), mesmas fontes (Caprasimo + Sora + JetBrains Mono), mesmo "feel" zine em todas as aulas
- 📱 **Responsivo de verdade**: 768px breakpoint adapta grid, fontes, navegação e cards. No mobile o site continua funcional e legível
- 🌐 **Foco em CSS puro**: sem pré-processadores, sem frameworks. Aprenda os fundamentos de verdade

---

## 💻 Tecnologias

| Tecnologia | Descrição | Propósito |
|-----------|-----------|----------|
| **CSS3** | Flexbox, Grid, Variáveis, Animações | Estilização e layout moderno |
| **HTML5** | Semântico | Marcação e estrutura |
| **JavaScript** | Vanilla (ES6+) | Interatividade e dinâmica |
| **[Caprasimo](https://fonts.google.com/specimen/Caprasimo)** | Google Fonts | Headings e títulos |
| **[Sora](https://fonts.google.com/specimen/Sora)** | Google Fonts | Corpo do texto |
| **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** | Google Fonts | Código e tags |

---

## 🗂️ Estrutura

```
css-lab/
├── index.html              # Landing com cards de todas as 10 aulas
├── css/
│   └── style.css           # Estilos compartilhados da landing
├── js/
│   ├── aulas.js           # Dados e renderização dinâmica dos cards
│   └── script.js          # Interatividade (smooth scroll, animations)
├── img/
│   ├── logo.png           # Identidade visual
│   ├── css-3d.webp        # Imagem da hero
│   ├── right-arrow.png    # Ícone dos links
│   └── favicon.ico        # Favicon
│
├── aula1/                  # 10 aulas (1-10)
│   ├── index.html         # Marcação semântica
│   ├── style.css          # Visual (paleta, layout, animações)
│   └── script.js          # Interatividade (exemplos, widgets)
├── aula2/
├── aula3/
├── ...
└── aula10/
```

Cada aula é uma página independente em **arquitetura modular**: HTML cuida da estrutura, CSS dos estilos e JS da interatividade. Sem dependências externas, abre direto no navegador, funciona offline.

---

## 🚀 Como rodar localmente

Abre direto no navegador:

```bash
# clone
git clone https://github.com/rhayssakramer/css-lab.git
cd css-lab

# abre o index.html com duplo-clique, ou serve um http simples:
python -m http.server 8000
# depois acessa http://localhost:8000
```

Não precisa de `npm install`, não tem `package.json`, não tem build step.

---

## 📋 Hacks de CSS inclusos

Na página inicial, há uma seção com **6 hacks práticos** que você precisa saber:

1. **CSS Custom Properties (Variáveis)** — Defina variáveis reutilizáveis em todo o projeto
2. **Calc() para Layout** — Combine unidades diferentes para layouts flexíveis
3. **Grid com Auto-fit** — Crie grids responsivos sem media queries
4. **Aspect Ratio** — Mantenha proporções sem hackear com padding
5. **:has() Selector** — Selecione elementos baseado no conteúdo que contêm
6. **Backdrop-filter** — Crie efeitos de vidro (glassmorphism)

---

## 🌐 Deploy no GitHub Pages

Está hospedado em **GitHub Pages** automaticamente:

```
https://rhayssakramer.github.io/css-lab/
```

Qualquer push na branch `main` atualiza o site automaticamente.

---

## 🤝 Contribuindo

Issues e PRs são bem-vindos, especialmente para:

- Adicionar novas aulas (Pré-processadores, Web Components, etc.)
- Melhorar exemplos interativos
- Tradução para inglês ou espanhol
- Melhorar acessibilidade (ARIA, contraste, foco visível)
- Corrigir bugs
- Adicionar mais hacks CSS

---

## 👩🏼‍💻 Autora

<table>
  <tr>
    <td align="left">
      <a href="https://github.com/rhayssakramer">
        <strong>Rhayssa Kramer</strong>
      </a>
      <br>
      <span>Sr. Assoc, Full-Stack Development | Engenheira de Plataforma</span>
      <br>
      <small>Avanade | Tech Enthusiast | Community Speaker</small>
    </td>
  </tr>
</table>

---

## 📄 Licença

MIT — usa, adapta, distribui. Só dá os créditos. 🏷️

---

<div align="center">

Feito com 🧡 para quem quer aprender CSS de verdade

*"Os alunos aprendem mexendo, não decorando."*

<div align="center">

### ⭐ Se este projeto foi útil, considere deixar uma estrela no GitHub!

© 2026 Rhayssa Kramer. Todos os direitos reservados.

<a href="https://github.com/rhayssakramer"><img src="https://github.com/rhayssakramer/rhayssakramer/blob/main/img/rodape.png" width="100%"></a>

</div>

</div>
