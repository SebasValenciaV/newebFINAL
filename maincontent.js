// Función para crear el contenido principal
export function createMainContent() {
    // Función para manejar el envío del formulario
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const participantData = Object.fromEntries(formData.entries());
        const courseName = event.target.dataset.courseName;

        // Realizar la prueba básica según el curso
        let testResults = {};
        switch (courseName) {
            case 'Matemáticas':
                // Simulamos una prueba básica de Matemáticas
                const answerMath = parseInt(prompt('¿Cuánto es 2 + 2?'));
                testResults.passed = (answerMath === 4);
                break;
            case 'Ciencias':
                // Simulamos una prueba básica de Ciencias
                const answerScience = prompt('¿Cuál es el planeta más grande del sistema solar?');
                testResults.passed = (answerScience.toLowerCase() === 'júpiter');
                break;
            case 'Historia':
                // Simulamos una prueba básica de Historia
                const answerHistory = parseInt(prompt('¿En qué año se independizó México?'));
                testResults.passed = (answerHistory === 1821);
                break;
            case 'Idiomas':
                // Simulamos una prueba básica de Idiomas
                const answerLanguage = prompt('¿Cuál es el significado de "hello" en español?');
                testResults.passed = (answerLanguage.toLowerCase() === 'hola');
                break;
            default:
                console.log('Curso no reconocido');
                return;
        }

        // Almacenar los resultados de la prueba en el localStorage
        const database = JSON.parse(localStorage.getItem('database')) || [];
        database.push({ participantData, courseName, testResults });
        localStorage.setItem('database', JSON.stringify(database));

        // Mostrar los resultados dentro del mismo curso
        const courseSection = event.target.closest('.course');
        const resultContainer = courseSection.querySelector('.test-results');
        const resultMessage = testResults.passed ? '¡Felicitaciones, has aprobado la prueba!' : 'Lo sentimos, no has aprobado la prueba.';
        const participantName = participantData.participantName;
        resultContainer.innerHTML = `
            <p>Resultado de ${participantName} en ${courseName}: ${resultMessage}</p>
        `;

        // Limpiar el formulario después del envío
        event.target.reset();

        // Mostrar los resultados en la tabla de participantes
        const participantTable = document.getElementById('participantTable');
        participantTable.innerHTML += `
            <tr>
                <td>${participantName}</td>
                <td>${courseName}</td>
                <td>${testResults.passed ? 'Aprobado' : 'Reprobado'}</td>
            </tr>
        `;
    };

    // Resto del código para mostrar los cursos y agregar manejadores de eventos

    const mainContent = document.createElement('div');
    mainContent.classList.add('container');
    mainContent.innerHTML = `
        <section>
            <h2>¡Bienvenido!</h2>
            <p>Bienvenido a Tu Página Educativa, tu recurso educativo en línea.</p>
        </section>
        
        <section id="coursesSection">
            <h2>Descubre Nuestros Cursos</h2>
            <div class="course">
                <img src="course1.jpg" alt="Curso de Matemáticas">
                <h3>Curso de Matemáticas</h3>
                <p>Domina los conceptos matemáticos básicos y avanzados.</p>
                <button class="more-info-btn">Más información</button>
                <div class="course-details" style="display: none;">
                    <form class="participant-form" data-course-name="Matemáticas">
                        <input type="text" name="participantName" placeholder="Tu Nombre" required>
                        <button type="submit">Tomar prueba</button>
                    </form>
                    <div class="test-results"></div>
                </div>
            </div>
            
            <div class="course">
                <img src="course2.jpg" alt="Curso de Ciencias">
                <h3>Curso de Ciencias</h3>
                <p>Explora el fascinante mundo de la ciencia y la naturaleza.</p>
                <button class="more-info-btn">Más información</button>
                <div class="course-details" style="display: none;">
                    <form class="participant-form" data-course-name="Ciencias">
                        <input type="text" name="participantName" placeholder="Tu Nombre" required>
                        <button type="submit">Tomar prueba</button>
                    </form>
                    <div class="test-results"></div>
                </div>
            </div>
            
            <div class="course">
                <img src="course3.jpg" alt="Curso de Historia">
                <h3>Curso de Historia</h3>
                <p>Descubre los eventos y figuras que han dado forma al mundo moderno.</p>
                <button class="more-info-btn">Más información</button>
                <div class="course-details" style="display: none;">
                    <form class="participant-form" data-course-name="Historia">
                        <input type="text" name="participantName" placeholder="Tu Nombre" required>
                        <button type="submit">Tomar prueba</button>
                    </form>
                    <div class="test-results"></div>
                </div>
            </div>
            
            <div class="course">
                <img src="course4.jpg" alt="Curso de Idiomas">
                <h3>Curso de Idiomas</h3>
                <p>Aprende un nuevo idioma y expande tus horizontes culturales.</p>
                <button class="more-info-btn">Más información</button>
                <div class="course-details" style="display: none;">
                    <form class="participant-form" data-course-name="Idiomas">
                        <input type="text" name="participantName" placeholder="Tu Nombre" required>
                        <button type="submit">Tomar prueba</button>
                    </form>
                    <div class="test-results"></div>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Últimas Noticias</h2>
            <p>No hay noticias disponibles actualmente.</p>
        </section>

        <section>
            <h2>Tabla de Participantes</h2>
            <table id="participantTable">
                <tr>
                    <th>Nombre del Participante</th>
                    <th>Curso</th>
                    <th>Calificación</th>
                </tr>
            </table>
        </section>
    `;

    // Agregar manejador de eventos al botón "Más información" de cada curso
    const moreInfoBtns = mainContent.querySelectorAll('.more-info-btn');
    moreInfoBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const course = mainContent.querySelectorAll('.course')[index];
            toggleCourseDetails(course);
        });
    });

    // Agregar manejador de eventos al formulario de cada curso
    const participantForms = mainContent.querySelectorAll('.participant-form');
    participantForms.forEach((form) => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Función para mostrar/ocultar detalles del curso
    const toggleCourseDetails = (course) => {
        const details = course.querySelector('.course-details');
        details.style.display = (details.style.display === 'none') ? 'block' : 'none';
    };

    // Cargar datos del localStorage al cargar la página
    window.addEventListener('DOMContentLoaded', () => {
        const database = JSON.parse(localStorage.getItem('database')) || [];
        const participantTable = document.getElementById('participantTable');
        database.forEach((entry) => {
            const { participantData, courseName, testResults } = entry;
            participantTable.innerHTML += `
                <tr>
                    <td>${participantData.participantName}</td>
                    <td>${courseName}</td>
                    <td>${testResults.passed ? 'Aprobado' : 'Reprobado'}</td>
                </tr>
            `;
        });
    });

    return mainContent;
}
