const viewer = document.getElementById('bagel-viewer');
const layerStack = document.getElementById('layer-stack');
const layerList = document.getElementById('layer-list');
const viewerTitle = document.getElementById('viewer-title');
const closeBtn = viewer.querySelector('.viewer__close');
let activeBagel = null;

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
}

document.addEventListener('DOMContentLoaded', init);
