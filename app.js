document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.app-view');

    navItems.forEach(button => {
        button.addEventListener('click', function(e) {
            // Empêche le comportement par défaut des liens anchor
            e.preventDefault();
            
            // 1. Récupérer la cible via l'attribut data-target défini dans le HTML
            const target = this.getAttribute('data-target');
            
            // Si on clique sur un onglet déjà actif, on ne fait rien
            if(this.classList.contains('active')) return;

            // 2. Désactiver tous les boutons et toutes les vues
            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));
            
            // 3. Activer le bouton cliqué et la vue correspondante
            this.classList.add('active');
            const targetView = document.getElementById('view-' + target);
            if(targetView) {
                targetView.classList.add('active');
            }
            
            // 4. Retour haptique (petite vibration sur mobile pour simuler un vrai bouton)
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(15);
            }
            
            // 5. Remonter instantanément en haut de la page lors du changement d'onglet
            window.scrollTo(0, 0);
        });
    });
});