import {router} from "../tools/router";
import {wfm} from '../tools/util'

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if (this.routes) this.initRoutes()
    }

    initComponents() {
        this.bootstrapComponent.render();
        this.components.forEach(this.renderComponent.bind(this));
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    getRoutePath(url) {
        let route;
        let componentName = url.split('/')[0];
        let componentId = url.split('/')[1];
        let isRouteWithId = !!this.routes.find(r => r.path === componentName)

        if (isRouteWithId && componentName && componentId) {
            return this.routes.find(r => r.path === componentName)
        }

        route = this.routes.find(r => r.path === url);

         return  route ? route : this.routes.find(r => r.path === "**");
        // if (!(isRouteWithId && route)) {
        //     // if(wfm.isUndefined(route)){
        //     return this.routes.find(r => r.path === "**")
        // }

        // return route;
    }

    renderRoute() {
        // let route, isRouteWithId;
        const url = router.getUrl();
        const activeRoute = this.getRoutePath(url);
        // let componentName = url.split('/')[0]
        // let componentId = url.split('/')[1]
        //
        // if (componentName && componentId) {
        //     isRouteWithId = !!this.routes.find(r => r.path === componentName)
        //
        // }
        //
        // route = this.routes.find(r => r.path === url)
        // console.log(isRouteWithId)

        // if (!(isRouteWithId && route)) {
        //     // if(wfm.isUndefined(route)){
        //     route = this.routes.find(r => r.path === "**")
        // }

        document.querySelector('router-outlet').innerHTML = `<${activeRoute.component.selector}></${activeRoute.component.selector}>`
        this.renderComponent(activeRoute.component)
    }

    renderComponent(c) {
        c.render();
        c.onInit();
    }
}
