import {WFMComponent} from "../../art-quiz-app";
import {categoriesPictures} from "../consts/categoryConfig";
import {categoryArtistsPageComponent} from "./category-artists-page.component";

class CategoryPicturesPageComponent extends WFMComponent {
    constructor(config) {
        super(config);

    }

}

export const categoryPicturesPageComponent = new CategoryPicturesPageComponent({
    selector: 'app-category-pictures-page',
    onInit: function () {
        generateCards();
    },
    template: `

<nav class="nav-panel">
   <a href="#"><button class="nav-panel-button effect">Home</button></a> 
    <p class="nav-panel-title">CATEGORIES</p>
    <a href=""></a> 
</nav>
<div class="wrapper">
  <section class="category-cards-wrapper">
</section>
</div>
    `
})

function generateCards() {
    let generateListOfCards = '';
    const filledCardsCollection = categoriesPictures.map((el) => {
        return `
         <a href="#questionsPagePictures/${el['id']}" class="category-card-link"><div class="category-card">
                <div class="category-card-info">
                    <p class="category-card-title">${el['title']}</p>
                    <p class="category-card-number">${el['progress']}/10</p>
                </div>
                <div class="image-wrapper">
                 <object>
                <a href="#scorePage"><p class="image-score">Score</p></a>
                 </object>
                <img class="category-card-image" src="${el['previewImage']}" alt="Picture">
                </div>
            </div></a>
       `
    })
    generateListOfCards = filledCardsCollection.join(' ').toString()

    const parser = new DOMParser();
    // let parsedHtml = parser.parseFromString(categoryArtistsPageComponent.template, 'text/html');
    document.querySelector('.category-cards-wrapper').insertAdjacentHTML('beforeend', generateListOfCards)
}
