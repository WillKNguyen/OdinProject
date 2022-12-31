import icon1 from './hotdog1.jpeg';
import icon2 from './hotdog2.jpg';
import icon3 from './hotdog3.jpg';
import icon4 from './hotdog4.jpg';
import icon5 from './hotdog5.jpg';
import icon6 from './hotdog6.jpg';

export default function createMenu(){
    const menu = document.createElement('div');
    menu.className ='menu';

    const item1 = document.createElement('div');
    const item1IMG = new Image();
    item1IMG.className = 'menupic';
    const item1Desc = document.createElement('div');
    item1IMG.src = icon1;
    item1Desc.innerHTML = 'Hot dog and bun'
    item1.appendChild(item1IMG);
    item1.appendChild(item1Desc);

    const item2 = document.createElement('div');
    const item2IMG = new Image();
    item2IMG.className = 'menupic';
    const item2Desc = document.createElement('div');
    item2IMG.src = icon2;
    item2Desc.innerHTML = 'Yup, more hot dog and bun';
    item2.appendChild(item2IMG);
    item2.appendChild(item2Desc);

    const item3 = document.createElement('div');
    const item3IMG = new Image();
    item3IMG.className = 'menupic';
    const item3Desc = document.createElement('div');
    item3IMG.src = icon3;
    item3Desc.innerHTML = 'The same hot dog and bun';
    item3.appendChild(item3IMG);
    item3.appendChild(item3Desc);

    const item4 = document.createElement('div');
    const item4IMG = new Image();
    item4IMG.className = 'menupic';
    const item4Desc = document.createElement('div');
    item4IMG.src = icon4;
    item4Desc.innerHTML = 'hot dog and bun 2';
    item4.appendChild(item4IMG);
    item4.appendChild(item4Desc);

    const item5 = document.createElement('div');
    const item5IMG = new Image();
    item5IMG.className = 'menupic';
    const item5Desc = document.createElement('div');
    item5IMG.src = icon5;
    item5Desc.innerHTML = 'Yup, more hot dog and bun x2';
    item5.appendChild(item5IMG);
    item5.appendChild(item5Desc);

    const item6 = document.createElement('div');
    const item6IMG = new Image();
    item6IMG.className = 'menupic';
    const item6Desc = document.createElement('div');
    item6IMG.src = icon6;
    item6Desc.innerHTML = 'You know what it is';
    item6.appendChild(item6IMG);
    item6.appendChild(item6Desc);

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);

    return menu;
}   