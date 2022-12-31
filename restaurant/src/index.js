import './style.css';
import createMenu from './menu.js';
import createHome from './home.js';
import createContact from './contact.js';


function landingPage (){
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const header = document.createElement('div');
    header.className = 'header';
    const name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = 'Costco Grand Bazaar';

    const btnTab = document.createElement('div');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';

    btnTab.appendChild(homeBtn);
    btnTab.appendChild(menuBtn);
    btnTab.appendChild(contactBtn);

    header.appendChild(name);
    header.appendChild(btnTab);

    const content = document.createElement('div');
    content.classList = 'content';

    container.appendChild(header);
    container.appendChild(content);

    homeBtn.addEventListener('click', function() {
        content.innerHTML = '';
        createHome();
    })

    menuBtn.addEventListener('click', function(){
        content.innerHTML = '';
        content.appendChild(createMenu());
    })

    contactBtn.addEventListener('click', function(){
        content.innerHTML = '';
        createContact();
    })

    createHome();
    return container;
}

document.body.appendChild(landingPage());