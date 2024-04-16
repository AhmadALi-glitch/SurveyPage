
class App {

    routerOutput = document.querySelector('.router-output')
    router;

    constructor() {

        console.log(homePage)
        // load the page based on the route path

        this.router = new Router(
            this.routerOutput
            ,
            [
                {
                    path: '/home',
                    page: homePage,
                },
                {
                    path: '/',
                    page: homePage
                },
                {
                    path: '/survies',
                    page: surviesPage 
                },
                {
                    path: '/fallback',
                    page: homePage 
                },
                {
                    path: '/not-found',
                    page: notFoundPage 
                }
            ],

        "/not-found", "/home")

        const currentPage = document.location.hash.split(/[?#]/)[1];

        this.router.navigateTo(`/${currentPage}`)

    }

}

const app = new App();
