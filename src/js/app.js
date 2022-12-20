document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= 12; i++) {
    // Imagen Thumb
    const imagen = document.createElement('picture');

    imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
        <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
        <img
          loading="lazy"
          width="200"
          height="300"
          src="build/img/thumb/${i}.jpg"
          alt="Imagen Geleria ${i}"
        />
      `;

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  console.log('mostrando...', id);
  // Imagen Grande
  const imagen = document.createElement('picture');

  imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif" />
        <source srcset="build/img/grande/${id}.webp" type="image/webp" />
        <img
          loading="lazy"
          width="200"
          height="300"
          src="build/img/grande/${id}.jpg"
          alt="Imagen Geleria ${id}"
        />
      `;

  //? Crear overlay con la imagen: Oscurecer fondo de imagen (overlay)
  const overlay = document.createElement('div');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');
  // Cerrar al hacer click fuera del modal (en el background)
  overlay.onclick = function () {
    const body = document.querySelector('body');

    // Remover overflow del body
    // body.classList.remove('fijar-body');
    body.removeAttribute('class'); // todo: dejaré esto por aquí pero es peligroso porque elimina todas las clases. Cuando lo que se desea es eliminar solo una clase. Pero de momento body tiene una sola clase asi que no hay problema. Perooo si body se le agrega otra clase hay que cambiar a .classList.remove...

    // Eliminar el overlay (autoeliminación 😎)
    overlay.remove();
  };

  // Boton para cerrar el modal
  const cerrarModal = document.createElement('p');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  cerrarModal.onclick = function () {
    const body = document.querySelector('body');

    // Remover overflow del body
    body.classList.remove('fijar-body');

    // Eliminar el overlay
    overlay.remove();
  };

  overlay.appendChild(cerrarModal);

  // Añadirlo al HTML
  const body = document.querySelector('body');
  body.appendChild(overlay);

  // Evitar scroll en la pagina mientras se muestra la imagen
  body.classList.add('fijar-body');
}
