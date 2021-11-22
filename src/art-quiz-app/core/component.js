import {wfm} from "../tools/util";

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.onInit = config.onInit;
        this.el = null;
    }

    render() {
        this.el = document.querySelector(this.selector);
        if (!this.el) {
            throw new Error(`Component with selector ${this.selector} was not found`)
        }
        this.el.innerHTML = this.template;

        this._initEvents()
    }

    _initEvents() {
        if (wfm.isUndefined(this.events)) return

        let events = this.events();

        Object.keys(events).forEach(key => {
            let listener = key.split(' ')

            this.el
                .querySelectorAll(listener[1])
                .forEach((el) => {
                    el.addEventListener(listener[0], this[events[key]].bind(this))
                })
        })
    }
}
