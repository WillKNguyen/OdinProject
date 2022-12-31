import Icon from './location.jpg'

export default function createContact(){
    const contact = document.querySelector('.content');
    const phone = document.createElement('div');
    phone.innerHTML = 'Phone: 123 456 7890';
    const location = new Image();

    location.src = Icon;

    contact.appendChild(phone);
    contact.appendChild(location);

    return contact;
}