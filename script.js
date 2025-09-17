document.addEventListener('DOMContentLoaded', () => {
    const librosContainer = document.getElementById('libros-container');
    const inputBusqueda = document.getElementById('busqueda');
    let librosData = [];

    // Función para generar las tarjetas de los libros
    function mostrarLibros(libros) {
        librosContainer.innerHTML = ''; // Limpia el contenedor
        if (libros.length === 0) {
            librosContainer.innerHTML = '<p class="no-encontrado">No se encontraron libros.</p>';
            return;
        }

        libros.forEach(libro => {
            const libroCard = document.createElement('div');
            libroCard.className = 'libro-card';
            libroCard.innerHTML = `
                <div class="card-header">
                    <h3>${libro.titulo}</h3>
                </div>
                <div class="card-body">
                    <img src="imagenes/${libro.imagen}" alt="Imagen de ${libro.titulo}">
                    <div class="card-info">
                        <p><strong>Autor:</strong> ${libro.autores}</p>
                        <p><strong>Categoría:</strong> ${libro.categorias}</p>
                        <p><strong>Editorial:</strong> ${libro.editorial}</p>
                        <p><strong>Código o ISBN:</strong> ${libro.codigo_o_isbn}</p>
                        <p class="descripcion"><strong>Descripción:</strong> ${libro.descripcion}</p>
                    </div>
                </div>
            `;
            librosContainer.appendChild(libroCard);
        });
    }

    // Carga los datos de los libros desde el archivo JSON
    fetch('libros.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar libros.json');
            }
            return response.json();
        })
        .then(data => {
            librosData = data;
            mostrarLibros(librosData);
        })
        .catch(error => {
            console.error('Error:', error);
            librosContainer.innerHTML = `<p class="error-msg">Error al cargar la biblioteca. Por favor, verifica el archivo libros.json.</p>`;
        });

    // Filtra los libros en tiempo real al escribir en el buscador
    inputBusqueda.addEventListener('input', (e) => {
        const textoBusqueda = e.target.value.toLowerCase();
        const librosFiltrados = librosData.filter(libro => {
            return (
                libro.titulo.toLowerCase().includes(textoBusqueda) ||
                libro.autores.toLowerCase().includes(textoBusqueda) ||
                libro.categorias.toLowerCase().includes(textoBusqueda) ||
                libro.editorial.toLowerCase().includes(textoBusqueda) ||
                libro.codigo_o_isbn.toLowerCase().includes(textoBusqueda) ||
                (libro.descripcion && libro.descripcion.toLowerCase().includes(textoBusqueda))
            );
        });
        mostrarLibros(librosFiltrados);
    });
});