import {WFMComponent} from "../../art-quiz-app";

class ScorePageComponent extends WFMComponent {
    constructor(config) {
        super(config);

    }

}

export const scorePageComponent = new ScorePageComponent({
    selector: 'app-score-page',
    onInit: function () {
        return null
    },
    template: `
<nav class="nav-panel">
   <a href="#"><button class="nav-panel-button effect">Home</button></a> 
    <p class="nav-panel-title">Score</p>
    <a href=""><button class="nav-panel-button effect">Categories</button></a> 
</nav>
<div class="wrapper">
  <section class="category-cards-wrapper">
</section>
</div>
    `
})
