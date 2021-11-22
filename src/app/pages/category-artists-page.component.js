import {WFMComponent} from "../../art-quiz-app";
import {categoriesArtists} from '../consts/categoryConfig';


class CategoryArtistsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    // events() {
    //     return {
    //         'click .category-card': 'onCardClick'
    //     }
    // }
    //
    // onCardClick(e) {
    //
    // }
}

export const categoryArtistsPageComponent = new CategoryArtistsPageComponent({
    selector: 'app-category-artists-page',
    onInit: function () {
        generateCards()
    },
    template: `
<nav class="nav-panel">
    <a href="#"><button class="nav-panel-button effect left">Home</button></a> 
    <p class="nav-panel-title">CATEGORIES</p>
    <a href=""></a> 
</nav>
<div class="wrapper">
    <section class="category-cards-wrapper">
</section>
</div>
    `,
})

function generateCards() {
    let generateListOfCards = '';
    const filledCardsCollection = categoriesArtists.map((el) => {
        return `
         <a href="#questionsPageArtists/${el['id']}" class="category-card-link"><div class="category-card">
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

