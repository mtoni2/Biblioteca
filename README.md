# 📚 Mi Biblioteca Escolar

Este es un proyecto de biblioteca digital creado por Marcelo Tonini para el C.E.N.S. 3-484 "Laila Abusamra", que permite a los alumnos y docentes explorar nuestra colección de libros de forma sencilla y rápida.

---

### 🌟 Características

* **Buscador Rápido:** Encuentra libros por título, autor, categoría o ISBN.
* **Interfaz Clara:** Muestra la portada, autor, editorial y otros datos clave de cada libro.
* **Acceso Sencillo:** El proyecto es completamente web y se puede acceder desde cualquier dispositivo con un navegador web, simplemente escaneando un código QR.

---

### 💻 Cómo Funciona

El proyecto es un sitio web estático, lo que significa que no necesita un servidor complejo para funcionar. Utiliza los siguientes archivos:

* `index.html`: La estructura principal de la página.
* `style.css`: Los estilos y el diseño visual de la biblioteca.
* `script.js`: El cerebro de la aplicación. Se encarga de leer los datos de los libros y gestionar la funcionalidad de búsqueda.
* `libros.json`: El archivo de base de datos que contiene toda la información de los libros en un formato estructurado.
* `imagenes/`: La carpeta donde se guardan las portadas de los libros.

---

### ➕ Cómo Agregar Nuevos Libros (Manual)

Debido a que este es un proyecto estático, la adición de nuevos libros se realiza de forma manual. Sigue estos pasos:

1.  **Añadir la imagen:** Guarda la portada del nuevo libro en la carpeta `imagenes/`. Asegúrate de que el nombre del archivo sea descriptivo (ej. `el-laberinto-de-la-soledad.jpg`).
2.  **Modificar `libros.json`:** Abre el archivo `libros.json` y agrega una nueva entrada de libro, asegurándote de usar una coma `,` después del libro anterior. Usa esta plantilla y reemplaza la información:

```json
,
{
  "titulo": "Título del nuevo libro",
  "autor": "Autor del nuevo libro",
  "categorias": "Categoría",
  "editorial": "Editorial",
  "isbn": "ISBN o Código",
  "descripcion": "Descripción del libro",
  "imagen": "nombre-del-archivo.jpg"
}