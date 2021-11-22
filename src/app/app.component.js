import {WFMComponent} from "../art-quiz-app";


class AppComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    onInit: function () { return null},
    template: `
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
`
})
