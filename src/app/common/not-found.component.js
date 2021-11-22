import {WFMComponent} from "../../art-quiz-app";
import '../../style.css';


class NotFound extends WFMComponent {
    constructor(config) {
        super(config);

    }
}

export const notFound = new NotFound ({
    selector: 'app-not-found',
    onInit: function () { return null },
    template: `
<div class="error-title"> 
<div>
<h2>Страница не найдена</h2>
<a href="#">Перейти на главную</a>
</div>
</div>
    `
})
