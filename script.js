/**
 * script.js
 * Logique d'interaction pour Yoon Wi.
 */

// Données simulées pour la démo
const busRoutes = [
    {
        id: "37",
        name: "ESP ➔ Maristes",
        time: "25 min",
        price: "150 FCFA",
        theme: "yellow-theme",
        stops: ["esp", "ucad", "point e", "castors", "maristes"]
    },
    {
        id: "121",
        name: "Keur Massar ➔ UCAD",
        time: "45 min",
        price: "300 FCFA",
        theme: "red-theme", // Ligne Express
        stops: ["keur massar", "colobane", "ucad", "fass", "esp"]
    },
    {
        id: "44",
        name: "Parcelles Assainies ➔ Palais",
        time: "12 min",
        price: "150 FCFA",
        theme: "yellow-theme",
        stops: ["parcelles", "grand médine", "palais de justice", "plateau"]
    },
    {
        id: "78",
        name: "Ouakam ➔ Maristes",
        time: "40 min",
        price: "200 FCFA",
        theme: "yellow-theme",
        stops: ["ouakam", "mermoz", "liberté 6", "maristes"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const routesContainer = document.getElementById('routes-container');
    const searchBtn = document.getElementById('search-btn');
    const startInput = document.getElementById('start-point');
    const endInput = document.getElementById('end-point');

    // Fonction pour afficher les cartes dans le Bento Grid
    function displayRoutes(routes) {
        routesContainer.innerHTML = '';
        
        if (routes.length === 0) {
            routesContainer.innerHTML = '<p style="grid-column: 1/-1; padding: 20px; text-align: center;">Aucun bus trouvé pour cet itinéraire.</p>';
            return;
        }

        routes.forEach(route => {
            const card = document.createElement('div');
            // Applique le thème de couleur spécifique (jaune ou rouge)
            card.className = `route-card ${route.theme}`;
            
            card.innerHTML = `
                <div class="card-badge">${route.id}</div>
                <h3>${route.name.replace('➔', '<br>➔')}</h3>
                <div class="card-meta">
                    <span class="meta-chip">⏱ ${route.time}</span>
                    <span class="meta-chip">🎫 ${route.price}</span>
                </div>
            `;
            routesContainer.appendChild(card);
        });
    }

    // Logique de recherche
    searchBtn.addEventListener('click', () => {
        const start = startInput.value.toLowerCase().trim();
        const end = endInput.value.toLowerCase().trim();

        const filtered = busRoutes.filter(route => {
            const matchStart = start === '' || route.stops.some(stop => stop.toLowerCase().includes(start));
            const matchEnd = end === '' || route.stops.some(stop => stop.toLowerCase().includes(end));
            return matchStart && matchEnd;
        });

        displayRoutes(filtered);
    });

    // Affichage par défaut au chargement de la page
    displayRoutes(busRoutes);
});