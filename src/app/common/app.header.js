import {WFMComponent} from "../../art-quiz-app";
import '../../style.css';


class AppHeader extends WFMComponent {
    constructor(config) {
        super(config);

    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    onInit: function () { return null},
    template: `
<!--  <nav style="background: #4527a0">-->
<!--  <div class="nav-wrapper" style="text-align: center">-->
<!--  <a href="#"  class="brand-logo">ART-QUIZ</a>-->
<!--   <ul id="nav-mobile" class="right hide-on-med-and-down">-->
<!--      <li><a href="#">Start Page</a></li>-->
<!--      <li><a href="#categoryArtists">Page Category Artists</a></li>-->
<!--            <li><a href="#categoryPictures">Page Category Artists</a></li>-->

<!--    </ul>-->
<!--     </div>-->
<!--</nav>-->

<header>

        <h1>
            ART-QUIZ
        </h1>
<!--         <li><a href="#">Start Page</a></li>&ndash;&gt;-->
<!--<li><a href="#categoryArtists">Page Category Artists</a></li>-->
<!--            <li><a href="#categoryPictures">Page Category Artists</a></li>-->
    </header>
    `
})
