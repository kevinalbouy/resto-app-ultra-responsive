document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. GESTION DE LA NAVIGATION BASSE (Onglets)
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.app-view');

    navItems.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupère la cible
            const target = this.getAttribute('data-target');
            
            // Si on clique sur un onglet déjà actif, on ne fait rien
            if(this.classList.contains('active')) return;

            // Désactive tout
            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));
            
            // Active le bon bouton et la bonne vue
            this.classList.add('active');
            const targetView = document.getElementById('view-' + target);
            if(targetView) {
                targetView.classList.add('active');
            }
            
            // Vibration mobile
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(15);
            }
            
            // Remonte en haut de la page
            window.scrollTo(0, 0);
        });
    });

    // ==========================================
    // 2. GESTION DES ACCORDÉONS (Catégories Menu)
    // ==========================================
    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Sélectionne la catégorie parente entière
            const category = header.parentElement;
            
            // Ajoute ou enlève la classe "open" pour afficher/cacher les plats
            category.classList.toggle('open');
            
            // Petite vibration au clic
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

});