
class Home extends Page {

    name = "home"
    path = "/"
    content = document.createElement("div")

    constructor() {
        super()
        this.content.classList.add(".home-wrapper")
        this.content.textContent = "Hello This is the home page !"
        this.content.appendChild(new Select().content)
    }

}

const homePage = new Home()
