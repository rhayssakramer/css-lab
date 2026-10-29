// Dados das aulas de CSS
const aulas = [
    {
        numero: 1,
        tema: 'Introdução ao CSS',
        categoria: 'Fundamentos',
        descricao: 'Sintaxe · Seletores · Especificidade · Cascata · Como o CSS funciona no navegador',
        topicos: ['Sintaxe CSS', 'Seletores Básicos', 'Propriedades', 'Valores', 'Cascata'],
        link: 'aula1/',
        cor: '#ff6b35'
    },
    {
        numero: 2,
        tema: 'Box Model e Espaçamento',
        categoria: 'Layout',
        descricao: 'Margin · Padding · Border · Box-sizing · Colapso de margins · Espaçamento em profundidade',
        topicos: ['Box Model', 'Margin', 'Padding', 'Border', 'Box-sizing'],
        link: 'aula2/',
        cor: '#4a90a4'
    },
    {
        numero: 3,
        tema: 'Posicionamento CSS',
        categoria: 'Layout',
        descricao: 'Position static, relative, absolute, fixed, sticky · Z-index · Empilhamento de contexto',
        topicos: ['Position', 'Z-index', 'Stacking Context', 'Overlapping', 'Fixed Layout'],
        link: 'aula3/',
        cor: '#9b59b6'
    },
    {
        numero: 4,
        tema: 'Flexbox Completo',
        categoria: 'Layout Moderno',
        descricao: 'Flex container · Flex items · Align-items · Justify-content · Flex-direction · Layouts responsivos',
        topicos: ['Flex Container', 'Flex Items', 'Align-items', 'Justify-content', 'Flex-wrap'],
        link: 'aula4/',
        cor: '#e74c3c'
    },
    {
        numero: 5,
        tema: 'CSS Grid',
        categoria: 'Layout Moderno',
        descricao: 'Grid container · Grid items · Linhas e colunas · Grid-gap · Template areas · Responsividade',
        topicos: ['Grid Container', 'Grid Items', 'Grid-template', 'Grid-gap', 'Template Areas'],
        link: 'aula5/',
        cor: '#f39c12'
    },
    {
        numero: 6,
        tema: 'Tipografia e Fontes',
        categoria: 'Estilos',
        descricao: 'Font-family · Font-size · Font-weight · Line-height · Letter-spacing · Google Fonts · @font-face',
        topicos: ['Font-family', 'Font-size', 'Font-weight', 'Line-height', 'Font-smoothing'],
        link: 'aula6/',
        cor: '#1abc9c'
    },
    {
        numero: 7,
        tema: 'Cores, Gradientes e Sombras',
        categoria: 'Estilos',
        descricao: 'RGB · Hex · HSL · Gradients lineares e radiais · Box-shadow · Text-shadow · Opacity',
        topicos: ['Cores', 'Gradientes', 'Box-shadow', 'Text-shadow', 'Opacity'],
        link: 'aula7/',
        cor: '#e67e22'
    },
    {
        numero: 8,
        tema: 'Animações e Transições',
        categoria: 'Interatividade',
        descricao: 'Transition · @keyframes · Animation · Timing functions · Delays · Transform · 3D',
        topicos: ['Transition', '@keyframes', 'Animation', 'Timing', 'Transform'],
        link: 'aula8/',
        cor: '#c0392b'
    },
    {
        numero: 9,
        tema: 'Responsividade e Media Queries',
        categoria: 'Responsivo',
        descricao: 'Media queries · Mobile-first · Breakpoints · Viewport · Unidades relativas (rem, em, vw, vh)',
        topicos: ['Media Queries', 'Mobile-first', 'Breakpoints', 'Viewport', 'Unidades Relativas'],
        link: 'aula9/',
        cor: '#16a085'
    },
    {
        numero: 10,
        tema: 'CSS Avançado',
        categoria: 'Avançado',
        descricao: 'Custom properties (variáveis) · :has() · Backdrop-filter · Mix-blend-mode · Calc() · Aspect-ratio',
        topicos: ['Variáveis CSS', ':has() Selector', 'Backdrop-filter', 'Mix-blend-mode', 'Calc()'],
        link: 'aula10/',
        cor: '#8e44ad'
    }
];

// Cores para os cards (paleta consistente)
const coresToCard = [
    '#ff6b35', '#4a90a4', '#9b59b6', '#e74c3c', '#f39c12',
    '#1abc9c', '#e67e22', '#c0392b', '#16a085', '#8e44ad'
];

// Renderizar os cards dinamicamente
const aulasGrid = document.querySelector('.aulas-grid');

if (aulasGrid) {
    aulas.forEach((aula, index) => {
        const card = document.createElement('div');
        card.className = 'aula-card';
        card.style.setProperty('--card-color', coresToCard[index % coresToCard.length]);
        
        const tagsHTML = aula.topicos.map(topico => `<span class="tag">${topico}</span>`).join('');
        
        card.innerHTML = `
            <div class="aula-card-header">
                <div>
                    <div class="aula-number">${String(aula.numero).padStart(2, '0')}</div>
                    <span class="aula-label">AULA</span>
                </div>
                <span class="aula-tag">${aula.categoria}</span>
            </div>
            <h3>${aula.tema}</h3>
            <p>${aula.descricao}</p>
            <div class="tags">${tagsHTML}</div>
            <span class="aula-em-breve">Em breve</span>
        `;
        
        aulasGrid.appendChild(card);
    });
}
