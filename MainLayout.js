

class MainLayout extends Layout  {

    container = document.createElement("div");
    child = app.routerOutput;

    constructor() {
        super();
        document.body.appendChild(this.container);
        this.container.appendChild(this.child)
    }

    style() {
        this.container.classList.add(
            "main-layout-container",
            "w-svw",
            "h-svh",
            "p-[10px]",
            "bg-red-300"
        )
    }

}

const mainLayout = new MainLayout()
mainLayout.style()
