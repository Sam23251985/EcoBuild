const concepts = {
    planta: {
        title: "Planta",
        content: "La planta es una vista desde arriba de un edificio o espacio. Muestra la distribución de los espacios en un nivel horizontal.",
        image: "/placeholder.svg?height=200&width=300"
    },
    alzado: {
        title: "Alzado",
        content: "El alzado es una vista frontal, lateral o posterior de un edificio. Muestra la fachada y sus elementos.",
        image: "/placeholder.svg?height=200&width=300"
    },
    corte: {
        title: "Corte",
        content: "El corte o sección es una vista que muestra el interior de un edificio como si se hubiera cortado verticalmente.",
        image: "/placeholder.svg?height=200&width=300"
    }
};

function showConcept(conceptName) {
    const concept = concepts[conceptName];
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="concept">
            <h2>${concept.title}</h2>
            <p>${concept.content}</p>
            <img src="${concept.image}" alt="${concept.title}" class="concept-image" onclick="showPopup('${conceptName}')">
        </div>
    `;
}

function showPopup(conceptName) {
    const concept = concepts[conceptName];
    document.getElementById('popupTitle').textContent = concept.title;
    document.getElementById('popupContent').textContent = concept.content;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Load the first concept by default
showConcept('planta');