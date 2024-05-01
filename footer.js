export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2024 Tu Página Educativa. Todos los derechos reservados.</p>
    `;
    return footer;
}