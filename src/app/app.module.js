import {WFMModule} from "../art-quiz-app/index";
import {appComponent} from "./app.component";
import {appHeader} from "./common/app.header";
import {appFooter} from "./common/app.footer";
import {appRoutes} from "./app.routes";
import bootstrap from 'bootstrap'
class AppModule extends WFMModule {
    constructor(config) {
        super(config);

    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        appFooter
    ],
    bootstrap: appComponent,
    routes: appRoutes
})
