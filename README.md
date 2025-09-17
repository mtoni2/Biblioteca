# 📚 Mi Biblioteca Escolar

Este es un proyecto de biblioteca digital creado por **Marcelo Tonini** para el **C.E.N.S. 3-484 "Laila Abusamra"**, que permite a los alumnos y docentes explorar la colección de libros de forma sencilla y rápida.

---

## 🌟 Características

- **Buscador rápido:** Encuentra libros por título, autor, categoría o ISBN.  
- **Interfaz clara:** Muestra la portada, autor, editorial y otros datos clave de cada libro.  
- **Acceso sencillo:** 100% web, accesible desde cualquier dispositivo con un navegador, incluso a través de un **código QR**.

---

## 💻 Cómo funciona

El proyecto es un **sitio web estático**, por lo que no necesita un servidor complejo para funcionar.  
Está compuesto por los siguientes archivos:

- `index.html` → estructura principal de la página.  
- `style.css` → estilos y diseño visual.  
- `script.js` → funcionalidad de búsqueda y gestión de datos.  
- `libros.json` → base de datos de libros en formato JSON.  
- `imagenes/` → carpeta con las portadas de los libros.  

---

## ➕ Cómo agregar nuevos libros

Debido a que es un proyecto estático, la adición de libros se realiza **manualmente**:

1. **Añadir la portada:** Guarda la imagen en la carpeta `imagenes/` con un nombre descriptivo, por ejemplo:  
   `el-laberinto-de-la-soledad.jpg`  

2. **Editar `libros.json`:** Abre el archivo y agrega una nueva entrada siguiendo el formato:  

   ```json
   {
     "titulo": "Título del nuevo libro",
     "autor": "Autor del nuevo libro",
     "categorias": "Categoría",
     "editorial": "Editorial",
     "isbn": "ISBN o Código",
     "descripcion": "Descripción del libro",
     "imagen": "nombre-del-archivo.jpg"
   }
   ```

3. **Guardar cambios:** Una vez editado el `libros.json` y añadida la portada, sube los cambios a GitHub. 

---

## 🌐 Acceso al proyecto

📖 **Sitio Web del Proyecto:**  
👉 https://mtoni2.github.io/Biblioteca/  

📱 **Acceso vía código QR:**  
Escanea el siguiente QR desde tu celular para abrir directamente la biblioteca:  

*(Aquí puedes insertar la imagen de tu código QR)*  

---

## 👨‍💻 Autor

Proyecto desarrollado por:  
**Marcelo Tonini**