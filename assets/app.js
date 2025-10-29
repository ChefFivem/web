const viewer = document.getElementById('bagel-viewer');
const layerStack = document.getElementById('layer-stack');
const layerList = document.getElementById('layer-list');
const viewerTitle = document.getElementById('viewer-title');
const closeBtn = viewer.querySelector('.viewer__close');
let activeBagel = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const formatter = new Intl.ListFormat('fr-CA', { style: 'long', type: 'conjunction' });

function openViewer() {
    viewer.classList.add('is-active');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeViewer() {
    viewer.classList.remove('is-active');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function shadeColor(color, percent) {
    if (!color || !/^#([a-fA-F0-9]{6})$/.test(color)) return color;
    const num = parseInt(color.slice(1), 16);
    let r = (num >> 16) + Math.round((percent / 100) * 255);
    let g = ((num >> 8) & 0x00ff) + Math.round((percent / 100) * 255);
    let b = (num & 0x0000ff) + Math.round((percent / 100) * 255);
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

function hexToRgba(color, alpha = 1) {
    if (!color || !/^#([a-fA-F0-9]{6})$/.test(color)) return `rgba(255, 140, 66, ${alpha})`;
    const value = color.replace('#', '');
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderBagel(bagel) {
    activeBagel = bagel;
    viewerTitle.textContent = bagel.name;

    layerStack.innerHTML = '';
    layerList.innerHTML = '';

    const totalLayers = bagel.layers.length;
    const midpoint = (totalLayers - 1) / 2;

    bagel.layers.forEach((layer, index) => {
        const layerElement = document.createElement('div');
        layerElement.className = 'bagel-layer';
        layerElement.dataset.layerIndex = index;
        const depth = Math.abs(index - midpoint);
        const translateY = (index - midpoint) * 38;
        const scale = 1 - depth * 0.04;
        layerElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
        layerElement.style.background = `linear-gradient(135deg, ${shadeColor(layer.color, 12)}, ${shadeColor(layer.color, -10)})`;
        layerElement.style.boxShadow = `0 ${20 + depth * 12}px ${50 + depth * 18}px ${hexToRgba(layer.color, 0.35)}`;
        layerElement.textContent = layer.title;
        layerStack.appendChild(layerElement);

        const listItem = document.createElement('li');
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'layer-toggle';
        toggle.dataset.layerIndex = index;
        toggle.innerHTML = `
            <span>
                <span class="layer-toggle__name">${layer.title}</span>
                <span class="layer-toggle__desc">${layer.description}</span>
            </span>
            <span class="layer-toggle__status">Actif</span>
        `;
        listItem.appendChild(toggle);
        layerList.appendChild(listItem);
    });
}

function toggleLayer(layerIndex) {
    const stackLayer = layerStack.querySelector(`.bagel-layer[data-layer-index="${layerIndex}"]`);
    const toggle = layerList.querySelector(`.layer-toggle[data-layer-index="${layerIndex}"]`);
    if (!stackLayer || !toggle) return;

    const isInactive = stackLayer.classList.toggle('inactive');
    toggle.classList.toggle('is-disabled', isInactive);
    const status = toggle.querySelector('.layer-toggle__status');
    status.textContent = isInactive ? 'Retiré' : 'Actif';

    announceCustomisation();
}

function announceCustomisation() {
    if (!activeBagel) return;
    const activeLayers = [...layerStack.querySelectorAll('.bagel-layer')]
        .filter((layer) => !layer.classList.contains('inactive'))
        .map((layer) => layer.textContent.trim());

    viewer.setAttribute('data-active-layers', formatter.format(activeLayers));
}

function initShowcase() {
    const showcase = document.querySelector('[data-showcase]');
    if (!showcase) return;

    const eyebrow = showcase.querySelector('[data-showcase-eyebrow]');
    const title = showcase.querySelector('[data-showcase-title]');
    const copy = showcase.querySelector('[data-showcase-copy]');
    const bagel = showcase.querySelector('[data-showcase-bagel]');
    const halo = showcase.querySelector('.showcase__halo');
    const slices = bagel ? Array.from(bagel.querySelectorAll('.showcase__slice')) : [];
    const indexLabel = document.querySelector('[data-showcase-index]');
    const progress = document.querySelector('[data-showcase-progress]');
    const steps = Array.from(document.querySelectorAll('.showcase-step'));

    if (!steps.length) return;

    const activateStep = (step, index) => {
        steps.forEach((candidate) => candidate.classList.toggle('is-active', candidate === step));
        const color = step.dataset.color || '#ff8c42';
        if (eyebrow) eyebrow.textContent = step.dataset.eyebrow || '';
        if (title) title.textContent = step.dataset.title || '';
        if (copy) copy.textContent = step.dataset.copy || '';
        if (indexLabel) indexLabel.textContent = (index + 1).toString().padStart(2, '0');
        if (progress) progress.style.transform = `scaleX(${(index + 1) / steps.length})`;

        if (showcase) {
            showcase.style.setProperty('--showcase-color', color);
            showcase.style.background = `linear-gradient(135deg, ${shadeColor(color, 20)} 0%, ${shadeColor(color, -20)} 100%)`;
        }

        if (halo && !prefersReducedMotion.matches) {
            halo.style.transform = `scale(${1 + index * 0.05}) rotate(${index * 6}deg)`;
            halo.style.opacity = 0.5 + index * 0.08;
        }

        slices.forEach((slice, sliceIndex) => {
            const depth = Math.abs(sliceIndex - (slices.length - 1) / 2);
            slice.style.background = `linear-gradient(120deg, ${shadeColor(color, 18 - depth * 4)}, ${shadeColor(color, -12 - depth * 4)})`;
            slice.style.boxShadow = `0 ${18 + depth * 12}px ${60 + depth * 18}px ${hexToRgba(color, 0.35)}`;
            slice.style.opacity = 0.35 + (1 - depth / slices.length) * 0.45;
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible.length) {
                const step = visible[0].target;
                const index = steps.indexOf(step);
                if (index >= 0) activateStep(step, index);
            }
        },
        {
            threshold: prefersReducedMotion.matches ? 0.2 : [0.3, 0.6, 0.9],
            rootMargin: '-10% 0px -40% 0px',
        }
    );

    steps.forEach((step) => observer.observe(step));
    activateStep(steps[0], 0);
}

function initThemeObserver() {
    const sections = document.querySelectorAll('.panel[data-theme]');
    if (!sections.length) return;
    const body = document.body;

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (!visible.length) return;
            const theme = visible[0].target.dataset.theme;
            body.classList.toggle('theme--light', theme === 'light');
            body.classList.toggle('theme--dark', theme === 'dark');
        },
        {
            threshold: 0.5,
        }
    );

    sections.forEach((section) => observer.observe(section));
}

function init() {
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const data = card.dataset.bagel;
            if (!data) return;
            const bagel = JSON.parse(data);
            renderBagel(bagel);
            openViewer();
            announceCustomisation();
        });
    });

    layerList.addEventListener('click', (event) => {
        const target = event.target.closest('.layer-toggle');
        if (!target) return;
        toggleLayer(target.dataset.layerIndex);
    });

    closeBtn.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (event) => {
        if (event.target === viewer || event.target.classList.contains('viewer__backdrop')) {
            closeViewer();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && viewer.classList.contains('is-active')) {
            closeViewer();
        }
    });

    initShowcase();
    initThemeObserver();
}

document.addEventListener('DOMContentLoaded', init);
