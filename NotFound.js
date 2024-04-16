

class NotFound extends Page {

    name = "not-found"
    path = "/not-found"
    content = document.createElement("div")

    constructor() {
        super()
        this.content.classList.add("not-found-wrapper")
        this.content = "Not Found .. Go Back Home"
    }

}

const notFoundPage = new NotFound()
