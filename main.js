import { createHeader} from './header.js';
import { createFooter } from './footer.js';
import { createMainContent } from './maincontent.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerSection = createHeader();
    const mainContent = createMainContent();
    const footer = createFooter();
    const body  = document.body;

    main.appendChild(headerSection);
    document.body.appendChild(mainContent);
    document.body.appendChild(footer);
    

});
