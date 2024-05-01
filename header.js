// Función para crear la sección de encabezado
const createHeader = () => {
    // Función para ir a la página de inicio
    const goToHome = () => {
        window.location.href = 'index.html';
    };

    // Función para mostrar los cursos disponibles
    const showCourses = () => {
        alert('Aquí encontrarás nuestros cursos disponibles.');
    };

    // Función para mostrar información sobre nosotros
    const showAboutUs = () => {
        alert('Somos una plataforma educativa dedicada a brindar conocimiento de calidad.');
    };

    // Función para mostrar información de contacto
    const showContact = () => {
        alert('Puedes contactarnos en contact@tupaginaeducativa.com.');
    };

    // Crear el contenedor de la sección
    const section = document.createElement('section');
    section.id = 'headerSection';
    section.innerHTML = `
        <h1>Tu Página Educativa</h1>
        <nav>
            <ul>
                <li><a href="#" id="inicioBtn">Inicio</a></li>
                <li><a href="#" id="cursosBtn">Cursos</a></li>
                <li><a href="#" id="sobreBtn">Sobre Nosotros</a></li>
                <li><a href="#" id="contactoBtn">Contacto</a></li>
            </ul>
        </nav>
    `;

    // Agregar manejadores de eventos a los botones
    section.querySelector('#inicioBtn').addEventListener('click', goToHome);
    section.querySelector('#cursosBtn').addEventListener('click', showCourses);
    section.querySelector('#sobreBtn').addEventListener('click', showAboutUs);
    section.querySelector('#contactoBtn').addEventListener('click', showContact);

    // Agregar el encabezado a la sección principal
    return section;
};

export { createHeader };
