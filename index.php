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

$experience = [
    [
        'eyebrow' => 'Ingrédients d\'exception',
        'title' => 'Récolte à l\'aube',
        'copy' => 'Nos artisans sélectionnent chaque herbe, légume et poisson avant le lever du soleil pour garantir une fraîcheur absolue.',
        'color' => '#f6b24b',
    ],
    [
        'eyebrow' => 'Cuisine chorégraphiée',
        'title' => 'Gestuelle millimétrée',
        'copy' => 'Chaque couche est déposée avec un rituel précis : nappage soyeux, tranche lustrée, herbes ciselées au millimètre.',
        'color' => '#9d9bff',
    ],
    [
        'eyebrow' => 'Toastage minute',
        'title' => 'Chaleur maîtrisée',
        'copy' => 'Nous toastons nos bagels à la commande pour révéler un croustillant doré et un cœur moelleux.',
        'color' => '#68c8b7',
    ],
    [
        'eyebrow' => 'Personnalisation immersive',
        'title' => 'Votre signature',
        'copy' => 'Un clic suffit pour révéler chaque couche et désactiver un ingrédient. Votre MayMiru devient unique.',
        'color' => '#f6a5c0',
    ],
];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MayMiru — Bagels immersifs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap">
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body class="theme--dark">
    <header class="site-header">
        <div class="site-header__inner">
            <a class="site-header__logo" href="#top">MayMiru</a>
            <nav class="site-nav" aria-label="Navigation principale">
                <a href="#experience">Expérience</a>
                <a href="#atelier">Atelier</a>
                <a href="#menu">Menu</a>
                <a class="site-nav__cta" href="tel:+15145551234">Réserver</a>
            </nav>
        </div>
    </header>

    <main id="top">
        <section class="panel panel--hero" data-theme="dark">
            <div class="hero">
                <div class="hero__copy">
                    <p class="hero__eyebrow">Bagels immersifs</p>
                    <h1>MayMiru</h1>
                    <p class="hero__lead">Une expérience sensorielle orchestrée comme un lancement produit. Chaque bagel se révèle couche après couche avec une précision Apple-like.</p>
                    <div class="hero__cta">
                        <a class="button" href="#experience">Découvrir l'expérience</a>
                        <a class="button button--ghost" href="#menu">Personnaliser un bagel</a>
                    </div>
                </div>
                <div class="hero__visual">
                    <div class="hero__orb">
                        <span>MayMiru</span>
                    </div>
                </div>
                <div class="hero__scroll-cue" aria-hidden="true">
                    <span>Faites défiler</span>
                    <div class="hero__scroll-line"></div>
                </div>
            </div>
        </section>

        <section class="panel panel--showcase" id="experience" data-theme="light">
            <div class="showcase">
                <div class="showcase__sticky">
                    <div class="showcase__frame" data-showcase>
                        <div class="showcase__halo"></div>
                        <div class="showcase__bagel" data-showcase-bagel>
                            <?php foreach (range(1, 6) as $index): ?>
                                <span class="showcase__slice" aria-hidden="true"></span>
                            <?php endforeach; ?>
                        </div>
                        <div class="showcase__caption">
                            <p data-showcase-eyebrow>Ingrédients d'exception</p>
                            <h2 data-showcase-title>Récolte à l'aube</h2>
                            <p data-showcase-copy>Nos artisans sélectionnent chaque herbe, légume et poisson avant le lever du soleil pour garantir une fraîcheur absolue.</p>
                        </div>
                    </div>
                    <div class="showcase__progress" aria-hidden="true">
                        <span data-showcase-index>01</span>
                        <div class="showcase__progress-bar">
                            <span data-showcase-progress></span>
                        </div>
                        <span><?= str_pad(count($experience), 2, '0', STR_PAD_LEFT) ?></span>
                    </div>
                </div>
                <div class="showcase__steps">
                    <?php foreach ($experience as $step): ?>
                        <article class="showcase-step" data-color="<?= htmlspecialchars($step['color']) ?>" data-eyebrow="<?= htmlspecialchars($step['eyebrow']) ?>" data-title="<?= htmlspecialchars($step['title']) ?>" data-copy="<?= htmlspecialchars($step['copy']) ?>">
                            <div class="showcase-step__inner">
                                <p class="showcase-step__eyebrow"><?= htmlspecialchars($step['eyebrow']) ?></p>
                                <h3><?= htmlspecialchars($step['title']) ?></h3>
                                <p><?= htmlspecialchars($step['copy']) ?></p>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <section class="panel panel--atelier" id="atelier" data-theme="dark">
            <div class="atelier">
                <div class="atelier__headline">
                    <p class="atelier__eyebrow">Inside MayMiru</p>
                    <h2>Un atelier comme un laboratoire d'innovation culinaire.</h2>
                </div>
                <div class="atelier__grid">
                    <article>
                        <h3>Studio sensoriel</h3>
                        <p>Textures, parfums, sons : chaque détail est prototypé pour que l'ouverture de votre bagel évoque une keynote.</p>
                    </article>
                    <article>
                        <h3>Technologie artisanale</h3>
                        <p>Nos outils sur-mesure calibrent l'épaisseur des tranches et la température pour assurer une constance digne d'un produit phare.</p>
                    </article>
                    <article>
                        <h3>Service chorégraphié</h3>
                        <p>Les couches se révèlent en projection holographique sur place ou sur votre écran. Vous contrôlez chaque ingrédient.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="panel panel--menu" id="menu" data-theme="light">
            <div class="menu">
                <header class="menu__header">
                    <p class="menu__eyebrow">Collection signature</p>
                    <h2>Sélectionnez un bagel pour le décortiquer couche par couche.</h2>
                </header>
                <div class="menu__grid">
                    <?php foreach ($bagels as $bagel): ?>
                        <?php $data = htmlspecialchars(json_encode($bagel, JSON_UNESCAPED_UNICODE | JSON_HEX_APOS | JSON_HEX_QUOT)); ?>
                        <article class="menu-card" data-bagel="<?= $data ?>">
                            <div class="menu-card__content">
                                <h3><?= htmlspecialchars($bagel['name']) ?></h3>
                                <p><?= htmlspecialchars($bagel['description']) ?></p>
                                <span class="menu-card__cta">Voir les couches</span>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    </main>

    <section class="viewer" id="bagel-viewer" aria-hidden="true">
        <div class="viewer__backdrop"></div>
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

    <footer class="site-footer">
        <div class="site-footer__inner">
            <div>
                <p class="site-footer__brand">MayMiru</p>
                <p>Ouvert tous les jours · 7h — 19h · 24 rue des Saveurs, Montréal</p>
            </div>
            <p class="site-footer__note">Réservation au <a href="tel:+15145551234">+1 514 555 1234</a> · Suivez-nous @maymiru.bagels</p>
        </div>
    </footer>

    <script src="assets/app.js" defer></script>
</body>
</html>
