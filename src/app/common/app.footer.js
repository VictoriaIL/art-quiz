import {WFMComponent} from "../../art-quiz-app";
import '../../style.css';


class AppFooter extends WFMComponent {
    constructor(config) {
        super(config);

    }
}

export const appFooter = new AppFooter({
    selector: 'app-footer',
    onInit: function () { return null},
    template: `

  <footer>

        <p class="footer_element"><a class="footer_element" href="https://github.com/VictoriaIL" target="_blank">VictoriaIL</a></p>
        <p class="footer_element">©2021</p>
        <p class="footer_element"><a class="footer_element" href="https://rs.school/js/" target="_blank"><img class="logo-rs" src="../../images/svg/rs_school_js.svg" alt="RS School"></a></p>

    </footer>
    `
})
