/**
 * script.js – Yoon Wi Dakar Transit
 */

const busRoutes = [
    { id: "37",  name: "ESP ➔ Maristes",              time: "25 min", price: "150 FCFA", theme: "yellow-theme", stops: ["esp", "ucad", "point e", "castors", "maristes"] },
    { id: "121", name: "Keur Massar ➔ UCAD",          time: "45 min", price: "300 FCFA", theme: "red-theme",    stops: ["keur massar", "colobane", "ucad", "fass", "esp"] },
    { id: "44",  name: "Parcelles ➔ Plateau",         time: "30 min", price: "150 FCFA", theme: "yellow-theme", stops: ["parcelles", "grand médine", "palais de justice", "plateau"] },
    { id: "78",  name: "Ouakam ➔ Maristes",           time: "40 min", price: "200 FCFA", theme: "yellow-theme", stops: ["ouakam", "mermoz", "liberté 6", "maristes"] },
    { id: "15",  name: "HLM ➔ Médina",               time: "18 min", price: "150 FCFA", theme: "yellow-theme", stops: ["hlm", "gueule tapée", "médina", "plateau"] },
    { id: "56",  name: "Yoff ➔ Sandaga",              time: "35 min", price: "200 FCFA", theme: "red-theme",    stops: ["yoff", "ngor", "almadies", "mermoz", "sandaga"] },
    { id: "8",   name: "Guédiawaye ➔ Colobane",      time: "50 min", price: "250 FCFA", theme: "dark-theme",   stops: ["guédiawaye", "pikine", "thiaroye", "colobane"] },
    { id: "92",  name: "Liberté 5 ➔ Grand Dakar",    time: "22 min", price: "150 FCFA", theme: "yellow-theme", stops: ["liberté 5", "liberté 6", "hlm", "grand dakar"] },
    { id: "24",  name: "Sicap ➔ Île de Gorée",       time: "45 min", price: "400 FCFA", theme: "red-theme",    stops: ["sicap", "plateau", "port", "gorée"] },
    { id: "33",  name: "Castors ➔ Almadies",         time: "28 min", price: "200 FCFA", theme: "yellow-theme", stops: ["castors", "fann résidence", "mermoz", "almadies"] },
    { id: "67",  name: "Pikine ➔ Soumbédioune",      time: "1h 10",  price: "300 FCFA", theme: "dark-theme",   stops: ["pikine", "thiaroye", "colobane", "soumbédioune"] },
    { id: "11",  name: "Plateau ➔ Corniche Ouest",   time: "20 min", price: "150 FCFA", theme: "yellow-theme", stops: ["plateau", "soumbédioune", "corniche", "almadies"] },
];

document.addEventListener('DOMContentLoaded', () => {
    const routesContainer = document.getElementById('routes-container');
    if (!routesContainer) return;

    const searchBtn = document.getElementById('search-btn');
    const startInput = document.getElementById('start-point');
    const endInput = document.getElementById('end-point');

    function displayRoutes(routes) {
        routesContainer.innerHTML = '';
        if (routes.length === 0) {
            routesContainer.innerHTML = '<p style="grid-column:1/-1;padding:40px;text-align:center;color:#4a554e;">Aucun bus trouvé pour cet itinéraire.</p>';
            return;
        }
        routes.forEach(route => {
            const card = document.createElement('a');
            card.href = 'itineraires.html';
            card.className = `route-card ${route.theme}`;
            card.innerHTML = `
                <div class="card-badge">${route.id}</div>
                <h3>${route.name.replace('➔', '<br>➔')}</h3>
                <div class="card-meta">
                    <span class="meta-chip">⏱ ${route.time}</span>
                    <span class="meta-chip">🎫 ${route.price}</span>
                </div>`;
            routesContainer.appendChild(card);
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const start = startInput.value.toLowerCase().trim();
            const end = endInput.value.toLowerCase().trim();
            const filtered = busRoutes.filter(r => {
                const ms = start === '' || r.stops.some(s => s.includes(start));
                const me = end === '' || r.stops.some(s => s.includes(end));
                return ms && me;
            });
            displayRoutes(filtered);
        });
    }

    // Affiche 6 lignes par défaut sur la home
    displayRoutes(busRoutes.slice(0, 6));
});
