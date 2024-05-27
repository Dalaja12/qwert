// Obtener referencia al botón de inscripción y a la ventana emergente
const signupButton = document.querySelector('button[type="submit"]');
const modal = document.getElementById('myModal');

// Manejar el clic en el botón de inscripción
signupButton.addEventListener('click', () => {
    // Obtener los valores del formulario
    const averageValue = parseFloat(document.getElementById('average').value);
    const schoolValue = document.getElementById('school').value;

    // Definir la ruta de la imagen según las condiciones especificadas
    let imageSrc = '';
    if ((averageValue <= 7.9 && schoolValue === 'Otro') || (averageValue >= 8.0 && schoolValue === 'Otro') || (averageValue <= 7.9 && schoolValue !== 'Otro')) {
        imageSrc = 'Recursos/no_pase_directo.jpeg';
    } else {
        imageSrc = 'Recursos/pase_directo.jpeg';
    }

    // Mostrar la ventana emergente con la imagen correspondiente
    showModal(imageSrc);
});

// Función para mostrar la ventana emergente con la imagen correspondiente
function showModal(imageSrc) {
    // Obtener la imagen dentro de la ventana emergente y establecer su src
    const modalImage = document.getElementById('result-image');
    modalImage.src = imageSrc;

    // Mostrar la ventana emergente
    modal.style.display = 'block';
}

// Manejar el clic en el botón de cerrar
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar la ventana emergente al hacer clic en el botón de cerrar
});
