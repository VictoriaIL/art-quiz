import {WFMComponent} from "../../art-quiz-app";

class StartPageComponent extends WFMComponent {
    constructor(config) {
        super(config);

    }

}

export const startPageComponent = new StartPageComponent({
    selector: 'app-start-page',
    onInit: function () {
        return null
    },
    template: `
<div class="wrapper">
       <section class="menu">

            <div class="quiz-container">
                <div class="artists-quiz">
                    <p class="quiz-title">Artists quiz</p>
                   <a href="#categoryArtists"> <img src="../../images/artists-quiz.jpg"  alt="Artists quiz"></a>
                </div>
                <div class="pictures-quiz">
                    <p class="quiz-title">Pictures quiz</p>
                    <a href="#categoryPictures"><img src="../../images/pictures-quiz.jpg" alt="Pictures quiz"></a>
                </div>
            </div>

            <a href="#settingsPage"><button class="settings-button">Settings</button></a>

        </section>
   </div>
    `
})
