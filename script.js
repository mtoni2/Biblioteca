document.addEventListener('DOMContentLoaded', () => {
    const librosContainer = document.getElementById('libros-container');
    const inputBusqueda = document.getElementById('busqueda');
    const botonBuscar = document.getElementById('boton-buscar');
    let librosData = [];

    // Función para generar las tarjetas de los libros
    function mostrarLibros(libros) {
        librosContainer.innerHTML = '';
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
                        <p><strong>Autor:</strong> ${libro.autor}</p>
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

    // Función para filtrar los libros
    function filtrarLibros() {
        const textoBusqueda = inputBusqueda.value.toLowerCase();
        const librosFiltrados = librosData.filter(libro => {
            return (
                libro.titulo.toLowerCase().includes(textoBusqueda) ||
                libro.autor.toLowerCase().includes(textoBusqueda) || // Corrección: de "autores" a "autor"
                libro.categorias.toLowerCase().includes(textoBusqueda) ||
                libro.editorial.toLowerCase().includes(textoBusqueda) ||
                (libro.descripcion && libro.descripcion.toLowerCase().includes(textoBusqueda)) ||
                (libro.codigo_o_isbn && libro.codigo_o_isbn.toLowerCase().includes(textoBusqueda))
            );
        });
        mostrarLibros(librosFiltrados);
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

    // Escucha el evento de clic en el botón de búsqueda
    botonBuscar.addEventListener('click', filtrarLibros);

    // Escucha el evento de "Enter" en el campo de búsqueda
    inputBusqueda.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            filtrarLibros();
        }
    });

    // Escucha el evento de escritura en el campo de búsqueda (para búsqueda en tiempo real)
    inputBusqueda.addEventListener('input', filtrarLibros);
});