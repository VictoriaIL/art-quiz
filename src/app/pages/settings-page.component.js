import {WFMComponent} from "../../art-quiz-app";

class SettingsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);

    }

}

export const settingsPageComponent = new SettingsPageComponent({
    selector: 'app-setting-page',
    onInit: function () {
        return null
    },
    template: `
<nav class="nav-panel">
   <a href="#"><button class="nav-panel-button effect">Home</button></a> 
    <p class="nav-panel-title">Settings</p>
    <a href=""></a> 
</nav>
    `
})
