<?php
$bagels = [
    [
        'slug' => 'saumon-fume',
        'name' => 'Bagel Saumon Fumé',
        'description' => 'Un classique revisité avec du saumon d\'Écosse, des légumes croquants et une sauce crémeuse au citron.',
        'layers' => [
            ['title' => 'Pain bagel supérieur', 'description' => 'Bagel doré et croustillant, légèrement toasté pour révéler ses arômes.', 'color' => '#f3d5a0'],
            ['title' => 'Crème citronnée', 'description' => 'Fromage à la crème fouetté avec citron confit et poivre de Timut.', 'color' => '#f7eed6'],
            ['title' => 'Tomates anciennes', 'description' => 'Tranches fines de tomates multicolores pour une note acidulée.', 'color' => '#f08080'],
            ['title' => 'Saumon fumé', 'description' => 'Saumon d\'Écosse fumé au bois de pommier.', 'color' => '#f9a07a'],
            ['title' => 'Oignons rouges', 'description' => 'Fines lamelles d\'oignon rouge marinées.', 'color' => '#d26472'],
            ['title' => 'Câpres', 'description' => 'Câpres de Pantelleria pour une touche salée.', 'color' => '#7a9e7e'],
            ['title' => 'Aneth frais', 'description' => 'Brins d\'aneth fraîchement ciselés.', 'color' => '#78c2ad'],
            ['title' => 'Pain bagel inférieur', 'description' => 'Base moelleuse pour maintenir toutes les saveurs.', 'color' => '#f3d5a0'],
        ],
    ],
    [
        'slug' => 'poulet-epice',
        'name' => 'Bagel Poulet Épicé',
        'description' => 'Poulet mariné, légumes rôtis et sauce épicée pour les amateurs de sensations.',
        'layers' => [
            ['title' => 'Pain bagel supérieur', 'description' => 'Bagel au sésame légèrement grillé.', 'color' => '#f5cfa1'],
            ['title' => 'Sauce harissa miel', 'description' => 'Harissa douce mélangée à du miel de montagne.', 'color' => '#f2b880'],
            ['title' => 'Poulet grillé', 'description' => 'Filet de poulet mariné aux épices maison.', 'color' => '#d98859'],
            ['title' => 'Courgettes rôties', 'description' => 'Fines tranches grillées à l\'huile d\'olive.', 'color' => '#9fbf7f'],
            ['title' => 'Poivrons confits', 'description' => 'Poivrons rouges et jaunes fondants.', 'color' => '#f5a25d'],
            ['title' => 'Pickles d\'oignons', 'description' => 'Pickles maison pour une touche de fraîcheur.', 'color' => '#d16b82'],
            ['title' => 'Roquette', 'description' => 'Roquette poivrée et croquante.', 'color' => '#6aa168'],
            ['title' => 'Pain bagel inférieur', 'description' => 'Base moelleuse aux graines de sésame.', 'color' => '#f5cfa1'],
        ],
    ],
    [
        'slug' => 'veggie-foret',
        'name' => 'Bagel Veggie Forêt',
        'description' => 'Une balade végétale avec champignons, fromage et pesto de noisettes.',
        'layers' => [
            ['title' => 'Pain bagel supérieur', 'description' => 'Pain complet aux graines toasté.', 'color' => '#d9b48c'],
            ['title' => 'Pesto de noisettes', 'description' => 'Pesto maison à base de noisettes torréfiées et basilic.', 'color' => '#86a873'],
            ['title' => 'Champignons poêlés', 'description' => 'Champignons de Paris et shiitake caramélisés.', 'color' => '#a47f64'],
            ['title' => 'Fromage de chèvre', 'description' => 'Rondelles de fromage de chèvre frais.', 'color' => '#f6f2e9'],
            ['title' => 'Chou kale croustillant', 'description' => 'Feuilles de kale croustillantes au four.', 'color' => '#799c74'],
            ['title' => 'Radis croquants', 'description' => 'Lamelles de radis colorés pour la fraîcheur.', 'color' => '#f6a5c0'],
            ['title' => 'Graines torréfiées', 'description' => 'Mélange de graines de tournesol et de courge.', 'color' => '#c9a66b'],
            ['title' => 'Pain bagel inférieur', 'description' => 'Base rustique aux céréales.', 'color' => '#d9b48c'],
        ],
    ],
];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MayMiru — Bagels immersifs</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Work+Sans:wght@300;400;500;600&display=swap">
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <header class="hero">
        <div class="hero__overlay"></div>
        <div class="hero__content">
            <h1>MayMiru</h1>
            <p>Bagels immersifs, créations sensorielles.</p>
            <a class="hero__cta" href="#menu">Explorer le menu</a>
        </div>
    </header>

    <main>
        <section class="section" id="experience">
            <div class="section__intro">
                <h2>Une expérience immersive</h2>
                <p>
                    Chez MayMiru, chaque bagel est une histoire racontée couche après couche. Explorez nos créations,
                    désactivez un ingrédient, contemplez comment les saveurs s'équilibrent — le tout dans un univers visuel riche.
                </p>
            </div>
        </section>

        <section class="section section--dark" id="menu">
            <div class="section__intro">
                <h2>Menu signature</h2>
                <p>Sélectionnez un bagel pour le décortiquer virtuellement et personnaliser votre dégustation.</p>
            </div>
            <div class="menu-grid">
                <?php foreach ($bagels as $bagel): ?>
                    <?php $data = htmlspecialchars(json_encode($bagel, JSON_UNESCAPED_UNICODE | JSON_HEX_APOS | JSON_HEX_QUOT)); ?>
                    <article class="bagel-card" data-bagel="<?= $data ?>">
                        <div class="bagel-card__glow"></div>
                        <h3><?= htmlspecialchars($bagel['name']) ?></h3>
                        <p><?= htmlspecialchars($bagel['description']) ?></p>
                        <span class="bagel-card__cta">Découvrir</span>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>
    </main>

    <section class="viewer" id="bagel-viewer" aria-hidden="true">
        <div class="viewer__background"></div>
        <div class="viewer__panel" role="dialog" aria-modal="true" aria-labelledby="viewer-title">
            <button class="viewer__close" aria-label="Fermer">&times;</button>
            <div class="viewer__layout">
                <div class="viewer__visual">
                    <h2 id="viewer-title">Sélectionnez un bagel</h2>
                    <div class="layer-stack" id="layer-stack"></div>
                </div>
                <div class="viewer__details">
                    <h3>Couches et ingrédients</h3>
                    <ul class="layer-list" id="layer-list"></ul>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer__content">
            <h2>MayMiru</h2>
            <p>Ouvert tous les jours — 7h à 19h — 24 rue des Saveurs, Montréal</p>
            <p class="footer__note">Réservation au <a href="tel:+15145551234">+1 514 555 1234</a> • Suivez-nous @maymiru.bagels</p>
        </div>
    </footer>

    <script src="assets/app.js" defer></script>
</body>
</html>
