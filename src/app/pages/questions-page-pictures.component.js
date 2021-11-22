import {WFMComponent} from "../../art-quiz-app";

class QuestionsPagePicturesComponent extends WFMComponent {
    constructor(config) {
        super(config);

    }

}

export const questionsPagePicturesComponent = new QuestionsPagePicturesComponent({
    selector: 'app-questions-artists-page',
    onInit: function () {
        return null
    },
    template: `

<nav class="nav-panel">
    <a href="#"><button class="nav-panel-button effect">Home</button></a> 
    <p class="nav-panel-title">QUESTIONS</p> 
    <a href="#categoryPictures"><button class="nav-panel-button effect">Categories</button></a> 
</nav>
<div class="wrapper">
       <div class="question-wrapper">
    <p class="main-question"> Кто является автором данной картины?</p>
<!--    <div class="question-cards">-->
        <img class="question-pictures-card-img" src="../../images/categories/artists/001.jpg" alt="Picture">
<!--    </div>-->
    <div class="question-progress">
        <p class="bullet bullet-wrong"></p>
        <p class="bullet bullet-wrong"></p>
        <p class="bullet bullet-right"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
        <p class="bullet"></p>
    </div>
    <div class="question-answers">
        <button class="question-answer">Автор 1</button>
        <button class="question-answer">Автор 2</button>
        <button class="question-answer">Автор 3</button>
        <button class="question-answer">Автор 4</button>
    </div>

</div>
   </div>
    `
})
