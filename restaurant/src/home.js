import Icon from './costco_hot_dog.jpg'

export default function createHome(){
    const content = document.querySelector('.content');
    const review = document.createElement('div');
    review.innerHTML = '"The bun-to-dog ratio was unbeatable. There was also the right amount of ketchup and mustard, making it the most moreish hot dog we\'ve ever eaten. The only downside was that the bun got slightly soggy. We rated it 9/10" - BusinessInsider';
    const hotDogIMG = new Image();
    hotDogIMG.classList = 'hotdogpicture';
    hotDogIMG.src = Icon;

    const closing = document.createElement('div');
    closing.innerHTML = 'Order online or visit us';

    content.appendChild(review);
    content.appendChild(hotDogIMG);
    content.appendChild(closing);
}