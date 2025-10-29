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

function renderBagel(bagel) {
    activeBagel = bagel;
    viewerTitle.textContent = bagel.name;

    layerStack.innerHTML = '';
    layerList.innerHTML = '';

    const totalLayers = bagel.layers.length;

    bagel.layers.forEach((layer, index) => {
        const layerElement = document.createElement('div');
        layerElement.className = 'bagel-layer';
        layerElement.dataset.layerIndex = index;
        layerElement.style.setProperty('--layer-count', totalLayers);
        layerElement.style.setProperty('--layer-index', index);
        layerElement.style.background = `linear-gradient(120deg, ${layer.color}, ${shadeColor(layer.color, -12)})`;
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

function shadeColor(color, percent) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.min(255, Math.max(0, r + Math.round((percent / 100) * 255)));
    g = Math.min(255, Math.max(0, g + Math.round((percent / 100) * 255)));
    b = Math.min(255, Math.max(0, b + Math.round((percent / 100) * 255)));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function hexToRgba(color, alpha = 1) {
    if (!color || !color.startsWith('#')) return `rgba(255, 140, 66, ${alpha})`;
    const value = color.replace('#', '');
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initImmersiveScroll() {
    const immersiveSection = document.querySelector('.immersive-scroll');
    if (!immersiveSection) return;

    const steps = Array.from(immersiveSection.querySelectorAll('.immersive-step'));
    if (!steps.length) return;

    const orb = immersiveSection.querySelector('[data-orb]');
    const title = immersiveSection.querySelector('[data-scroll-title]');
    const description = immersiveSection.querySelector('[data-scroll-description]');
    const progress = immersiveSection.querySelector('[data-progress]');
    const device = immersiveSection.querySelector('[data-immersive-device]');

    const activateStep = (step) => {
        steps.forEach((candidate, index) => {
            const isActive = candidate === step;
            candidate.classList.toggle('is-active', isActive);
            if (isActive) {
                const highlight = candidate.dataset.color || '#ff8c42';
                if (orb) {
                    orb.style.background = `radial-gradient(circle at 25% 25%, ${highlight}, rgba(12, 15, 22, 0.9) 70%)`;
                    orb.style.boxShadow = `0 40px 120px ${hexToRgba(highlight, 0.45)}, inset 0 0 60px rgba(255, 255, 255, 0.08)`;
                    if (!prefersReducedMotion.matches) {
                        orb.style.setProperty('--orb-scale', '1.05');
                        requestAnimationFrame(() => {
                            orb.style.setProperty('--orb-scale', '1');
                        });
                    }
                }

                if (title && candidate.dataset.title) {
                    title.textContent = candidate.dataset.title;
                }
                if (description && candidate.dataset.description) {
                    description.textContent = candidate.dataset.description;
                }
                if (progress) {
                    const value = (index + 1) / steps.length;
                    progress.style.transform = `scaleX(${value})`;
                }
                if (device) {
                    device.style.setProperty('--active-color', highlight);
                    device.style.setProperty('--device-highlight', hexToRgba(highlight, 0.28));
                    if (!prefersReducedMotion.matches) {
                        device.style.setProperty('--device-translate', '-6px');
                        requestAnimationFrame(() => {
                            device.style.setProperty('--device-translate', '0px');
                        });
                    }
                }
            }
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible.length) {
                activateStep(visible[0].target);
            }
        },
        {
            threshold: prefersReducedMotion.matches ? 0.25 : [0.3, 0.6, 0.9],
            rootMargin: '0px 0px -20% 0px',
        }
    );

    steps.forEach((step) => observer.observe(step));

    activateStep(steps[0]);

    const parallax = () => {
        if (prefersReducedMotion.matches) return;
        const rect = immersiveSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const progressValue = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
        const translate = (0.5 - progressValue) * 90;
        if (orb) {
            orb.style.setProperty('--orb-translate', `${translate}px`);
            orb.style.setProperty('--orb-scale', `${1 + progressValue * 0.08}`);
        }
        if (device) {
            device.style.setProperty('--device-translate', `${translate * -0.15}px`);
        }
    };

    parallax();
    window.addEventListener('scroll', parallax, { passive: true });
    window.addEventListener('resize', parallax);

    if (typeof prefersReducedMotion.addEventListener === 'function') {
        prefersReducedMotion.addEventListener('change', () => {
            if (prefersReducedMotion.matches) {
                if (orb) {
                    orb.style.removeProperty('--orb-translate');
                    orb.style.removeProperty('--orb-scale');
                }
                if (device) {
                    device.style.removeProperty('--device-translate');
                }
            } else {
                parallax();
            }
        });
    }
}

function init() {
    const cards = document.querySelectorAll('.bagel-card');
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
        if (event.target === viewer || event.target.classList.contains('viewer__background')) {
            closeViewer();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && viewer.classList.contains('is-active')) {
            closeViewer();
        }
    });

    initImmersiveScroll();
}

document.addEventListener('DOMContentLoaded', init);
