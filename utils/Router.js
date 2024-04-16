

class Router {

    routes = [];
    notFoundPath = ''
    fallback = ''
    outlet;

    constructor(outlet, routes, notFoundPath, fallback) {
        this.routes = routes;
        this.fallback = fallback;
        this.notFoundPath = notFoundPath;
        this.outlet = outlet;
    }


    fallback() {
        const fallbackPage = this.routes.find((route) => {
            return route.path == this.fallback;
        })
        this.outlet.replaceChildren(fallbackPage.content);
    }

    navigateTo(path) {

        const notFound = this.routes.find((route) => {
            console.log("p", route.path)
            return route.path == this.notFoundPath;
        })

        const navigatedToPage = this.routes.find((route) => {
            return route.path == path;
        })

        navigatedToPage ? this.outlet.replaceChildren(navigatedToPage?.page.content) : this.outlet.replaceChildren(notFound?.page.content);

    }

}